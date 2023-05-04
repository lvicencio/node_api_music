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


const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findById(id);

        res.send({data});
        
    } catch (e) {
        handleHttpError(res, "ERROR_EN_GET_ITEM");
    }

};


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


const updateItem = async(req, res) => {
    try {

        const {id, ...body} = matchedData(req);
        const data = await tracksModel.findOneAndUpdate(id, body);
        res.send({ data});
 
 
     } catch (e) {
         handleHttpError(res, "ERROR_EN_UPDATE_ITEM");
     }

};
const deleteItem = async(req, res) => {

    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.deleteOne({_id:id});

        res.send({data});
        
    } catch (e) {
        handleHttpError(res, "ERROR_EN_DELETE_ITEM");
    }
};


module.exports = { getItem, getItems, createItem, updateItem, deleteItem};