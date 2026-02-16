import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Copilot CLI Plugin Marketplace',
  description:
    'Run AI-powered productivity plugins powered by GitHub Copilot CLI',
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
