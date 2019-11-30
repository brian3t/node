const express = require('express')

var app = express()
app.get('/bananas', function (req, res, next){
    getMember(function (err, member){
        if (err) return next(err);
// If there's no member, don't try to look
// up data. Just go render the page now.
        if (! member) return next('route');
// Otherwise, call the next middleware and fetch
// the member's data.
        req.member = member;
        next();
    });
}, function (req, res, next){
    getMemberData(req.member, function (err, data){
        if (err) return next(err);
// If this member has no data, don't bother
// parsing it. Just go render the page now.
        if (! data) return next('route');
// Otherwise, call the next middleware and parse
// the member's data. THEN render the page.
        req.member.data = data;
        next();
    });
}, function (req, res, next){
    req.member.parsedData = parseMemberData(req.member.data);
    next();
});
app.get('/bananas', function (req, res, next){
    renderBananas(req.member);
});

app.listen(3000)