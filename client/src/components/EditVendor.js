import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditVendor = ({ match }) => {
  const [vendor, setVendor] = useState({});
  const [formData, setFormData] = useState({/* initial form data */});

  useEffect(() => {
    // Fetch the vendor details based on the ID from the URL
    axios.get(`http://localhost:4200/vendors/${match.params.id}`)
      .then(response => {
        setVendor(response.data);
        setFormData(response.data); // Set initial form data
      })
      .catch(error => console.error(error));
  }, [match.params.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a PUT request to update the vendor details
    axios.put(`http://localhost:4200/vendors/${match.params.id}`, formData)
      .then(response => {
        console.log('Vendor updated successfully:', response.data);
        // Redirect or perform any other actions upon successful update
      })
      .catch(error => console.error('Error updating vendor:', error));
  };

  return (
    <div>
      <h1>Edit Vendor</h1>
      <form onSubmit={handleSubmit}>
        {/* Render form fields similar to CreateVendor component */}
        <button type="submit">Update Vendor</button>
      </form>
    </div>
  );
};

export default EditVendor;