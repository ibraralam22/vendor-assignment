import * as HttpService from './http.service';


const ApiUrl = process.env.PUBLIC_API_URL;

export const getAllVendors = () => {
  console.log("APIS:: ",ApiUrl)
    return HttpService.getHttp(ApiUrl + '/vendors');
  };
  
