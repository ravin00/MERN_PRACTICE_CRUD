const itemModel = require("../model/item.model");

//Add item router controller
const addItems = async (req, res) => {
  try {
    const { itemName, itemCategory, itemQty, itemDescription } = req.body;

    const newItemData = {
      itemName: itemName,
      itemCategory: itemCategory,
      itemQty: itemQty,
      itemDescription: itemDescription,
    };

    const newItemObj = new itemModel(newItemData);
    await newItemObj.save();

    return res.status(200).send({
      status: true,
      message: "✨ :: Data saved successfully!",
    });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: err.message,
    });
  }
};

//get all items router control
const getAllItems = async (req, res) => {
  try {
    const allItems = await itemModel.find();

    return res.status(200).send({
      status: true,
      message: "✨ :: All items are fetched!",
      allItems: allItems,
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message,
    });
  }
};

// get one specific item router control
const getOneItem = async (req, res) => {
  try {
    const itemID = req.params.id;
    const item = await itemModel.findById(itemID);

    return res.status(200).send({
      status: true,
      message: "✨ :: items fetched!",
      Item: item,
    });

  } catch (err) {
    return res.status(500).send({
      status: false,
      message: err.message,
    });
  }
};

//update item details router control

const updateItem = async (req,res) => {

    try {
        const ItemID = req.params.id;
        const {itemName,itemCategory,itemQty,itemDescription} = req.body;

        const ItemData = {
            itemName : itemName,
            itemCategory : itemCategory,
            itemQty : itemQty,
            itemDescription : itemDescription,
        }

        const updateItemObj = await itemModel.findByIdAndUpdate(ItemID,ItemData);

        return res.status(200).send({
            status:true,
            message: "✨ :: items updated!",
            updateItem : updateItemObj,
        })

    } catch(err){
        return res.status(500).send({
            status:false,
            message: err.message,
        })
    }
}

//delete item details route control
const deleteItem = async (req,res) => {
    
       try{
        const itemID = req.params.id;
        const delItem = await itemModel.findByIdAndDelete(itemID);

        return res.status(200).send({
            status: true,
            message: "✨ :: items deleted!",
            deleteItem : delItem,
        })
       } catch(err){
        return res.status(500).send({
            status:false,
            message: err.message,
        })
       }

    }

module.exports = {
  addItems,
  getAllItems,
  getOneItem,
  updateItem,
  deleteItem,
};
