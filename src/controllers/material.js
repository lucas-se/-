const { execSQL } = require('../database/mysql')

const materialInforInput = (inputData) => {
    //数据录入
    console.log('维修材料录入');
    const inputDate = Date.now();
    const sqlInsert = `insert into materialInfor (mainId,address,manName,materialName,materialType,num,infor,inputDay,inputDayString,day,dayString,inputDate) value ('${inputData.mainId}','${inputData.address}','${inputData.manName}','${inputData.materialName}','${inputData.materialType}','${inputData.num}','${inputData.infor}','${inputData.inputDay}','${inputData.inputDay}','${inputData.day}','${inputData.day}','${inputDate}')`;
    return execSQL(sqlInsert).then(data => {
        return {
            id: data.insertId
        }
    })
}
const installInforInput = (inputData) => {
    //数据录入
    const sqlInsert = `insert into installInfor (materialName,materialType,num,infor,inputDay,inputDayString,day,dayString) value ('${inputData.materialName}','${inputData.materialType}','${inputData.num}','${inputData.infor}','${inputData.inputDay}','${inputData.inputDay}','${inputData.day}','${inputData.day}')`;
    return execSQL(sqlInsert).then(data => {
        return {
            id: data.insertId
        }
    })
}
const mainInforInput = (inputData) => {
    //数据录入
    const sqlInsert = `insert into mainInfor (manName,address,inputDay,inputDayString,day,dayString,infor) value ('${inputData.manName}','${inputData.address}','${inputData.inputDay}','${inputData.inputDay}','${inputData.day}','${inputData.day}','${inputData.infor}')`;
    console.log(sqlInsert);
    return execSQL(sqlInsert).then(data => {
        return {
            id: data.insertId
        }
    })
}
const receiveInforInput = (inputData) => {
    //数据录入
    const sqlInsert = `insert into receiveInfor (materialName,materialType,day,dayString,inputDay,inputDayString,num) value ('${inputData.materialName}','${inputData.materialType}','${inputData.day}','${inputData.day}','${inputData.inputDay}','${inputData.inputDay}',${inputData.num})`;
    return execSQL(sqlInsert).then(data => {
        return {
            id: data.insertId
        }
    })
}
const sumInforInput = (inputData) => {
    //仓库总数据
    inputData.num = parseFloat(inputData.num)
    const sqlInsert = `insert into sumInfor (materialName,materialType,day,dayString,inputDay,inputDayString,num) value ('${inputData.materialName}','${inputData.materialType}','${inputData.day}','${inputData.day}','${inputData.inputDay}','${inputData.inputDay}',${inputData.num})`;
    return execSQL(sqlInsert).then(data => {
        return {
            id: data.insertId
        }
    })
}
const sumInforUpdate = (inputData) => {
    //仓库总数据
    var num = parseFloat(inputData.num)
    if (inputData.businessValue == 'materialInfor') {
        num = -num
    }
    const sqlInsert = `update sumInfor set num=num+${num},day='${inputData.day}',dayString='${inputData.day}' where materialName = '${inputData.materialName}' and materialType = '${inputData.materialType}'`;
    return execSQL(sqlInsert).then(data => {
        return {
            id: data.insertId
        }
    })
}
const dataShowAll = () => {
    //数据展示
    const sqlSelect = `select * from materialInfor`;
    return execSQL(sqlSelect).then((data) => {
        return data
    })
}
const dataSelector = (selectData) => {
    //数据展示
    console.log(selectData);
    let sqlSelect = `select * from ${selectData.businessValue} where 1=1`;
    if (selectData.materialName) {
        sqlSelect += ` and materialName='${selectData.materialName}'`
    }
    if (selectData.materialType) {
        sqlSelect += ` and materialType='${selectData.materialType}'`
    }
    if (selectData.dateStart) {
        sqlSelect += ` and Date (day) between '${selectData.dateStart}' and '${selectData.dateEnd}'`
    }
    if (selectData.inputDayStart) {
        sqlSelect += ` and Date (inputDay) between '${selectData.inputDayStart}' and '${selectData.inputDayEnd}'`
    }
    return execSQL(sqlSelect).then((data) => {
        return data
    })
}
const dataDelete = (inputData) => {
    //数据删除
    console.log('delete');
    console.log(inputData);
    const sqlDelete = `delete from ${inputData.businessValue} where id='${inputData.id}'`
    return execSQL(sqlDelete).then(data => {
        return data
    })
}
const dataUpdate = (inputData) => {
    //数据更新
    let sql = `update ${inputData.businessValue} set num=${inputData.num},materialName = '${inputData.materialName}',materialType = '${inputData.materialType}' where id = ${inputData.id}`;
    return execSQL(sql).then((rows) => {
        return rows[0]
    })
}



module.exports = { materialInforInput, mainInforInput, dataShowAll, dataUpdate, dataDelete, dataSelector, receiveInforInput, sumInforUpdate, sumInforInput, installInforInput };