const fs = require("fs");
const {storageModel} = require('../models');
const { matchedData} = require("express-validator");
const { handleHttpError } = require('../utils/handleError');

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;


const getItems = async(req, res) => {

    try {
        const data = await storageModel.find({});

        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_EN_GET_ITEMS_STORAGE");
    }

      
};


const getItem =  async(req, res) => {
    try {
        const {id} = matchedData(req);
        const data = await storageModel.findById(id);

        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_EN_GET_ITEM_STORAGE");
    }
};


const createItem = async (req, res) => {

    try {
        const {body, file} = req
        console.log(body);
        const fileData = {
            filename: file.filename,
            url:`${PUBLIC_URL}/${file.filename}`
        }
    
    
        const data = await storageModel.create(fileData)
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_EN_CREATE_ITEM_STORAGE");
    }


};


const updateItem = (req, res) => {};


const deleteItem = async(req, res) => {

    try {
        const {id} = matchedData(req);
        const dataFile = await storageModel.findById(id);
        await storageModel.deleteOne({_id:id});
        const {filename} = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`

        fs.unlinkSync(filePath);
        const data = {filePath, deleted:1}


        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_EN_DELETE_ITEM_STORAGE");
    }
};


module.exports = { getItem, getItems, createItem, updateItem, deleteItem};