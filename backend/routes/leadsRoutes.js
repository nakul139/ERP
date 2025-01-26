const express = require('express');
const router = express.Router();
const leadsController = require('../controllers/leadsController');

// Route to create a new lead
router.post('/', leadsController.createLead);

// Route to get all leads
router.get('/', leadsController.getAllLeads);

// Route to get a lead by ID
router.get('/:id', leadsController.getLeadById);

// Route to update a lead by ID
router.put('/:id', leadsController.updateLead);

// Route to delete a lead by ID
router.delete('/:id', leadsController.deleteLead);

module.exports = router;