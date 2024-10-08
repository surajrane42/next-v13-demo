import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import NewTodoForm from '@/components/NewTodoForm';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/docs',
    label: 'Docs',
  },
  {
    href: '/todos',
    label: 'Todos',
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul className="flex align-middle">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div>
          <NewTodoForm />
        </div>
        {children}
      </body>
    </html>
  );
}
