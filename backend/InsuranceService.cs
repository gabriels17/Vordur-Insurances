using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Azure.Storage.Blobs;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;

namespace backend
{
    public class InsuranceService
    {
        private readonly string url = "https://digdevheimaverkefnitemp.blob.core.windows.net/data/insurances.json?sp=r&st=2021-05-16T15:31:57Z&se=2021-06-30T23:31:57Z&spr=https&sv=2020-02-10&sr=c&sig=LCfyzdARmvYEGV95ZJA7DuH4CwNCLVZFKsfPslWB4gE%3D";
        public async Task<string> GetAllInsurances()
        {
            var httpClient = new HttpClient();
            var response = await httpClient.GetAsync(url);
            var data = await response.Content.ReadAsStringAsync();
            return data;
        }

        public static Task<bool> BlobExistsOnCloud(CloudBlobClient client, string containerName, string key)
        {
            return client.GetContainerReference(containerName)
                        .GetBlockBlobReference(key)
                        .ExistsAsync();  
        }

        public async void CreateBlobIfNotExisting()
        {
            string storageConnectionString = "DefaultEndpointsProtocol=https;AccountName=vordurinsurances;AccountKey=/TXC5RzMKj6e1ZXPyeD9Z2G3XYEg8DnmKUttQJZdk7TakhdCjGiIBN8B41pYZDxP6fea+ZRtrymtSWBa2PObOA==;EndpointSuffix=core.windows.net";
            CloudStorageAccount storageAccount;
            if (CloudStorageAccount.TryParse(storageConnectionString, out storageAccount))
            {
                CloudBlobClient cloudBlobClient = storageAccount.CreateCloudBlobClient();
                if (!await BlobExistsOnCloud(cloudBlobClient, "insurances-container", "/TXC5RzMKj6e1ZXPyeD9Z2G3XYEg8DnmKUttQJZdk7TakhdCjGiIBN8B41pYZDxP6fea+ZRtrymtSWBa2PObOA=="))
                {
                    var uri = new Uri(url);

                    var webClient = new WebClient();
                    await webClient.DownloadFileTaskAsync(uri, "insurances.json");

                    var filePath = "./insurances.json";

                    var connectionString = "DefaultEndpointsProtocol=https;AccountName=vordurinsurances;AccountKey=/TXC5RzMKj6e1ZXPyeD9Z2G3XYEg8DnmKUttQJZdk7TakhdCjGiIBN8B41pYZDxP6fea+ZRtrymtSWBa2PObOA==;EndpointSuffix=core.windows.net";
        
                    BlobClient blobClient = new BlobClient(
                        connectionString: connectionString, 
                        blobContainerName: "insurances-container", 
                        blobName: "insurances.json");
                    
                    blobClient.Upload(filePath);
                }
                
            }
        }
    }
}