using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using backend;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace Vordur.Functions
{
    public static class GetAllInsurances
    {
        [FunctionName("GetAllInsurances")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            var insuranceService = new InsuranceService();
            insuranceService.CreateBlobIfNotExisting();
            var data = await insuranceService.GetAllInsurances();
            var insurances = JsonConvert.DeserializeObject<List<Insurance>>(data);
            return new OkObjectResult(insurances);

            // TODO: Store secrets as env variables
        }
    }
}
