import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate } from 'react-router-dom';
import { getAllVendors } from '../services/vendors.service';

const VendorList = () => {
  const [vendors, setVendors] = useState([]);
  const navigate = useNavigate();

  const fetchVendors = async () => {
    return await getAllVendors();
  };

  useEffect(() => {
    const result = fetchVendors();
    console.log('VENDORSSS::::', result);
  }, []);

  const handleDelete = (id, vendorName) => {
    confirmAlert({
      title: 'Confirm Deletion',
      message: `Are you sure you want to delete ${vendorName}?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => {},
        },
        {
          label: 'No',
          onClick: () => console.log('Deletion canceled'),
        },
      ],
    });
  };

  const editDetails = (id) => {
    navigate(`/edit-vendor/${id}`);
  };

  return (
    <>
      <div>
        <table class='table'>
          <thead>
            <tr>
              <th scope='col'>Serial No</th>
              <th scope='col'>Vendor Name</th>
              <th scope='col'>Bank Account No</th>
              <th scope='col'>Bank Name</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr>
                <th scope='row'>{index + 1}</th>
                <td>{vendor.vendorName}</td>
                <td>{vendor.bankAccountNo}</td>
                <td>{vendor.bankName}</td>
                <td>
                  <button
                    type='button'
                    class='btn btn-primary'
                    onClick={() => editDetails(vendor._id)}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(vendor._id, vendor.vendorName)}
                    type='button'
                    class='btn btn-danger'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default VendorList;
