import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate } from 'react-router-dom';
import { getAllVendors, deleteVendorsById } from '../services/vendors.service';
import '../App.css';
import { useSearchParams } from 'react-router-dom';
import LoadingSpinner from './spinner';

const VendorList = () => {
  const [vendors, setVendors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  async function setData({ page, limit }) {
    setLoading(true);
    const result = await getAllVendors({ page, limit });
    if (result?.response?.totalPages) {
      setPages(result?.response?.totalPages);
    }
    if (result?.response?.page) {
      setCurrentPage(result?.response?.page);
    }
    if (result?.response?.limit) {
      setLimit(result?.response?.limit);
    }
    setVendors(result.response.docs);
    setLoading(false);
  }

  useEffect(() => {
    async function fetchData() {
      setData({ page, limit });
    }
    fetchData();
  }, [limit, page]);

  const handleDelete = (id, vendorName) => {
    confirmAlert({
      title: 'Confirm Deletion',
      message: `Are you sure you want to delete ${vendorName}?`,
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            const res = await deleteVendorsById(id);
            if (!res?.response) {
              alert('Something went wrong');
            } else {
              setData({ page: currentPage, limit });
            }
          },
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

  const addVendor = () => {
    navigate('/create-vendor');
  };

  const paginationHandler = (page) => {
    const selectedPage = page.selected + 1;
    setCurrentPage(selectedPage);
    setData({ page: selectedPage, limit });
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set('page', selectedPage);
    updatedSearchParams.set('limit', limit);
    setSearchParams(updatedSearchParams.toString());
  };

  return (
    <>
      <div className='border border-bottom-0 text-center '>
        {loading && <LoadingSpinner />}
        <div className='d-flex justify-content-between align-items-center p-3 mt-4 '>
          <h2>Vendors</h2>
          <button
            type='button'
            className='btn btn-outline-primary btn-lg fw-semibold'
            onClick={addVendor}
          >
            Add Vendor
          </button>
        </div>
        <table className='h-auto table table-hover'>
          <thead>
            <tr>
              <th scope='col'>S.No</th>
              <th scope='col'>Vendor Name</th>
              <th scope='col'>Bank Account No</th>
              <th scope='col'>Bank Name</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            {vendors?.map((vendor, index) => (
              <tr key={vendor._id}>
                <th scope='row'>{index + 1}</th>
                <td className='fw-bold text-capitalize'>{vendor.vendorName}</td>
                <td>{vendor.bankAccountNo}</td>
                <td className='text-uppercase'>{vendor.bankName}</td>
                <td>
                  <div
                    className='btn-group'
                    role='group'
                    aria-label='Basic mixed styles'
                  >
                    <button
                      type='button'
                      className='btn btn-outline-info fw-semibold'
                      onClick={() => editDetails(vendor._id)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        handleDelete(vendor._id, vendor.vendorName)
                      }
                      type='button'
                      className='btn btn-outline-danger fw-semibold'
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='pagination-container'>
          <ReactPaginate
            initialPage={currentPage - 1}
            pageRangeDisplayed={pages}
            pageCount={pages}
            marginPagesDisplayed={2}
            breakLabel='...'
            onPageChange={paginationHandler}
            breakClassName={'break-me'}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>
    </>
  );
};

export default VendorList;
