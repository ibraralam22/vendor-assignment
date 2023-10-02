const { response } = require('express');
const vendorDetails = require('../models/vendorSchema');

class Vendor {
  createVendor = async (req, res) => {
    try {
      const {
        vendorName,
        bankAccountNo,
        bankName,
        addressLine1,
        addressLine2,
        city,
        country,
        zipCode,
      } = req.body;

      if (!vendorName) {
        throw {
          message: 'Please enter a valid Vendor name',
        };
      }
      if (!bankAccountNo) {
        throw {
          message: 'Please enter a valid Vendor bank account no.',
        };
      }
      if (!bankName) {
        throw {
          message: 'Please enter a valid Bank name',
        };
      }

      const response = await vendorDetails.create({
        vendorName,
        bankAccountNo,
        bankName,
        addressLine1,
        addressLine2,
        city,
        country,
        zipCode,
      });
      res.send({
        status: true,
        message: 'Successfully Created Vendor',
        response: response,
      });
    } catch (error) {
      res.send({
        status: false,
        message: error.message,
      });
    }
  };

  getVendors = async (req, res) => {
    try {
      const { page, limit, vendorName } = req.query;
      let conditions = { isDeleted: false };

      const options = {
        sort: { createdAt: -1 },
        page: 1,
        limit: 10,
        collation: {
          locale: 'en',
        },
      };
      if (page) {
        Object.assign(options, {
          page: page,
        });
      }
      if (limit) {
        Object.assign(options, {
          limit: limit,
        });
      }

      if (vendorName) {
        Object.assign(conditions, {
          vendorName: {
            $regex: vendorName,
            $options: 'i',
          },
        });
      }
      const response = await vendorDetails.paginate(conditions, options);
      res.send({
        status: true,
        message: 'Successfully get all Vendors',
        response: response,
      });
    } catch (error) {
      res.send({
        status: false,
        message: error.message,
      });
    }
  };

  getVendorById = async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        throw {
          message: 'Please enter a valid id',
        };
      }
      const response = await vendorDetails.findById(id);
      res.send({
        status: true,
        message: 'Successfully get Vendor by id',
        response: response,
      });
    } catch (error) {
      res.send({
        status: false,
        message: error.message,
      });
    }
  };

  updateVendor = async (req, res) => {
    try {
      const id = req.params.id; 
      const response = await vendorDetails.findByIdAndUpdate(
        { _id: id },
        req.body, // Use the request body for the update
        { new: true } // Return the updated document
      );
  
      res.send({
        status: true,
        message: 'Successfully updated Vendor Details',
        response: response,
      });
    } catch (error) {
      res.send({
        status: false,
        message: error.message,
      });
    }
  };

  // deleteVendor = async (req, res) => {
  //   try {
  //     const id = req.query.id;
  //     const response = await vendorDetails.deleteMany({ _id: id });
  //     res.send({
  //       status: true,
  //        message: 'Successfully deleted the Vendor',
  //       response: response,
  //
  //     });
  //   } catch (error) {
  //     res.send({
  //       status: false,
  //       message: error.message,
  //     });
  //   }
  // };

  softDeleteVendor = async (req, res) => {
    try {
      const id = req.params.id;
      const response = await vendorDetails.updateOne(
        { _id: id },
        { $set: { isDeleted: true } }
      );
      res.send({
        status: true,
        message: 'Successfully Soft-Deleted the Vendor',
        response: response,
      });
    } catch (error) {
      res.send({
        status: false,
        message: error.message,
      });
    }
  };
}

module.exports = new Vendor();
