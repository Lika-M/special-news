import Link from 'next/link.js';

import NavLink from '@/components/nav-link.js';

export default function MainHeader() {
 
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">Special News</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}