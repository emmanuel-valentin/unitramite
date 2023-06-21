import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import CustomNavBar from '../navbar/navbar';
import Head from 'next/head';
import User from '../../api/stores/user.model';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  const [user, setUser] = useState<User>();
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CustomNavBar />
        {children}
      </main>
    </>
  );
}
