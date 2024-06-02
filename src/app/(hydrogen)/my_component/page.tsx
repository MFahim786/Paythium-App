// pages/onboarding.tsx
"use client";
import { useEffect } from 'react';
// import { useRouter } from 'next/router';

const Onboarding: React.FC = () => {
  // const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem('accessToken');
    console.log(authToken);

    const script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = 'https://cdn.unipaas.com/onboarding-sandbox.js';
    script.async = true;
    script.onload = () => {
      window.unipaas.onboarding.create(
        {
          accessToken:authToken, // Replace with your access token
          selector: '.app-main',
        },
        callback
      );
    };
    document.body.appendChild(script);

    const callback = (data: { status: string }) => {
      if (data.status === 'COMPLETED') {
        // Redirect to home page after onboarding completion
        // router.push('/home');
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="app-main"></div>;
};

export default Onboarding;
