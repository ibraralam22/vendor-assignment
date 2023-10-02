import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useNavigate } from 'react-router-dom';
import { getVendorsById, updateVendorData } from '../services/vendors.service';
import LoadingSpinner from './spinner';

const EditVendor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

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
    async function fetchData() {
      const result = await getVendorsById(id);
      if (result?.response) {
        setFormData(result.response);
      }
    }
    fetchData();
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
    setLoading(true);
    try {
      const response = await updateVendorData(id, formDetails);
      if (response?.status) {
        setShowToast(true);
        setTimeout(() => {
          setLoading(false);
          navigate('/');
        }, 1500);
      } else {
        alert('Something went wrong');
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className='container text-center p-5'>
        <div className='container mx-auto p-2 w-75 text-bg-light p-3 border border-5 rounded-4 justify-content-center'>
          <form className='well form-horizontal ' onSubmit={updateVendor}>
            <fieldset>
              <legend className='text-primary fw-bold'>
                EDIT VENDOR DETAILS
              </legend>

              <div className='form-group row'>
                <label className='col-md-6 control-label fw-medium'>
                  Vendor Name
                </label>
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
                <label className='col-md-6 control-label fw-medium'>
                  Bank Account No
                </label>
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
                <label className='col-md-6 control-label fw-medium'>
                  Bank Name
                </label>
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
                <label className='col-md-6 control-label fw-medium'>
                  Address Line 1
                </label>
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
                <label className='col-md-6 control-label fw-medium'>
                  Address Line 2
                </label>
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
                <label className='col-md-6 control-label fw-medium'>
                  Country
                </label>
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
                <label className='col-md-6 control-label fw-medium'>
                  Zip Code
                </label>
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
            <div className='d-flex justify-content-between align-items-center mt-4'>
              <button
                type='button'
                className='btn btn-outline-dark mt-2 mb-2 fw-semibold'
                onClick={() => navigate('/')}
              >
                Cancel
              </button>

              <button
                type='submit'
                className='btn btn-outline-success mt-2 mb-2 fw-semibold'
                disabled={loading}
              >
                {loading ? <LoadingSpinner /> : 'Submit'}
              </button>
            </div>
          </form>
          <div
            className={`toast position-fixed bottom-0 end-0 mb-3 me-3 ${
              showToast ? 'show' : ''
            }`}
            role='alert'
            aria-live='assertive'
            aria-atomic='true'
          >
            <div className='toast-header'>
              <svg
                class='bd-placeholder-img rounded me-2'
                width='20'
                height='20'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                preserveAspectRatio='xMidYMid slice'
                focusable='false'
              >
                <rect width='100%' height='100%' fill='#007aff'></rect>
              </svg>
              <strong className='me-auto'>Vendor Update</strong>
              <small className='text-muted'>just now..</small>
              <button
                type='button'
                className='btn-close'
                onClick={() => setShowToast(false)}
                aria-label='Close'
              ></button>
            </div>
            <div className='toast-body'>Vendor updated successfully!!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditVendor;
