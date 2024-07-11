import React, { useEffect } from 'react';

interface VenndoreNotification {
  // authToken: string;
}

declare global {
  interface Window {
    unipaas: any;
  }
}

const VenndoreNotification: React.FC<VenndoreNotification> = () => {
  useEffect(() => {
    const storedAuthToken = localStorage.getItem('accessToken');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.unipaas.com/embedded-ui.js';
    script.async = true;
    script.onload = () => {
      const components = window.unipaas.components(storedAuthToken);
      const config = {
        icon: {
            url: 'https://cdn.unipaas.com/img/bell-icon.svg', 
            size: 30 
          }
      };
      const notification = components.create("notification", config);
      notification.mount("#notification");
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
    <div id="notification"></div>
  );
};

export default VenndoreNotification;
