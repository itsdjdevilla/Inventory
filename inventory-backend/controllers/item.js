// Import function from Item Model
import { getItems, getItemById, insertItem, updateItemById, deleteItemById } from "../models/itemModel.js";
 
// Get All Items
export const showItems = (req, res) => {
    getItems((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Item 
export const showItemById = (req, res) => {
    getItemById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Item
export const createItem = (req, res) => {
    const data = req.body;
    insertItem(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Item
export const updateItem = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateItemById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Item
export const deleteItem = (req, res) => {
    const id = req.params.id;
    deleteItemById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}