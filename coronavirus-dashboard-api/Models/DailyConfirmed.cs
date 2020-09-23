using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coronavirus_dashboard_api.Models
{
    public class DailyConfirmed : DailyStats
    {
        public int NewConfirmed { get; set; }
    }
}
