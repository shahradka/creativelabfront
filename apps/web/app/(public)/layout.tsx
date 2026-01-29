import { HeaderBase } from '@creativelabfront/ui-creativelab/components/header-base';
import { Typography } from '@creativelabfront/ui/components/typography';
import '@creativelabfront/ui-creativelab';
import '@creativelabfront/ui';
import Link from 'next/link';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex flex-col w-full items-center bg-header-background">
        <div className="max-w-7xl w-full">
          <HeaderBase title="CreativeLab">
            <Link href="/current">
              <Typography variant="small">Current</Typography>
            </Link>
            <Link href="/current">
              <Typography variant="small">Programming</Typography>
            </Link>
            <Link href="/current">
              <Typography variant="small">Design</Typography>
            </Link>
            <Link href="/current">
              <Typography variant="small">My CV</Typography>
            </Link>
          </HeaderBase>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}
