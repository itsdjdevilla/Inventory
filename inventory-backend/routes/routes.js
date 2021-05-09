// import express
import express from "express";
 
// import function from controller
import { showItems, showItemById, createItem, updateItem, deleteItem } from "../controllers/item.js";
 
// init express router
const router = express.Router();
 
// Get All Item
router.get('/items', showItems);
 
// Get Single Item
router.get('/items/:id', showItemById);
 
// Create New Item
router.post('/items', createItem);
 
// Update Item
router.put('/items/:id', updateItem);
 
// Delete Item
router.delete('/items/:id', deleteItem);
 
// export default router
export default router;