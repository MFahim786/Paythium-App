import React, { useEffect } from 'react';

interface InvoiceList {
  // authToken: string;
}

declare global {
  interface Window {
    unipaas: any;
  }
}

const InvoiceList: React.FC<InvoiceList> = () => {
  useEffect(() => {
    const storedAuthToken = localStorage.getItem('accessToken');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.unipaas.com/embedded-ui.js';
    script.async = true;
    script.onload = () => {
      const components = window.unipaas.components(storedAuthToken);
      const config = {
        mode: 'edit', 
        customer: {
          reference: '1234567', 
          name: 'John Doe', 
          email: 'john@email.com',
       },
       invoice: {
          reference: 'INV-123', 
       }
      };
      const invoice = components.create("invoice", config);
      invoice.mount("#invoice");
      components.on('sessionExpired', () => {
        console.log('the session is expired');
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="invoice"></div>
  );
};

export default InvoiceList;
