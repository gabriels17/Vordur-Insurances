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

            // STEP 1: Fetch all insurances from blob
            string url = "https://digdevheimaverkefnitemp.blob.core.windows.net/data/insurances.json?sp=r&st=2021-05-16T15:31:57Z&se=2021-06-30T23:31:57Z&spr=https&sv=2020-02-10&sr=c&sig=LCfyzdARmvYEGV95ZJA7DuH4CwNCLVZFKsfPslWB4gE%3D";
            var httpClient = new HttpClient();
            var response = await httpClient.GetAsync(url);
            var result = await response.Content.ReadAsStringAsync();

            // STEP 2: Store query parameter in a variable
            string category = req.Query["category"];

            // STEP 3: Create a list to store insurances
            var insurances = JsonConvert.DeserializeObject<List<Insurance>>(result);
            var filteredInsurances = new List<Insurance>();

            // STEP 4: Filter through insurances which category matches the query parameter and add them to the list
            foreach (var i in insurances)
            {
                if (!string.IsNullOrEmpty(category) && i.Category.ToLower().Contains(category.ToLower()))
                {
                    filteredInsurances.Add(i);
                }
            }

            // STEP 5: Return the filtered list
            if (filteredInsurances.Count == 0)
            {
                return new OkObjectResult("No insurances match your criteria.");
            }
            return new OkObjectResult(filteredInsurances);
        }
    }
}
