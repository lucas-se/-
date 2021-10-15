var express = require('express');
var router = express.Router();

const { SuccessModel, ErrorModel } = require('../model/data')
const { userRegister, userLogin, userUpdate, userDelete } = require('../controllers/user')

router.get("/login", (req, res) => {
    var name = req.query.name;
    var password = req.query.password;
    const loginPromise = userLogin(name, password);
    loginPromise.then(data => {
        if (data) {
            console.log(data);
            console.log('登录成功');
            req.session.userinfo = true; /*设置session*/
            res.json({ user: true })
        } else {
            res.json({ user: false })
            console.log('用户名或密码错误');
        }
    })
});
router.get("/logout", (req, res) => {
    req.session.destroy(function(err) {
        console.log(err);
    })
    res.send('退出登录成功');
});
router.get("/register", (req, res) => {
    var name = req.query.name;
    var password = req.query.password;
    console.log(name, password);
    const registerPromise = userRegister(name, password);
    registerPromise.then(data => {
        if (data) {
            res.json({ message: '注册成功' })
        } else {
            res.json({ message: '用户名已存在' })
            console.log({ message: '用户名已存在' })
        }

    })
});

module.exports = router;