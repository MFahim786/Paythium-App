import axios from "axios";

const venderOnbording = async ({ vendorId }) => {
  console.log('createPaymentRequest', vendorId);
  try {
    // Data to be sent to UNIPaaS server
    const requestData = {

      "scopes": ["portal_read", "portal_write", "onboarding_write", "invoice_read", "invoice_write", "payout_write"],
      "vendorId": vendorId,

    };

    // Make a POST request to UNIPaaS server
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
    // Data to be sent to UNIPaaS server
    const requestData = {

      reference: "INV-123588",
      currency: "GBP",
      totalAmount: 99.5,
      vatAmount: 19.9,
      dueDate: "2022-12-12T08:42:52.933Z",
      paymentStatus: "unpaid",
      totalPaid: 0,
      customer: {
        reference: "1234",
        email: "test@gmail.com",
        name: "Kevin Malone"
      },
      lineItems: [
        {
          description: "line 1",
          unitPrice: 10.6,
          quantity: 3
        },
        {
          description: "line 2",
          unitPrice: 19.3,
          quantity: 1
        }
      ],
      isRecurring: true,
      subscriptionId: "sub-123",
      external: false,
      batchId: "batch-777",
      publicUrl: "http://yourcompany.com/invoice.pdf"

    };

    // Make a POST request to UNIPaaS server
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

export default venderOnbording;
export { createInvoice };
