'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Alerts', href: '/alerts' },
    { label: 'Safety Tips', href: '/safety' }
  ];

  return (
    <header className="bg-[hsl(207,39%,29%)] text-white shadow-md sticky top-0 z-50">
      <div className="container-disaster">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="text-2xl">🚨</div>
            <h1 className="text-[20px] font-bold text-white m-0">
              AI Disaster Alert System
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-[14px] font-medium rounded-md transition-all ${
                  pathname === item.href
                    ? 'bg-[hsl(207,33%,35%)] text-white'
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/safety"
              className="ml-2 px-5 py-2 bg-[hsl(207,33%,35%)] text-white text-[14px] font-semibold rounded-md hover:bg-[hsl(207,33%,30%)] transition-all shadow-button"
            >
              Safety Tips
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
