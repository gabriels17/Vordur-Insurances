using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Net.Http;

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

            // STEP 1: Store url as a variable
            string url = "https://digdevheimaverkefnitemp.blob.core.windows.net/data/insurances.json?sp=r&st=2021-05-16T15:31:57Z&se=2021-06-30T23:31:57Z&spr=https&sv=2020-02-10&sr=c&sig=LCfyzdARmvYEGV95ZJA7DuH4CwNCLVZFKsfPslWB4gE%3D";

            // STEP 2: Create an HTTP Client
            var httpClient = new HttpClient();

            // STEP 3: fetch data with client and url
            var response = await httpClient.GetAsync(url);
            var data = await response.Content.ReadAsStringAsync();

            // STEP 4: Return data
            return new OkObjectResult(data);

            // TODO: Upload data to new blob
            // TODO: Publish function to Azure
            // TODO: Store secrets as env variables
        }
    }
}
