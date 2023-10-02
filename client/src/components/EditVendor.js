import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useNavigate } from 'react-router-dom';

const EditVendor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formDetails, setFormData] = useState({
    vendorName: '',
    bankAccountNo: '',
    bankName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: '',
    zipCode: '',
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4200/vendors/${id}`)
      .then((response) => {
        setFormData(response.data.response.docs);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formDetails,
      [name]: value,
    });
  };

  const updateVendor = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4200/vendors/${id}`, formDetails);
      alert('Vendor updated successfully');
      navigate('/vendors-list');
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    navigate('/vendors-list');
  };


  return (
    <>
      <div className='container text-center p-5'>
        <div className='container mx-auto p-2 w-75 border border-5 rounded-4 justify-content-center'>
          <form className='well form-horizontal ' onSubmit={updateVendor}>
            <fieldset>
              <legend className='text-primary fw-bold'>EDIT VENDOR FORM</legend>

              <div className='form-group row'>
                <label className='col-md-6 control-label fw-medium'>Vendor Name</label>
                <div className='col-md-4 inputGroupContainer'>
                  <div className='input-group'>
                    <span className='input-group-addon'>
                      <i className='glyphicon glyphicon-user'></i>
                    </span>
                    <input
                      name='vendorName'
                      placeholder='Vendor Name'
                      className='form-control mb-1'
                      type='text'
                      value={formDetails.vendorName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-md-6 control-label fw-medium'>Bank Account No</label>
                <div className='col-md-4 inputGroupContainer'>
                  <div className='input-group'>
                    <span className='input-group-addon'>
                      <i className='glyphicon glyphicon-user'></i>
                    </span>
                    <input
                      name='bankAccountNo'
                      placeholder='Bank Account No'
                      className='form-control mb-1'
                      type='number'
                      value={formDetails.bankAccountNo}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-md-6 control-label fw-medium'>Bank Name</label>
                <div className='col-md-4 inputGroupContainer'>
                  <div className='input-group'>
                    <span className='input-group-addon'>
                      <i className='glyphicon glyphicon-user'></i>
                    </span>
                    <input
                      name='bankName'
                      placeholder='Bank Name'
                      className='form-control mb-1'
                      type='text'
                      value={formDetails.bankName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-md-6 control-label fw-medium'>Address Line 1</label>
                <div className='col-md-4 inputGroupContainer'>
                  <div className='input-group'>
                    <span className='input-group-addon'>
                      <i className='glyphicon glyphicon-user'></i>
                    </span>
                    <input
                      name='addressLine1'
                      placeholder='Address Line 1'
                      className='form-control mb-1'
                      type='text'
                      value={formDetails.addressLine1}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-md-6 control-label fw-medium'>Address Line 2</label>
                <div className='col-md-4 inputGroupContainer'>
                  <div className='input-group'>
                    <span className='input-group-addon'>
                      <i className='glyphicon glyphicon-user'></i>
                    </span>
                    <input
                      name='addressLine2'
                      placeholder='Address Line 2'
                      className='form-control mb-1'
                      type='text'
                      value={formDetails.addressLine2}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-md-6 control-label fw-medium'>City</label>
                <div className='col-md-4 inputGroupContainer'>
                  <div className='input-group'>
                    <span className='input-group-addon'>
                      <i className='glyphicon glyphicon-user'></i>
                    </span>
                    <input
                      name='city'
                      placeholder='City'
                      className='form-control mb-1'
                      type='text'
                      value={formDetails.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-md-6 control-label fw-medium'>Country</label>
                <div className='col-md-4 inputGroupContainer'>
                  <div className='input-group'>
                    <span className='input-group-addon'>
                      <i className='glyphicon glyphicon-user'></i>
                    </span>
                    <input
                      name='country'
                      placeholder='Country'
                      className='form-control mb-1'
                      type='text'
                      value={formDetails.country}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-md-6 control-label fw-medium'>Zip Code</label>
                <div className='col-md-4 inputGroupContainer'>
                  <div className='input-group'>
                    <span className='input-group-addon'>
                      <i className='glyphicon glyphicon-user'></i>
                    </span>
                    <input
                      name='zipCode'
                      placeholder='Zip Code'
                      className='form-control mb-1'
                      type='text'
                      value={formDetails.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

            </fieldset>
            <button type='button' className='btn btn-outline-danger mt-2 mb-2 fw-semibold' onClick={handleCancel}>
                Cancel
              </button>
            <button type='submit' className='btn btn-outline-success mt-2 mb-2 fw-semibold'>
              Update Vendor
            </button>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default EditVendor;