'use client';

import { useState } from 'react';
import { PiArrowRightBold } from 'react-icons/pi';
import { Checkbox, Password, Button, Input, Text } from 'rizzui';
import { useRouter } from 'next/navigation';
import venderOnbording from '../../app/auth/vendor-onbording/index';
import { signIn } from 'next-auth/react';
import { loginSchema, LoginSchema } from '@/utils/validators/login.schema';

export default function SignInForm() {
  const router = useRouter();
  const [vendorId, setVendorId] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const initialValues: LoginSchema = {
    email: 'admin@admin.com',
    password: 'admin',
    rememberMe: true,
  };
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    console.log({ vendorId, rememberMe });

    // Call the vendorOnboarding function
    try {
      const response = await venderOnbording({ vendorId });
      console.log("Response is", response?.accessToken);
     

      if (response?.accessToken) {
        localStorage.setItem('accessToken', response?.accessToken);
        signIn('credentials', {
          ...initialValues,
        });
        router.push('/');
       
      }
    } catch (error) {
      router.push('/');

      console.error('Error during onboarding:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        label="Vendor ID"
        // type="number"
        placeholder="Enter your Vendor ID"
        size="lg"
        className="[&>label>span]:font-medium"
        inputClassName="text-sm"
        value={vendorId}
        onChange={(e) => setVendorId(e.target.value)}
      />
      <div className="flex items-center justify-between pb-2">
        <Checkbox
          label="Remember Me"
          className="[&>label>span]:font-medium"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
      </div>
      <Button className="w-full" type="submit" size="lg">
        <span>Sign in</span>{' '}
        <PiArrowRightBold className="ms-2 mt-0.5 h-5 w-5" />
      </Button>
    </form>
  );
}