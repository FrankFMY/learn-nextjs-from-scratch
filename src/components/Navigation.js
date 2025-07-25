'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Главная' },
        { href: '/about', label: 'О нас' },
        { href: '/contact', label: 'Контакты' },
        { href: '/users/1', label: 'Пользователи' },
        { href: '/blog/first-post', label: 'Блог' },
        { href: '/products/electronics/1', label: 'Товары' },
    ];

    return (
        <nav className='bg-blue-600 text-white p-4 shadow-lg'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='text-xl font-bold'>Next.js Демо</div>
                    <ul className='flex space-x-6'>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`hover:text-blue-200 transition-colors ${
                                        pathname === item.href
                                            ? 'text-blue-200 font-semibold'
                                            : ''
                                    }`}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
