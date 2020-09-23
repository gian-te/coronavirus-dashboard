using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coronavirus_dashboard_api.Models
{
    public class DailyRecoveries : DailyStats
    {
        public int NewRecoveries { get; set; }
    }
}
