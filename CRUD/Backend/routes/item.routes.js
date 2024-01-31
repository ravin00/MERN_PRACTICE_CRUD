const express = require("express");
const ItemRouter = express.Router();

const {
    addItems,
    getAllItems,
    getOneItem,
    updateItem,
    deleteItem,
 } = require("../controller/item.controller");

 ItemRouter.post('/create', addItems);
 ItemRouter.get('/items', getAllItems);
 ItemRouter.get('/item/:id', getOneItem);
 ItemRouter.patch('/itemUpdate/:id', updateItem);
 ItemRouter.delete('/itemDelete/:id', deleteItem);
 

module.exports = ItemRouter;