import { HeaderBase } from '@creativelabfront/ui-creativelab/components/header-base';
import { Typography } from '@creativelabfront/ui/components/typography';
import '@creativelabfront/ui-creativelab';
import '@creativelabfront/ui';
import Link from 'next/link';
import { Footer } from '@creativelabfront/ui-creativelab/components/footer';
import { MenuItems } from '@creativelabfront/ui-creativelab/constants/menu-items';

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
              <Typography className="text-white" variant="small">
                Current
              </Typography>
            </Link>
            <Link href="/current">
              <Typography className="text-white" variant="small">
                Programming
              </Typography>
            </Link>
            <Link href="/current">
              <Typography className="text-white" variant="small">
                Design
              </Typography>
            </Link>
            <Link href="/current">
              <Typography className="text-white" variant="small">
                My CV
              </Typography>
            </Link>
          </HeaderBase>
        </div>
      </div>
      <main>{children}</main>
      <Footer>
        <div className="flex justify-around">
          {MenuItems.map((menuItem) => {
            if (menuItem.parentId === null)
              return (
                <div key={menuItem.id} className="flex flex-col items-center gap-1 w-40 px-6">
                  <Typography className="text-muted-foreground">{menuItem.label}</Typography>
                  <div className="w-full h-1 bg-gradient-to-r from-zinc-50/10 via-neutral-500 to-zinc-50/10" />
                  <div className="flex flex-col gap-5">
                    {MenuItems.filter(
                      (menuChildItem) => menuChildItem.parentId === menuItem.id
                    ).map((child) => (
                      <Typography className="text-white" key={child.id}>
                        {child.label}
                      </Typography>
                    ))}
                  </div>
                </div>
              );
          })}
        </div>
      </Footer>
    </div>
  );
}
