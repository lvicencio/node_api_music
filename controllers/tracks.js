const { matchedData} = require("express-validator");
const {tracksModel} = require('../models');
const { handleHttpError } = require('../utils/handleError');


const getItems = async (req, res) => {

    try {

        const data = await tracksModel.find({});

        res.send({data});
        
    } catch (e) {
        handleHttpError(res, "ERROR_EN_GET_ITEMS");
    }
    
    
};


const getItem = (req, res) => {};


const createItem = async (req, res) => {


    try {

       const body =  matchedData(req);
       const data = await tracksModel.create(body);
       res.send({ data});


      //  const {body} = req;
        /* console.log(body); */
       // const data = await tracksModel.create(body)
       // res.send({data});
    } catch (e) {
        handleHttpError(res, "ERROR_EN_CREATE_ITEMS");
    }


    
};


const updateItem = (req, res) => {};
const deleteItem = (req, res) => {};


module.exports = { getItem, getItems, createItem, updateItem, deleteItem};