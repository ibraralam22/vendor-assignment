import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const VendorList = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4200/vendors')
      .then((response) => {
        const data = response.data.response.docs;
        setVendors(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id, vendorName) => {
    confirmAlert({
      title: 'Confirm Deletion',
      message: `Are you sure you want to delete ${vendorName}?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios
              .delete(`http://localhost:4200/vendors/${id}`)
              .then((response) => {
                console.log('Vendor deleted successfully:', response.data);
                setVendors(vendors.filter((vendor) => vendor._id !== id));
              })
              .catch((error) => {
                console.error('Error deleting vendor:', error);
              });
          },
        },
        {
          label: 'No',
          onClick: () => console.log('Deletion canceled'),
        },
      ],
    });
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
                    // onClick={() => editDetails(vendor.id)}
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
