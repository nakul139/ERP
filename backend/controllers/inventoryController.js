const Inventory = require('../models/Inventory');

// Add a new inventory item
exports.addInventoryItem = async (req, res) => {
    try {
        const newItem = new Inventory(req.body);
        await newItem.save();
        res.status(201).json({ message: 'Inventory item added successfully', item: newItem });
    } catch (error) {
        res.status(500).json({ message: 'Error adding inventory item', error });
    }
};

// Update an existing inventory item
exports.updateInventoryItem = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedItem = await Inventory.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Inventory item not found' });
        }
        res.status(200).json({ message: 'Inventory item updated successfully', item: updatedItem });
    } catch (error) {
        res.status(500).json({ message: 'Error updating inventory item', error });
    }
};

// Get all inventory items
exports.getAllInventoryItems = async (req, res) => {
    try {
        const items = await Inventory.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving inventory items', error });
    }
};

// Get a single inventory item by ID
exports.getInventoryItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Inventory.findById(id);
        if (!item) {
            return res.status(404).json({ message: 'Inventory item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving inventory item', error });
    }
};

// Delete an inventory item
exports.deleteInventoryItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Inventory.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Inventory item not found' });
        }
        res.status(200).json({ message: 'Inventory item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting inventory item', error });
    }
};