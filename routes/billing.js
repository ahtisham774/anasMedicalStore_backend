const express = require('express');
const router = express.Router();
const BillingController = require('../controllers/billingController');

router.post('/', BillingController.addBilling);
router.get('/', BillingController.getAllBillings);
router.get('/:id', BillingController.getBillingById);
router.delete('/:id',BillingController.deleteBill)

module.exports = router;