const router = require('express').Router();
const Vendor = require('../controller/vendorController');

// #Vendor
router.post('/vendors', Vendor.createVendor);
router.get('/vendors/', Vendor.getVendors);
router.put('/vendors/:id', Vendor.updateVendor);
router.delete('/vendors/:id',  Vendor.deleteVendor);
// router.delete('/vendors/:id', Vendor.softDeleteVendor);


module.exports = router;
