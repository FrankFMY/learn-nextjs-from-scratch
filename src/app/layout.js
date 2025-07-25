import './globals.css';
import Navigation from '../components/Navigation';

export const metadata = {
    title: 'Next.js Демо - Изучение роутинга',
    description: 'Демонстрация различных типов роутинга в Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang='ru'>
            <body className='min-h-screen bg-background text-foreground'>
                <Navigation />
                <main className='max-w-6xl mx-auto p-6'>{children}</main>
            </body>
        </html>
    );
}

