using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Net.Http;
using System.Collections.Generic;
using backend;

namespace Vordur.Functions
{
    public static class FilterInsurances
    {
        [FunctionName("FilterInsurances")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            var insuranceService = new InsuranceService();
            var data = await insuranceService.GetAllInsurances();
            string category = req.Query["category"];
            var insurances = JsonConvert.DeserializeObject<List<Insurance>>(data);
            var filteredInsurances = new List<Insurance>();

            // Filter logic
            foreach (var i in insurances)
            {
                if (!string.IsNullOrEmpty(category) && i.Category.ToLower().Contains(category.ToLower()))
                {
                    filteredInsurances.Add(i);
                }
            }

            if (filteredInsurances.Count == 0)
            {
                return new OkObjectResult("No insurances match your criteria.");
            }
            return new OkObjectResult(filteredInsurances);
        }
    }
}
