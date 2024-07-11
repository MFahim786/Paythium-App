'use client';  // This line makes the component a Client Component

import Link from 'next/link';
import { routes } from '@/config/routes';
import { Button } from 'rizzui';
import PageHeader from '@/app/shared/page-header';
import InvoiceTable from '@/app/shared/invoice/invoice-list/table';
import { PiPlusBold } from 'react-icons/pi';
import ExportButton from '@/app/shared/export-button';
import { getInvoice } from '@/app/auth/vendor-onbording';
import { useEffect, useState } from 'react';
import InvoiceList from './invoicelist';
 import { invoiceData } from '@/data/invoice-data';
const pageHeader = {
  title: 'Invoice List',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      href: routes.invoice.home,
      name: 'Invoice',
    },
    {
      name: 'List',
    },
  ],
};

const InvoiceListPage = () => {
  // const [invoiceData, setInvoiceData] = useState([]);
  // console.log("---------",invoiceData);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getInvoice();
  //       const data = response.items.map(item => ({
  //         id: item.id,
  //         name: item.customer.name,
  //         userName: item.customer.reference,
  //         avatar: '', // Add appropriate avatar URL if available
  //         email: item.customer.email,
  //         dueDate: item.dueDate,
  //         amount: item.totalAmount.toString(),
  //         status: item.paymentStatus,
  //         createdAt: item.createdAt,
  //       }));
  //       console.log('Mapped Data:', data);
  //       setInvoiceData(data);
  //     } catch (error) {
  //       console.error('Error fetching invoice data:', error);
  //     }
  //   };
  
  //   fetchData();
  // }, []);
  
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <ExportButton
            data={invoiceData}
            fileName="invoice_data"
            header="ID,Name,Username,Avatar,Email,Due Date,Amount,Status,Created At"
          />
          <Link href={routes.invoice.create} className="w-full @lg:w-auto">
            <Button as="span" className="w-full @lg:w-auto">
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
              Add Invoice
            </Button>
          </Link>
        </div>
      </PageHeader> 

       <InvoiceTable data={invoiceData} />
      {/* <InvoiceList/>  */}
    </>
  );
};

export default InvoiceListPage;
