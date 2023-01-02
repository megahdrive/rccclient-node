// Refer to https://github.com/BrentDaMage/PHP-RCCServiceSoap/ for documentation on RCCService functionality.

const soap = require("soap")

const wsdl = "./RCCService.wsdl"

function RCCClient(ip, port) {
    this.url = "http://" + ip + ":" + port
}

RCCClient.prototype.callToService = function callToService(sender, options, callback) {
    soap.createClient(wsdl, (err, client) => {
        client.setEndpoint(this.url)
        client[sender](options, (error, result) => {
            callback(result)
        })
    })   
}

RCCClient.prototype.HelloWorld = function HelloWorld(callback) {
    this.callToService("HelloWorld", {}, (result) => {
        callback(result)
    })
}

RCCClient.prototype.GetVersion = function GetVersion(callback) {
    this.callToService("GetVersion", {}, (result) => {
        callback(result)
    })
}

RCCClient.prototype.OpenJob = function OpenJob(job, script = null, callback) {
    this.OpenJobEx(job, script, (result) => {
        callback(result)
    })
}

RCCClient.prototype.OpenJobEx = function OpenJobEx(job, script = null, callback) {
    this.callToService("OpenJob", {job: job, script: script}, (result) => {
        callback(result);
    })
}

RCCClient.prototype.BatchJob = function BatchJob(job, script, callback) {
    this.BatchJobEx(job, script, (result) => {
        callback(result);
    })
}

RCCClient.prototype.BatchJobEx = function BatchJobEx(job, script, callback) {
    this.callToService("BatchJobEx", {job: job, script: script}, (result) => {
        callback(result);
    })
}

RCCClient.prototype.RenewLease = function RenewLease(jobID, expirationInSeconds, callback) {
    this.callToService("RenewLease", {jobID: jobID, expirationInSeconds: expirationInSeconds}, (result) => {
        callback(result)
    })
}

RCCClient.prototype.Execute = function Execute(jobID, script, callback) {
    this.ExecuteEx(jobID, script, (result) => {
        callback(result)
    })
}

RCCClient.prototype.ExecuteEx = function ExecuteEx(jobID, script, callback) {
    this.callToService("ExecuteEx", {jobID: jobID, script: script}, (result) => {
        callback(result)
    })
}

RCCClient.prototype.CloseJob = function CloseJob(jobID, callback) {
    this.callToService("CloseJob", {jobID: jobID}, (result) => {
        callback(result)
    })
}

RCCClient.prototype.GetExpiration = function GetExpiration(jobID, callback) {
    this.callToService("GetExpiration", {jobID: jobID}, (result) => {
        callback(result)
    })
} 

RCCClient.prototype.Diag = function Diag(type, jobID, callback) {
    this.DiagEx(type, jobID, (result) => {
        callback(result)
    })
}

RCCClient.prototype.DiagEx = function DiagEx(type, jobID, callback) {
    this.callToService("DiagEx", {type: type, jobID: jobID}, (result) => {
        callback(result)
    })
}

RCCClient.prototype.GetStatus = function GetStatus(callback) {
    this.callToService("GetStatus", {}, (result) => {
        callback(result)
    })
}

RCCClient.prototype.GetAllJobs = function GetAllJobs(callback) {
    this.GetAllJobsEx((result) => {
        callback(result)
    })
}

RCCClient.prototype.GetAllJobsEx = function GetAllJobsEx(callback) {
    this.callToService("GetAllJobsEx", {}, (result) => {
        callback(result)
    })
}

RCCClient.prototype.CloseExpiredJobs = function CloseExpiredJobs(callback) {
    this.callToService("CloseExpiredJobs", {}, (result) => {callback(result)})
}

RCCClient.prototype.CloseAllJobs = function CloseAllJobs(callback) {
    this.callToService("CloseAllJobs", {}, (result) => {callback(result)})
}

module.exports = RCCClient;