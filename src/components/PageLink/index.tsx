import Link from "next/link";
import React from "react";

interface PageLinkProps {
  to: string;
  children?: React.ReactNode;
  prefetch?: boolean
}

export default function PageLink({to,children,prefetch = true}:PageLinkProps) {
  return (
    <Link href={to} passHref prefetch={prefetch}>
      <a>
        {children}
      </a>
    </Link>
  );
}