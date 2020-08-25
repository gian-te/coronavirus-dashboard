using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coronavirus_dashboard_api.Models
{
    public class DailyStats
    {
        public string Date { get; set; }
        public int OneDayChange { get; set; }
        public int Value { get; set; }
    }
}
