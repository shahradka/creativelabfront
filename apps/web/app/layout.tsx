import { Inter, Lora } from 'next/font/google';

import { Providers } from '@/components/providers';
import '../styles/global.css';

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const fontLora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontLora.variable} ${fontInter.variable} antialiased `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
