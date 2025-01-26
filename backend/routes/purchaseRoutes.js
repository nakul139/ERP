const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

// Route to create a new purchase order
router.post('/purchase', purchaseController.createPurchase);

// Route to get all purchase orders
router.get('/purchases', purchaseController.getAllPurchases);

// Route to get a specific purchase order by ID
router.get('/purchase/:id', purchaseController.getPurchaseById);

// Route to update a purchase order by ID
router.put('/purchase/:id', purchaseController.updatePurchase);

// Route to delete a purchase order by ID
router.delete('/purchase/:id', purchaseController.deletePurchase);

module.exports = router;