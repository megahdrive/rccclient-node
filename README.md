# rccclient-node
This is a fully functional JavaScript library to interface with RCCService, designed like [BrentDaMage's similar library for PHP](https://github.com/BrentDaMage/PHP-RCCServiceSoap/).  
It is capable of preforming a number of included tasks, as well as creating your own tasks with the `callToService` function.    
Please note that I got the WSDL for this project from BrentDaMage's said library for PHP.
## Adding to a project
Simply run the following command:
```
npm i https://github.com/megahdrive/rccclient-node
```
## Example
```js
const RCCClient = require("@megahdrive/rccclient-node")
const ScriptExecution = require("@megahdrive/rccclient-node/ScriptExecution")
const Job = require("@megahdrive/rccclient-node/Job")

// Create our RCCService connection.
const RCC = new RCCClient("127.0.0.1", 64989)

// Define our job.
const myJob = new Job("myJob")
// Define our script.
const myScript = new ScriptExecution("myScript", "print(\"Hello from RCCClient!\"); return \"ok\"");
// Call a BatchJob.
RCC.BatchJob(myJob, myScript, (result) => {
    console.log(result)
})
// Bask in the glory of having control over RCCService - with node.js!
```

