import { Navbar } from '@/components/navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'David Santos',
  description:
    'I build impactful applications that solve real-world problems and enhance user experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bgColor`}>
        <div className="w-5/6 mx-auto relative">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
