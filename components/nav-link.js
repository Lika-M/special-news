'use client';

import Link from 'next/link.js';
import { usePathname } from 'next/navigation.js';


export default function NavLink({ href, children }) {
    const path = usePathname();

    return (
        <Link
            className={path.includes(href) ? 'active' : undefined}
            href={href}
        >
            {children}
        </Link>
    );
}