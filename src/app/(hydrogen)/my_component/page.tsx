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
          accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsib25ib2FyZGluZ193cml0ZSIsInBheW91dF93cml0ZSIsImV3YWxsZXRfd3JpdGUiLCJwYXlvdXRfd3JpdGUiLCJsaW5rX3dyaXRlIiwib25ib2FyZGluZ193cml0ZSIsIm5vdGlmaWNhdGlvbl93cml0ZSIsImNvbmZpZ19yZWFkIiwiZGlyZWN0X2RlYml0X3dyaXRlIiwiZXdhbGxldF9yZWFkIiwicHVibGljX2NvbmZpZ19yZWFkIiwibGlua19yZWFkIiwib25ib2FyZGluZ19yZWFkIiwibm90aWZpY2F0aW9uX3JlYWQiLCJjb25maWdfcmVhZCIsInB1YmxpY19jb25maWdfcmVhZCIsIm9uYm9hcmRpbmdfcmVhZCIsImNvbmZpZ19yZWFkIiwibm90aWZpY2F0aW9uX3JlYWQiLCJwdWJsaWNfY29uZmlnX3JlYWQiLCJvbmJvYXJkaW5nX3dyaXRlIiwiZGlyZWN0X2RlYml0X3dyaXRlIl0sInZlbmRvcklkIjoiNjVmYmY0NTBkMWM0YzYxNGNlNjc2M2JkIiwibWVyY2hhbnRJZCI6IjY1ZjZlODcyNjk0ZjQzNWJjNGZlNGE2YiIsImVudiI6InNhbmRib3giLCJpYXQiOjE3MTY5NjA2NzIsImV4cCI6MTcxNzA0NzA3Mn0.7binY0Aks24hEBXqR7eQtexiL1KYqwws-86TqgHJNLo", // Replace with your access token
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
