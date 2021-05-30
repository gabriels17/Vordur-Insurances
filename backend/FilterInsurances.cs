using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;
using backend;

namespace Vordur.Functions
{
    public static class FilterInsurances
    {
        [FunctionName("FilterInsurances")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            var insuranceService = new InsuranceService();
            insuranceService.CreateBlobIfNotExisting();
            var data = await insuranceService.GetAllInsurances();
            string category = req.Query["category"];
            if (string.IsNullOrEmpty(category))
            {
                return await GetAllInsurances.Run(req, log);
            }
            var insurances = JsonConvert.DeserializeObject<List<Insurance>>(data);
            var filteredInsurances = new List<Insurance>();

            // Filter logic
            foreach (var i in insurances)
            {
                if (i.Category.ToLower().Contains(category.ToLower()))
                {
                    filteredInsurances.Add(i);
                }
            }

            return new OkObjectResult(filteredInsurances);
        }
    }
}
