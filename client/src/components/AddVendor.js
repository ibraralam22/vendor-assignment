import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

export default function AddVendor() {
  
  const navigate = useNavigate()
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
    try {
      console.log(formDetails);
      await axios.post('http://localhost:4200/vendors', formDetails);
      alert('Vendor registered successfully');
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
      navigate('/vendors-list')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class='container text-center p-5'>
        <div className='container mx-auto p-2 w-75 border border-5 rounded-4 justify-content-center'>
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
            <button type='submit' class='btn btn-warning mt-2 mb-2 fw-semibold'>
              {' '}
              Submit
            </button>
          </form>
        </div>
      </div>
      ;
    </>
  );
}
