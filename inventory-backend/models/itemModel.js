// import connection
import db from "../config/database.js";
 
// Get All Items
export const getItems = (result) => {
    db.query("SELECT * FROM item", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Item
export const getItemById = (id, result) => {
    db.query("SELECT * FROM item WHERE item_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert y to Database
export const insertItem = (data, result) => {
    db.query("INSERT INTO item SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Item to Database
export const updateItemById = (data, id, result) => {
    db.query("UPDATE item SET item_name = ?, item_price = ? WHERE item_id = ?", [data.item_name, data.item_price, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Item to Database
export const deleteItemById = (id, result) => {
    db.query("DELETE FROM item WHERE item_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}