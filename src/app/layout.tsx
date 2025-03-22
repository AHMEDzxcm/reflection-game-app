import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daily Reflection Game',
  description: 'A gamified daily reflection app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
