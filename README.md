# Vörður Insurances

This is a demo application for Vörður that displays insurances. The frontend is a [Next.js](https://nextjs.org/) application bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and the backend is a [.NET Core](https://dotnet.microsoft.com/) API powered by [Azure Functions](https://azure.microsoft.com/en-us/services/functions/). You can visit the site using the link in the about section of the repository or follow the setup guide below to test it on your own machine.

* [Setup](#setup)
* [Documentation](#documentation)
* [Learn More](#learn-more)

## Setup

### Prerequisites

**1.** Clone the repository. Open your favourite terminal and clone the repository to a directory on your local machine with SSH or HTTPS.

`$ git clone git@github.com:gabriels17/Vordur-Insurances.git`

`$ git clone https://github.com/gabriels17/Vordur-Insurances.git`

**2.** Install [Node.js](https://nodejs.org/en/) and make sure [npm](https://www.npmjs.com/) comes with the installation.

To make sure the installation was successful run:

`$ node -v`

`$ npm -v`

**3.** Install the [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=windows%2Ccsharp%2Cbash#install-the-azure-functions-core-tools).

### Running the application

After cloning the repository and installing the required tools you can run the backend. No further configuration is needed since it all comes with cloning the repository! If you are using Visual Studio Code you can simply go to Run > Start Debugging (F5). If you prefer to use the command line you can also run `func start`. The backend will run on [http://localhost:7071](http://localhost:7071).

Open another terminal window in the project root, navigate to the frontend folder and run the frontend development server:

```bash
cd frontend/insurancesweb
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Documentation

Although the API routes can easily be accessed by a browser we recommend using an API testing tool such as [Postman](https://www.postman.com/downloads/). To make things even simpler you can use the already prepared [Postman collection documentation](https://documenter.getpostman.com/view/6487412/TzXzEHng) to test all the currently supported API routes!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
