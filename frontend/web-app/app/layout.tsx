import type { Metadata } from 'next';
import './globals.css';
import Navbar from './navbar/Navbar';

export const metadata: Metadata = {
  title: 'Carsties',
  description: 'Car auction app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main className='container mx-auto px-5 pt-10'>{children}</main>
      </body>
    </html>
  );
}
