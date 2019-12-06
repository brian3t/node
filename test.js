const fetch = require('node-fetch')

function fetchJson(url) {
    return fetch(url)
        .then(request => request.text())
        .then(text => {
            return JSON.parse(text);
        })
        .catch(error => {
            throw new Error(error);
        });
}
fetchJson('https://postman-echo.com/timer/object?timestamp=2016-10-10')
    .then(obj => console.log(obj)).catch(err=>console.log(`Error is: ${err.stack}`));