const express = require('express')
var app = express();
// var session = require('express-session')
var usersRouter = require('./src/routes/user');
var materialRouter = require('./src/routes/material');
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true
//         //cookie: { secure: true }   /*secure https这样的情况才可以访问cookie*/
// }))
app.all("*", function(req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    console.log('成功跨域接收请求');
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.sendStatus(200); //让options尝试请求快速结束
    else
        next();
});
app.use('/material', express.static('MaterialDist'));
app.use('/users', usersRouter);
app.use('/material', materialRouter);


// app.get('*', function(req, res) {
//     if (req.session.userinfo) { /*获取*/
//         console.log('你好' + req.session.userinfo.name + '欢迎回来');
//     } else {
//         console.log('未登录');
//     }
// });
// app.get("/", function(req, res) {
//     if (req.session.userinfo) { /*获取*/
//         console.log('你好' + req.session.userinfo + '欢迎回来');
//     } else {
//         console.log('未登录');
//     }
// });


var server = app.listen(3003, function() {
    console.log('Example app listening at 3003');
});