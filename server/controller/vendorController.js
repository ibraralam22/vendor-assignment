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
        response: response,
        message: 'Successfully Created Vendor',
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
      const response = await vendorDetails.paginate();
      res.send({
        status: true,
        response: response,
        message: 'Successfully get all Vendors',
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  updateVendor = async (req, res) => {
    try {
      const id = req.body.id;
      const vendorName = req.body.vendorName;
      const bankAccountNo = req.body.bankAccountNo;
      const bankName = req.body.bankName;

      const response = await vendorDetails.updateMany(
        { _id: id },
        {
          $set: {
            vendorName: vendorName,
            bankAccountNo: bankAccountNo,
            bankName: bankName,
          },
        }
      );

      res.send({
        status: true,
        response: response,
        message: 'Successfully updated Vendor Details',
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  deleteVendor = async (req, res) => {
    try {
      const id = req.query.id;
      const response = await vendorDetails.deleteMany({ _id: id });
      res.send({
        status: true,
        response: response,
        message: 'Successfully deleted the Vendor',
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  // softDeleteVendor = async (req, res) => {
  //   try {
  //     const id = req.query.id;
  //     const response = await vendorDetails.updateOne(
  //       { _id: id },
  //       { $set: { isDeleted: true } }
  //     );
  //     res.send({
  //       status: true,
  //       response: response,
  //       message: 'Successfully soft-deleted the Vendor',
  //     });
  //   } catch (error) {
  //     res.send({
  //       status: false,
  //       response: error.message,
  //     });
  //   }
  // };
}

module.exports = new Vendor();
