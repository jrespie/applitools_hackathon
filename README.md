# Applitools hackathon project


### Setup
Install dependencies:
> npm i

### Modern tests
Before running, you will need to set APPLITOOLS_API_KEY as an environment variable

To run modern tests, either
> npm run modernTestV1

or

> npm run modernTestV2

### Traditional tests
There is a separate config for each browser driver (chrome, firefox and edge).
You'll need to install and start chromedriver, firefoxdriver and edgedriver individually.

To run the tests (port number optional, if the driver is running on a port other than the default (4444)):
> npx wdio wdio.conf.chrome.js (--port xxxx)

or

> npx wdio wdio.conf.firefox.js (--port xxxx)

or

> npx wdio wdio.conf.edge.js (--port xxxx)

Note that this will run _both_ V1 and V2 of the tests
