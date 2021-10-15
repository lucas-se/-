var express = require('express');
var router = express.Router();

const { SuccessModel, ErrorModel } = require('../model/data')
const { materialInforInput, mainInforInput, dataShowAll, dataDelete, dataSelector, receiveInforInput, sumInforUpdate, sumInforInput, installInforInput, dataUpdate } = require('../controllers/material')
router.get("/materialInforInput", (req, res) => {
    console.log(req.query);
    const materialInfor = req.query;
    const inputPromise = materialInforInput(materialInfor)
    inputPromise.then(data => {
        res.json(data)
    })
});
router.get("/installInforInput", (req, res) => {
    console.log(req.query);
    const installInfor = req.query;
    const inputPromise = installInforInput(installInfor)
    inputPromise.then(data => {
        res.json(data)
    })
});
router.get("/mainInforInput", (req, res) => {
    console.log(req.query);
    const mainInfor = req.query;
    console.log(mainInfor);
    const inputPromise = mainInforInput(mainInfor)
    inputPromise.then(mainId => {
        console.log(mainId);
        res.json(mainId)
    })
});
router.get("/receiveInforInput", (req, res) => {
    console.log(req.query);
    const receiveInfor = req.query;
    console.log(receiveInfor);
    const receivePromise = receiveInforInput(receiveInfor)
    receivePromise.then(mainId => {
        res.json(mainId)
    })
});
router.get("/sumInforUpdate", (req, res) => {
    console.log(req.query);
    const sumInfor = req.query;
    console.log(sumInfor);
    const sumInforPromise = sumInforUpdate(sumInfor)
    sumInforPromise.then(mainId => {
        res.json(mainId)
    })
});
router.get("/sumInforInput", (req, res) => {
    console.log(req.query);
    const sumInfor = req.query;
    console.log(sumInfor);
    const sumInforPromise = sumInforInput(sumInfor)
    sumInforPromise.then(mainId => {
        res.json(mainId)
    })
});
router.get("/show", (req, res) => {
    const showAllPromise = dataShowAll()
    showAllPromise.then(data => {
        res.json(data)
    })
});
router.get("/selector", (req, res) => {
    const selectData = req.query;
    const selectorPromise = dataSelector(selectData)
    selectorPromise.then(data => {
        res.json(data)
    })
});
router.get("/delete", (req, res) => {
    // console.log(req.query);
    const deleteData = req.query;
    const deletePromise = dataDelete(deleteData)
    deletePromise.then(data => {
        res.json(data)
    })
});
router.get("/update", (req, res) => {
    const updateData = req.query;
    console.log(updateData);
    const updatePromise = dataUpdate(updateData);
    updatePromise.then(data => {
        res.json(data)
    })
});

module.exports = router;