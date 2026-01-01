import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cat Video Concept Lab',
  description:
    'Generate high-retention, platform-safe cat video blueprints tailored for YouTube audiences.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
