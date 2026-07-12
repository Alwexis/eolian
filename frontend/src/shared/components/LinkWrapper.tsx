import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

interface Props {
  children: React.ReactNode;
  to: string;
  className?: string;
}

export function NavigationLink({ children, to, className }: Props) {
  const { pathname } = useLocation();
  const isActive =
    pathname === to || (to !== "/" && pathname.startsWith(`${to}/`));

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-x-2.5 rounded-lg px-2.5 py-1.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-200/50 hover:text-neutral-800",
        className,
        {
          "bg-neutral-200/50 text-neutral-800": isActive,
        },
      )}>
      {children}
    </Link>
  );
}
