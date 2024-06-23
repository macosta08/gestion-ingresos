
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { LinkItem } from '@/types';
import { Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import { Home, LineChart, Package2, Users2 } from "lucide-react";

const Sidebar = () => {
  const router = useRouter();

  const urlsSidebar: LinkItem[] = [
    { name: 'Inicio', link: '/', icon: <Home className="h-5 w-5" /> },
    { name: 'Ingresos y egresos', link: '/ingresos-egresos', icon: <LineChart className="h-5 w-5" /> },
    { name: 'Usuarios', link: '/usuarios', icon: <Users2 className="h-5 w-5" /> },
    { name: 'Reportes', link: '/reportes', icon: <Package2 className="h-5 w-5" /> }
  ];
  
  
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <div className="flex items-center justify-center py-4">
        <Image src="/img/logo.png" alt="Logo" width={40} height={40} />
      </div>
      <nav className="flex flex-col items-center gap-4 px-2 py-10">
        {urlsSidebar.map((link) => {
          const isActive = router.pathname.includes(link.link);
          return (
            <Tooltip key={link.link}>
              <TooltipTrigger asChild>
                <Link
                  href={link.link}
                  className={isActive 
                    ? "group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    : "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  }
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{link.name}</TooltipContent>
            </Tooltip>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;

