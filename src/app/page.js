import Link from 'next/link';

export default function Home() {
    const routingExamples = [
        {
            title: 'Статические страницы',
            description: 'Обычные страницы с фиксированными URL',
            examples: ['/about', '/contact'],
            color: 'bg-green-100 border-green-300 dark:bg-green-900/20 dark:border-green-700',
        },
        {
            title: 'Динамические роуты',
            description: 'Страницы с параметрами в URL',
            examples: ['/users/[id]', '/blog/[slug]'],
            color: 'bg-blue-100 border-blue-300 dark:bg-blue-900/20 dark:border-blue-700',
        },
        {
            title: 'Вложенные роуты',
            description: 'Многоуровневые URL с несколькими параметрами',
            examples: ['/products/[category]/[id]'],
            color: 'bg-purple-100 border-purple-300 dark:bg-purple-900/20 dark:border-purple-700',
        },
    ];

    return (
        <div className='space-y-8'>
            {/* Заголовок */}
            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-bold text-foreground'>
                    Добро пожаловать в Next.js Демо!
                </h1>
                <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                    Изучите различные типы роутинга в Next.js App Router.
                    Навигация происходит мгновенно без перезагрузки страницы.
                </p>
            </div>

            {/* Информация о роутинге */}
            <div className='bg-blue-50 border border-blue-200 rounded-lg shadow-md p-6 dark:bg-blue-900/20 dark:border-blue-700'>
                <h2 className='text-2xl font-semibold mb-4 text-foreground'>
                    Как работает роутинг в Next.js?
                </h2>
                <div className='space-y-4 text-muted-foreground'>
                    <p>
                        <strong>App Router</strong> использует файловую систему
                        для создания роутов:
                    </p>
                    <ul className='list-disc list-inside space-y-2 ml-4'>
                        <li>
                            <code className='bg-blue-100 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100'>
                                src/app/page.js
                            </code>{' '}
                            →{' '}
                            <code className='bg-blue-100 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100'>
                                /
                            </code>
                        </li>
                        <li>
                            <code className='bg-blue-100 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100'>
                                src/app/about/page.js
                            </code>{' '}
                            →{' '}
                            <code className='bg-blue-100 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100'>
                                /about
                            </code>
                        </li>
                        <li>
                            <code className='bg-blue-100 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100'>
                                src/app/users/[id]/page.js
                            </code>{' '}
                            →{' '}
                            <code className='bg-blue-100 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100'>
                                /users/123
                            </code>
                        </li>
                        <li>
                            <code className='bg-blue-100 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100'>
                                src/app/blog/[slug]/page.js
                            </code>{' '}
                            →{' '}
                            <code className='bg-blue-100 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100'>
                                /blog/my-post
                            </code>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Примеры роутинга */}
            <div className='grid md:grid-cols-3 gap-6'>
                {routingExamples.map((example, index) => (
                    <div
                        key={index}
                        className={`border-2 rounded-lg p-6 ${example.color}`}>
                        <h3 className='text-xl font-semibold mb-3 text-foreground'>
                            {example.title}
                        </h3>
                        <p className='text-muted-foreground mb-4'>
                            {example.description}
                        </p>
                        <div className='space-y-2'>
                            {example.examples.map((ex, i) => (
                                <div
                                    key={i}
                                    className='bg-background rounded px-3 py-2 text-sm font-mono text-foreground border border-border'>
                                    {ex}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Быстрые ссылки */}
            <div className='bg-green-50 border border-green-200 rounded-lg shadow-md p-6 dark:bg-green-900/20 dark:border-green-700'>
                <h2 className='text-2xl font-semibold mb-4 text-foreground'>
                    Попробуйте разные страницы:
                </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <Link
                        href='/about'
                        className='block p-4 border border-green-200 rounded-lg hover:border-green-400 hover:bg-green-100 transition-colors bg-background dark:border-green-700 dark:hover:bg-green-900/20'>
                        <h3 className='font-semibold text-foreground'>О нас</h3>
                        <p className='text-muted-foreground text-sm'>
                            Статическая страница
                        </p>
                    </Link>

                    <Link
                        href='/users/1'
                        className='block p-4 border border-green-200 rounded-lg hover:border-green-400 hover:bg-green-100 transition-colors bg-background dark:border-green-700 dark:hover:bg-green-900/20'>
                        <h3 className='font-semibold text-foreground'>
                            Пользователь #1
                        </h3>
                        <p className='text-muted-foreground text-sm'>
                            Динамический роут
                        </p>
                    </Link>

                    <Link
                        href='/blog/first-post'
                        className='block p-4 border border-green-200 rounded-lg hover:border-green-400 hover:bg-green-100 transition-colors bg-background dark:border-green-700 dark:hover:bg-green-900/20'>
                        <h3 className='font-semibold text-foreground'>
                            Первый пост
                        </h3>
                        <p className='text-muted-foreground text-sm'>
                            Блог с параметрами
                        </p>
                    </Link>

                    <Link
                        href='/contact'
                        className='block p-4 border border-green-200 rounded-lg hover:border-green-400 hover:bg-green-100 transition-colors bg-background dark:border-green-700 dark:hover:bg-green-900/20'>
                        <h3 className='font-semibold text-foreground'>
                            Контакты
                        </h3>
                        <p className='text-muted-foreground text-sm'>
                            Форма обратной связи
                        </p>
                    </Link>

                    <Link
                        href='/products/electronics/1'
                        className='block p-4 border border-green-200 rounded-lg hover:border-green-400 hover:bg-green-100 transition-colors bg-background dark:border-green-700 dark:hover:bg-green-900/20'>
                        <h3 className='font-semibold text-foreground'>Товар</h3>
                        <p className='text-muted-foreground text-sm'>
                            Вложенный роут
                        </p>
                    </Link>
                </div>
            </div>

            {/* Преимущества Next.js */}
            <div className='bg-purple-50 border border-purple-200 rounded-lg p-6 dark:bg-purple-900/20 dark:border-purple-700'>
                <h2 className='text-2xl font-semibold mb-4 text-foreground'>
                    Преимущества Next.js:
                </h2>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                        <div className='flex items-center space-x-2'>
                            <span className='text-green-500'>✓</span>
                            <span className='text-muted-foreground'>
                                Серверный рендеринг (SSR)
                            </span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <span className='text-green-500'>✓</span>
                            <span className='text-muted-foreground'>
                                Статическая генерация (SSG)
                            </span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <span className='text-green-500'>✓</span>
                            <span className='text-muted-foreground'>
                                Автоматический роутинг
                            </span>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <div className='flex items-center space-x-2'>
                            <span className='text-green-500'>✓</span>
                            <span className='text-muted-foreground'>
                                Оптимизация изображений
                            </span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <span className='text-green-500'>✓</span>
                            <span className='text-muted-foreground'>
                                API Routes
                            </span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <span className='text-green-500'>✓</span>
                            <span className='text-muted-foreground'>
                                Hot Reloading
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

