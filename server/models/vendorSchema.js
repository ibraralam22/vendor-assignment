const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const vendor = new mongoose.Schema(
  {
    vendorName: { type: String },
    bankAccountNo: { type: Number },
    bankName: { type: String },
    addressLine1: { type: String },
    addressLine2: { type: String },
    city: { type: String },
    country: { type: String },
    zipCode: { type: Number },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

vendor.plugin(mongoosePaginate);
const vendorDetails = mongoose.model('vendors', vendor);

module.exports = vendorDetails;
