const express = require("express");
const router = express.Router();

const customHeader = require("../middleware/customHeader");

const { validatorCreateItem } = require("../validators/tracks");
const { createItem, getItems, getItem } = require("../controllers/tracks");


router.get("/", getItems);
router.post("/", validatorCreateItem,customHeader, createItem);
router.get("/:id", getItem);


module.exports = router;