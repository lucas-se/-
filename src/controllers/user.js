const { execSQL } = require('../database/mysql')

const userRegister = (name, password) => {
    //注册用户
    const registertime = Date.now();
    const logintime = 0;
    const sqlInsert = `insert into user (name,password,logintime,registertime,admin) value ('${name}','${password}',${logintime},${registertime},'1')`;
    const sqlSelect = `select * from user where name='${name}'`;
    return execSQL(sqlSelect).then(data => {
        //通过查询数据库中有无注册用户的name 来判断用户名是否已经存在
        if (data.length) {
            return
        } else {
            //用户名不存在的情况，执行用户的数据入库，即完成用户的注册
            return execSQL(sqlInsert).then(data => {
                return {
                    id: data.insertId
                }
            })
        }
    })
}
const userLogin = (name, password) => {
        //登录 用户
        const logintime = Date.now();
        const sqlUpdate = `update user set logintime='${logintime}'where name='${name}' and password='${password}'`
        const sqlSelect = `select * from user where name='${name}' and password='${password}'`;
        return execSQL(sqlSelect).then((rows) => {
            execSQL(sqlUpdate)
            return rows[0]
        }).catch((err) => {
            return
        })


    }
    //更新和删除 还没有重写
const userUpdate = (id) => {
    let sql = `select * from blogs where 1=1`;
    if (id) {
        sql += ` and id='${id}'`;
    }
    return execSQL(sql).then((rows) => {
        return rows[0]
    })
}
const userDelete = (id) => {
    let sql = `select * from blogs where 1=1`;
    if (id) {
        sql += ` and id='${id}'`;
    }
    return execSQL(sql).then((rows) => {
        return rows[0]
    })

}


module.exports = { userRegister, userLogin, userUpdate, userDelete };