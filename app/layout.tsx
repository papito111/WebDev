import './globals.css';
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'My Blog',
  description: 'Welcome to My Blog created with Next.js 13!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="sticky top-0 bg-blue-600 text-white py-1 shadow-md">
          <nav className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-3xl font-bold">
              <Link href="/">My Blog</Link>
            </h1>
            <div className="flex space-x-6">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">O mnie</Link>
              <Link href="/contact" className="hover:underline">Kontakt</Link>
            </div>
          </nav>
        </header>
        <main className="container min-h-screen flex-grow mx-auto p-4">{children}</main>
        <footer className="bg-gray-800   text-white py-2 text-center">
          <p>© 2024 My Blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
