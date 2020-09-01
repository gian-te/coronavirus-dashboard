using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using coronavirus_dashboard_api.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace coronavirus_dashboard_api.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class CountriesController : ControllerBase
    {
        public static System.Net.Http.HttpClient Client = new System.Net.Http.HttpClient();

        // GET api/values/5
        [Route("parallel/all")]
        [HttpGet]
        public ActionResult<string> GetAllInParallel()
        {
            Stopwatch timer = new Stopwatch();
            timer.Start();

            var countries = GetAllCountries();
            List<dynamic> retVal = new List<dynamic>();

            Parallel.ForEach(countries, country =>
                {
                    var countryData = GetCountryDailyStatsInParallel(country);
                    if (countryData != null)
                    {
                        retVal.Add(countryData);
                    }
                });

            timer.Stop();
            return Ok(retVal);
        }

        // GET api/values/5
        [Route("parallel/{country}")]
        [HttpGet]
        public ActionResult<string> GetCountryInParallel(string country)
        {
            var retVal = GetCountryDailyStatsInParallel(country);

            return Ok(retVal);
        }


        [Route("serial/all")]
        [HttpGet]
        public ActionResult<string> GetAllInSerial()
        {
            Stopwatch timer = new Stopwatch();
            timer.Start();

            var countries = GetAllCountries();
            List<dynamic> retVal = new List<dynamic>();

            foreach (var country in countries)
            {
                var countryData = GetCountryInSerial(country);
                if (countryData != null)
                {
                    retVal.Add(countryData);
                }
            }

            timer.Stop();
            return Ok(retVal);
        }

        // GET api/values/5
        [Route("serial/{country}")]
        [HttpGet]
        public ActionResult<string> GetCountryInSerial(string country)
        {
            var retVal = GetCountryDailyStatsInSerial(country);

            return Ok(retVal);
        }



        private List<string> GetAllCountries()
        {
            var response = Client.GetAsync("https://corona.lmao.ninja/v2/countries?yesterday");
            response.Wait();

            var result = response.Result.Content.ReadAsStringAsync().Result;
            dynamic jObject = JsonConvert.DeserializeObject(result);
            List<string> items = new List<string>();
            foreach (var item in jObject)
            {
                items.Add(item.country.ToString());
            }
            return items;
        }

        private dynamic GetCountryDailyStatsInParallel(string country)
        {
            try
            {

                // https://corona.lmao.ninja/v2/historical/Philippines?lastdays=300
                var response = Client.GetAsync("https://corona.lmao.ninja/v2/historical/" + country + "?lastdays=300");
                response.Wait();

                var result = response.Result.Content.ReadAsStringAsync().Result;
                dynamic jObject = JsonConvert.DeserializeObject(result);
                List<string> items = new List<string>();
                Dictionary<string, int> confirmed = jObject.timeline.cases.ToObject<Dictionary<string, int>>();

                Dictionary<string, int> recovered = jObject.timeline.recovered.ToObject<Dictionary<string, int>>();

                Dictionary<string, int> deaths = jObject.timeline.deaths.ToObject<Dictionary<string, int>>();

                List<DailyStats> c = new List<DailyStats>();
                List<DailyStats> r = new List<DailyStats>();
                List<DailyStats> d = new List<DailyStats>();

                dynamic retVal = new ExpandoObject();
                retVal.Country = country;


                // for each day, get the daily changes for confirmed/recovered/deaths
                Parallel.Invoke(
                        () =>
                        {
                            var yesterdayConfirmed = 0;
                            var keyList = new List<string>(confirmed.Keys);
                            // compute daily changes for confirmed cases
                            for (int i = 0; i < keyList.Count; i++)
                            {
                                if ((i - 1) < 0)
                                {
                                    continue;
                                }
                                yesterdayConfirmed = confirmed[keyList[i - 1]];
                                var todayDate = keyList[i];
                                var todayConfirmed = confirmed[keyList[i]];
                                var todayChangesFromYesterday = todayConfirmed - yesterdayConfirmed;

                                var stats = new DailyStats()
                                {
                                    Date = todayDate,
                                    OneDayChange = todayChangesFromYesterday,
                                    Value = todayConfirmed
                                };

                                c.Add(stats);
                            }
                        },

                        () =>
                        {
                            var yesterdayRecovered = 0;
                            var keyList = new List<string>(recovered.Keys);
                            // compute daily changes for confirmed cases
                            for (int i = 0; i < keyList.Count; i++)
                            {
                                if ((i - 1) < 0)
                                {
                                    continue;
                                }
                                yesterdayRecovered = recovered[keyList[i - 1]];
                                var todayDate = keyList[i];
                                var todayRecovered = recovered[keyList[i]];
                                var todayChangesFromYesterday = todayRecovered - yesterdayRecovered;

                                var stats = new DailyStats()
                                {
                                    Date = todayDate,
                                    OneDayChange = todayChangesFromYesterday,
                                    Value = todayRecovered
                                };

                                r.Add(stats);
                            }
                        },

                        () =>
                        {
                            var yesterdayDeaths = 0;
                            var keyList = new List<string>(deaths.Keys);
                            // compute daily changes for deaths
                            for (int i = 0; i < keyList.Count; i++)
                            {
                                if ((i - 1) < 0)
                                {
                                    continue;
                                }
                                yesterdayDeaths = deaths[keyList[i - 1]];
                                var todayDate = keyList[i];
                                var todayDeaths = deaths[keyList[i]];
                                var todayChangesFromYesterday = todayDeaths - yesterdayDeaths;

                                var stats = new DailyStats()
                                {
                                    Date = todayDate,
                                    OneDayChange = todayChangesFromYesterday,
                                    Value = todayDeaths
                                };

                                d.Add(stats);
                            }
                        }
                    );


                Parallel.Invoke(
                    () =>
                    {
                        c.OrderBy(stats => stats.Date);
                    },
                    () =>
                    {
                        r.OrderBy(stats => stats.Date);

                    },
                    () =>
                    {
                        d.OrderBy(stats => stats.Date);
                    }
                );

                retVal.confirmed = c;
                retVal.recovered = r;
                retVal.deaths = d;


                return retVal;
            }
            catch
            {
                return null;
            }
        }


        private dynamic GetCountryDailyStatsInSerial(string country)
        {
            try
            {

                // https://corona.lmao.ninja/v2/historical/Philippines?lastdays=300
                var response = Client.GetAsync("https://corona.lmao.ninja/v2/historical/" + country + "?lastdays=300");
                response.Wait();

                var result = response.Result.Content.ReadAsStringAsync().Result;
                dynamic jObject = JsonConvert.DeserializeObject(result);
                List<string> items = new List<string>();
                Dictionary<string, int> confirmed = jObject.timeline.cases.ToObject<Dictionary<string, int>>();

                Dictionary<string, int> recovered = jObject.timeline.recovered.ToObject<Dictionary<string, int>>();

                Dictionary<string, int> deaths = jObject.timeline.deaths.ToObject<Dictionary<string, int>>();

                List<DailyStats> c = new List<DailyStats>();
                List<DailyStats> r = new List<DailyStats>();
                List<DailyStats> d = new List<DailyStats>();

                dynamic retVal = new ExpandoObject();
                retVal.Country = country;

                {
                    var yesterdayConfirmed = 0;
                    var keyList = new List<string>(confirmed.Keys);
                    // compute daily changes for confirmed cases
                    for (int i = 0; i < keyList.Count; i++)
                    {
                        if ((i - 1) < 0)
                        {
                            continue;
                        }
                        yesterdayConfirmed = confirmed[keyList[i - 1]];
                        var todayDate = keyList[i];
                        var todayConfirmed = confirmed[keyList[i]];
                        var todayChangesFromYesterday = todayConfirmed - yesterdayConfirmed;

                        var stats = new DailyStats()
                        {
                            Date = todayDate,
                            OneDayChange = todayChangesFromYesterday,
                            Value = todayConfirmed
                        };

                        c.Add(stats);
                    }
                }

                {
                    var yesterdayRecovered = 0;
                    var keyList = new List<string>(recovered.Keys);
                    // compute daily changes for confirmed cases
                    for (int i = 0; i < keyList.Count; i++)
                    {
                        if ((i - 1) < 0)
                        {
                            continue;
                        }
                        yesterdayRecovered = recovered[keyList[i - 1]];
                        var todayDate = keyList[i];
                        var todayRecovered = recovered[keyList[i]];
                        var todayChangesFromYesterday = todayRecovered - yesterdayRecovered;

                        var stats = new DailyStats()
                        {
                            Date = todayDate,
                            OneDayChange = todayChangesFromYesterday,
                            Value = todayRecovered
                        };

                        r.Add(stats);
                    }
                }

                {
                    var yesterdayDeaths = 0;
                    var keyList = new List<string>(deaths.Keys);
                    // compute daily changes for deaths
                    for (int i = 0; i < keyList.Count; i++)
                    {
                        if ((i - 1) < 0)
                        {
                            continue;
                        }
                        yesterdayDeaths = deaths[keyList[i - 1]];
                        var todayDate = keyList[i];
                        var todayDeaths = deaths[keyList[i]];
                        var todayChangesFromYesterday = todayDeaths - yesterdayDeaths;

                        var stats = new DailyStats()
                        {
                            Date = todayDate,
                            OneDayChange = todayChangesFromYesterday,
                            Value = todayDeaths
                        };

                        d.Add(stats);
                    }
                }


                c.OrderBy(stats => stats.Date);
                r.OrderBy(stats => stats.Date);
                d.OrderBy(stats => stats.Date);


                retVal.confirmed = c;
                retVal.recovered = r;
                retVal.deaths = d;

                return retVal;
            }
            catch 
            {
                return null;
            }
        }
    }
}
