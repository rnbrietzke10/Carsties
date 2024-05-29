'use client';
import { Button } from 'flowbite-react';
import { signIn } from 'next-auth/react';
import React from 'react';

export const LoginButton = () => {
  return (
    <Button outline onClick={() => signIn('id-server', { callbackUrl: '/' })}>
      Login
    </Button>
  );
};
