import React from 'react';

import '@/styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
      </head>
      <body className="bg-zinc-900 text-zinc-100">
        <h1>hello world</h1>
        {children}
      </body>
    </html>
  );
}
