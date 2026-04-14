import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FirstFront Plugin Hub',
  description:
    'AI-powered plugin marketplace for FirstFront agents',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">{children}</body>
    </html>
  );
}
