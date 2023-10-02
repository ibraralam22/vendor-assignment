import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { createVendor } from '../services/vendors.service';
import LoadingSpinner from './spinner';

export default function AddVendor() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formDetails,
      [name]: value,
    });
  };

  const dataStore = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(formDetails);
      await createVendor(formDetails);
      setFormData({
        vendorName: '',
        bankAccountNo: '',
        bankName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        country: '',
        zipCode: '',
      });
      setShowToast(true);
      setTimeout(() => {
        setLoading(false);
        navigate('/');
      }, 2000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div class='container text-center p-5 '>
        <div className='container mx-auto p-2 w-75 text-bg-light p-3 border border-5 rounded-4 justify-content-center'>
          <form class='well form-horizontal ' onSubmit={dataStore}>
            <fieldset>
              <legend className='text-primary fw-bold'>
                VENDOR REGISTER FORM
              </legend>

              <div class='form-group row'>
                <label class='col-md-6 control-label fw-medium'>
                  Vendor Name
                </label>
                <div class='col-md-4 inputGroupContainer'>
                  <div class='input-group'>
                    <span class='input-group-addon'>
                      <i class='glyphicon glyphicon-user'></i>
                    </span>
                    <input
                      name='vendorName'
                      placeholder='Vendor Name'
                      class='form-control mb-1'
                      type='text'
                      value={formDetails.vendorName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div class='form-group row'>
                <label class='col-md-6 control-label fw-medium'>
                  Bank Account No
                </label>
                <div class='col-md-4 inputGroupContainer'>
                  <div class='input-group'>
                    <span class='input-group-addon'>
                      <i class='glyphicon glyphicon-user'></i>
                    </span>
                    <input
                      name='bankAccountNo'
                      placeholder='Bank Account No'
                      class='form-control mb-1'
                      type='number'
                      value={formDetails.bankAccountNo}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div class='form-group row'>
                <label class='col-md-6 control-label fw-medium'>
                  Bank Name
                </label>
                <div class='col-md-4 inputGroupContainer'>
                  <div class='input-group'>
                    <span class='input-group-addon'>
                      <i class='glyphicon glyphicon-envelope'></i>
                    </span>
                    <input
                      name='bankName'
                      placeholder='Bank Name'
                      class='form-control mb-1'
                      type='text'
                      value={formDetails.bankName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div class='form-group row'>
                <label class='col-md-6 control-label fw-medium'>
                  Address Line 1
                </label>
                <div class='col-md-4 inputGroupContainer'>
                  <div class='input-group'>
                    <span class='input-group-addon'>
                      <i class='glyphicon glyphicon-earphone'></i>
                    </span>
                    <input
                      name='addressLine1'
                      placeholder='Address line 1'
                      class='form-control mb-1'
                      type='text'
                      value={formDetails.addressLine1}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div class='form-group row'>
                <label class='col-md-6 control-label fw-medium'>
                  Address Line 2
                </label>
                <div class='col-md-4 inputGroupContainer'>
                  <div class='input-group'>
                    <span class='input-group-addon'>
                      <i class='glyphicon glyphicon-earphone'></i>
                    </span>
                    <input
                      name='addressLine2'
                      placeholder='Address Line 2'
                      class='form-control mb-1'
                      type='text'
                      value={formDetails.addressLine2}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div class='form-group row'>
                <label class='col-md-6 control-label fw-medium'>City</label>
                <div class='col-md-4 inputGroupContainer'>
                  <div class='input-group'>
                    <span class='input-group-addon'>
                      <i class='glyphicon glyphicon-home'></i>
                    </span>
                    <input
                      name='city'
                      placeholder='City'
                      class='form-control mb-1'
                      type='text'
                      value={formDetails.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div class='form-group row'>
                <label class='col-md-6 control-label fw-medium'>Country</label>
                <div class='col-md-4 inputGroupContainer'>
                  <div class='input-group'>
                    <span class='input-group-addon'>
                      <i class='glyphicon glyphicon-home'></i>
                    </span>
                    <input
                      name='country'
                      placeholder='Country'
                      class='form-control mb-1'
                      type='text'
                      value={formDetails.country}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div class='form-group row'>
                <label class='col-md-6 control-label fw-medium'>Zip Code</label>
                <div class='col-md-4 inputGroupContainer'>
                  <div class='input-group'>
                    <span class='input-group-addon'>
                      <i class='glyphicon glyphicon-home'></i>
                    </span>
                    <input
                      name='zipCode'
                      placeholder='Zip Code'
                      class='form-control mb-1'
                      type='number'
                      value={formDetails.zipCode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            <div class='d-flex justify-content-between align-items-center mt-4'>
              <button
                type='button'
                class='btn btn-outline-danger mt-2 mb-2 fw-semibold'
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
              <strong className='me-auto'>Vendor Created</strong>
              <small className='text-muted'>just now..</small>
              <button
                type='button'
                className='btn-close'
                onClick={() => setShowToast(false)}
                aria-label='Close'
              ></button>
            </div>
            <div className='toast-body'>Vendor created successfully!!</div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
