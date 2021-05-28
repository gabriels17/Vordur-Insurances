using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Net.Http;
using backend;

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
            var data = await insuranceService.GetAllInsurances();
            return new OkObjectResult(data);

            // TODO: Upload data to new blob
            // TODO: Publish function to Azure
            // TODO: Store secrets as env variables
        }
    }
}
