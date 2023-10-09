import Link from "next/link";
import React from "react";

interface PageLinkProps {
  to: string;
  children?: React.ReactNode;
  prefetch?: boolean;
  className?: string | undefined;
}

export default function PageLink({to,children,className,prefetch = true}:PageLinkProps) {
  return (
    <Link href={to} passHref prefetch={prefetch}>
      <a className={className}>
        {children}
      </a>
    </Link>
  );
}