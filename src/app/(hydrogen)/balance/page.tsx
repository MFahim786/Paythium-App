"use client";
import React, { useEffect } from 'react';

interface BalanceProps {
 
}

declare global {
  interface Window {
    unipaas: any;
  }
}

const Balance: React.FC<BalanceProps> = () => {
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.unipaas.com/embedded-ui.js';
    script.async = true;
    script.onload = () => {
      const components = window.unipaas.components(token);
      const config = {
        theme: {
          colors: {
            primaryColor: '#2F80ED',
            secondaryColor: '#687B97',
            accentTextColor: '#2F80ED',
            primaryButtonColor: '#2F80ED',
          },
          fontFamily: 'inherit',
          boxShadow: '0px 3px 15px rgba(27, 79, 162, 0.11)',
        },
      };
      const payPortal = components.create('balance');
      payPortal.mount('#balance');
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
    <div id="balance"></div>
  );
};

export default Balance;
