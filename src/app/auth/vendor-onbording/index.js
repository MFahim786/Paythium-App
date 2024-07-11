import axios from "axios";

const venderOnbording = async ({ vendorId }) => {
  console.log('createPaymentRequest', vendorId);
  try {
    // Data to be sent to UNIPaaS server
    const requestData = {

      "scopes": ["portal_read", "portal_write", "onboarding_write", "invoice_read", "invoice_write", "payout_write"],
      "vendorId": vendorId,

    };


    const response = await axios.post('https://sandbox.unipaas.com/platform/authorize', requestData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BoRhn2IG9BcMhxIVhWkKmA=='
      }
    });
    console.log("---------", response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending data to UNIPaaS:', error.message);
    throw error;
  }
};
const createInvoice = async ({invoiceData}) => {
  console.log('createPaymentRequest',invoiceData);
  try {
   
    const response = await axios.post('https://sandbox.unipaas.com/platform/vendors/668a6c81e12d6161edffaa29/invoices', invoiceData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BoRhn2IG9BcMhxIVhWkKmA=='
      }
    });
    console.log("---------", response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending data to UNIPaaS:', error.message);
    throw error;
  }
};
//Get invoice data from UNipaaS server
const getInvoice = async () => {
  console.log('get innvoice datta');
  try {
    
    const response = await axios.get('https://sandbox.unipaas.com/platform/vendors/668a6c81e12d6161edffaa29/invoices',  {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BoRhn2IG9BcMhxIVhWkKmA=='
      }
    });
    // console.log("---------", response.data);
    return response.data;
  } catch (error) {
    console.error('Error geting invoice data to UNIPaaS:', error.message);
    throw error;
  }
};

export default venderOnbording;
export { createInvoice,getInvoice };
