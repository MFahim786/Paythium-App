'use client';

import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { SubmitHandler } from 'react-hook-form';
import { PiArrowRightBold } from 'react-icons/pi';
import { Checkbox, Password, Button, Input, Text } from 'rizzui';
import { Form } from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import { loginSchema, LoginSchema } from '@/utils/validators/login.schema';
import venderOnbording from '../../app/auth/vendor-onbording/index'
const initialValues: LoginSchema = {
  email: 'admin@admin.com',
  password: 'admin',
  rememberMe: true,
};

export default function SignInForm() {
  const routes= useRouter()
  //TODO: why we need to reset it here
  const [reset, setReset] = useState({});

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    console.log(data);

    // Call the vendorOnboarding function
    try {
      const response = await venderOnbording({ vendorId: data.password });
      console.log("Response is", response?.accessToken);

      if (response?.accessToken) {
        localStorage.setItem('accessToken', response?.accessToken);
        alert('Login Successful');
        routes.push('/'); // Navigate to the dashboard
      }
    } catch (error) {
      console.error('Error during onboarding:', error);
    }
  };
  return (
    <>
      <Form<LoginSchema>
        validationSchema={loginSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5">
            {/* <Input
              type="email"
              size="lg"
              label="Email"
              placeholder="Enter your email"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('email')}
              error={errors.email?.message}
            /> */}
            <Input
              label="Vendore ID"
              type="number"
              placeholder="Enter your Vedore ID"
              size="lg"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('password')}
              error={errors.password?.message}
            />
            <div className="flex items-center justify-between pb-2">
              <Checkbox
                {...register('rememberMe')}
                label="Remember Me"
                className="[&>label>span]:font-medium"
              />
              {/* <Link
                href={routes.auth.forgotPassword1}
                className="h-auto p-0 text-sm font-semibold text-blue underline transition-colors hover:text-gray-900 hover:no-underline"
              >
                Forget Password?
              </Link> */}
            </div>
            <Button className="w-full" type="submit" size="lg">
              <span>Sign in</span>{' '}
              <PiArrowRightBold className="ms-2 mt-0.5 h-5 w-5" />
            </Button>
          </div>
        )}
      </Form>
      {/* <Text className="mt-6 text-center leading-loose text-gray-500 lg:mt-8 lg:text-start">
        Don’t have an account?{' '}
        <Link
          href={routes.auth.signUp1}
          className="font-semibold text-gray-700 transition-colors hover:text-blue"
        >
          Sign Up
        </Link>
      </Text> */}
    </>
  );
}
