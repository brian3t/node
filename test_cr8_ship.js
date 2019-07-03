var request = require("request");

var options = { method: 'POST',
    url: 'http://evs.techship.io/api/v2/shipments/create',
    qs: { duplicateHandling: '2', errorLabelMode: '0' },
    headers:
        { 'cache-control': 'no-cache',
            Connection: 'keep-alive',
            'content-length': '579',
            'accept-encoding': 'gzip, deflate',
            Host: 'evs.techship.io',
            'Cache-Control': 'no-cache',
            Accept: '*/*',
            'User-Agent': 'PostmanRuntime/7.15.0',
            'Content-Type': 'application/json',
            'x-api-key':'3e5c7041-12c2-dd83-44cf-cd67810986e3',
            'x-secret-key':'3328531c88e0fdbc2ed52aa300c29c74',
            'x-user-name':'nate@evssw.com',
            'x-user-password':'Dq8FuE9TnT,8'
        },
    body:
        { BatchNumber: 'testbrian07022334',
            TransactionNumber: 'testbrian07022334',
            PackageDescription: 'testpkgbrian07022334',
            ClientCode: 'TEST',
            CarrierCode: 'UPS',
            ShipToName: 'TEST LABEL DONOT SHIP',
            ShipToAddress1: '5995 Dandridge Ln',
            ShipToCity: 'San Diego',
            ShipToStateProvince: 'CA',
            ShipToPostal: '92115',
            ShipToCountry: 'US',
            Packages:
                [ { SSCC: '13579',
                    Weight: 3.3,
                    BoxWidth: 3,
                    BoxHeight: 4,
                    BoxLength: 5 } ] },
    json: true };

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});
