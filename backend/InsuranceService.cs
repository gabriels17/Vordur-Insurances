using System.Net.Http;
using System.Threading.Tasks;

namespace backend
{
    public class InsuranceService
    {
        public async Task<string> GetAllInsurances()
        {
            string url = "https://digdevheimaverkefnitemp.blob.core.windows.net/data/insurances.json?sp=r&st=2021-05-16T15:31:57Z&se=2021-06-30T23:31:57Z&spr=https&sv=2020-02-10&sr=c&sig=LCfyzdARmvYEGV95ZJA7DuH4CwNCLVZFKsfPslWB4gE%3D";
            var httpClient = new HttpClient();
            var response = await httpClient.GetAsync(url);
            var data = await response.Content.ReadAsStringAsync();
            return data;
        }
    }
}