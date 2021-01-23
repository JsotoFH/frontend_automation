# frontend automation.
frontend automation framework is developed using Cypress *-JavaScript-*. Here you can find all the information about the framework.
[cypress.io](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

## Requirements.
- This framework will run on Windows, Mac and Linux... Just take into account that the server to host and run the test scripts must have installed the target browsers. There are Docker images available in case you want to use a Linux environment without GUI. These are the supported browsers:

    * Chrome
    * Firefox
    * Edge


- Nodejs... Here you can find the instructions to install it.
[https://nodejs.org](https://nodejs.org/en/download/)


- Git... Here you can find the instructions to install it.
[https://git-scm.com](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Running the specs.
Clone the repository.
Use the package manager to install the framework. It will use the package.json file to install the project dependencies *-including Cypress-*.

```sh
$npm install
```
now, just execute the command to run the test scripts *-It will not save test results-*:

```sh
$npm run cyHeaded
```

If you want to save the test results, then execute the following command, and then visit [Cypress Dashboard](https://dashboard.cypress.io/).

```sh
$npm run cyDashboard
```
