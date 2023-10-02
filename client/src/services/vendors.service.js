import * as HttpService from './http.service';

const ApiUrl = process.env.REACT_APP_PUBLIC_API_URL;

export const createVendor = async (entity) => {
  return await HttpService.postHttp(ApiUrl + '/vendors', entity);
};

export const getAllVendors = async ({ page, limit }) => {
  return await HttpService.getHttp(
    ApiUrl + `/vendors?page=${page ?? ''}&limit=${limit ?? ''}`
  );
};

export const getVendorsById = async (id) => {
  return await HttpService.getHttp(ApiUrl + `/vendors/${id}`);
};
export const updateVendorData = async (id, entity) => {
  return await HttpService.putHttp(ApiUrl + `/vendors/${id}`, entity);
};

export const deleteVendorsById = async (id) => {
  return await HttpService.deleteHttp(ApiUrl + `/vendors/${id}`);
};
