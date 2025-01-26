const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Route to get all inventory items
router.get('/', inventoryController.getAllInventoryItems);

// Route to get a single inventory item by ID
router.get('/:id', inventoryController.getInventoryItemById);

// Route to add a new inventory item
router.post('/', inventoryController.addInventoryItem);

// Route to update an existing inventory item
router.put('/:id', inventoryController.updateInventoryItem);

// Route to delete an inventory item
router.delete('/:id', inventoryController.deleteInventoryItem);

module.exports = router;