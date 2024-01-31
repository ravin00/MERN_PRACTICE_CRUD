const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
        trim: true,
    },

    itemCategory: {
        type: String,
        required: true,
        trim: true,
    },

    itemQty: {
        type: String,
        required: true,
        trim: true,
    },

    itemDescription: {
        type: String,
        required: true,
        trim: true,
    }
});

const item = mongoose.model('Item',itemSchema);
module.exports = item;