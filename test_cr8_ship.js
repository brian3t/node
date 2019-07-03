var unirest = require("unirest");

var req = unirest("POST", "http://evs.techship.io/api/v2/shipments/create");

req.query({
    "duplicateHandling": "2",
    "errorLabelMode": "0"
});

req.headers({
    "cache-control": "no-cache",
    "Content-Type": "application/json",
    'x-api-key':'3e5c7041-12c2-dd83-44cf-cd67810986e3',
    'x-secret-key':'3328531c88e0fdbc2ed52aa300c29c74',
    'x-user-name':'nate@evssw.com',
    'x-user-password':'Dq8FuE9TnT,8'
});

req.type("json");
req.send({
    "BatchNumber": "testbrian07030814",
    "TransactionNumber": "testbrian07030814",
    "PackageDescription": "testpkgbrian07030814",
    "ClientCode": "TEST",
    "CarrierCode": "UPS",
    "ShipToName": "TEST LABEL DONOT SHIP",
    "ShipToAddress1": "5995 Dandridge Ln",
    "ShipToCity": "San Diego",
    "ShipToStateProvince": "CA",
    "ShipToPostal": "92115",
    "ShipToCountry": "US",
    "Packages": [
        {
            "SSCC": "24680",
            "Weight": 3.3,
            "BoxWidth": 3,
            "BoxHeight": 4,
            "BoxLength": 5
        }
    ]
});

req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
