import Link from 'next/link';

// Генерируем статические параметры для демонстрации
export async function generateStaticParams() {
    return [
        { slug: 'first-post' },
        { slug: 'nextjs-routing' },
        { slug: 'react-hooks' },
        { slug: 'web-development' },
    ];
}

export default async function BlogPost({ params }) {
    const { slug } = await params;

    // Имитируем данные постов
    const posts = {
        'first-post': {
            title: 'Мой первый пост в блоге',
            author: 'Иван Петров',
            date: '2024-01-15',
            content:
                'Это мой первый пост в блоге. Здесь я расскажу о своем опыте изучения Next.js и о том, как работает роутинг в этом фреймворке.',
            tags: ['Next.js', 'Роутинг', 'Обучение'],
        },
        'nextjs-routing': {
            title: 'Роутинг в Next.js App Router',
            author: 'Мария Сидорова',
            date: '2024-01-20',
            content:
                'Подробный разбор того, как работает файловая система роутинга в Next.js 13+. Рассмотрим статические, динамические и вложенные роуты.',
            tags: ['Next.js', 'App Router', 'Роутинг'],
        },
        'react-hooks': {
            title: 'Использование React Hooks',
            author: 'Алексей Козлов',
            date: '2024-01-25',
            content:
                'Обзор основных React Hooks: useState, useEffect, useContext. Практические примеры использования в реальных проектах.',
            tags: ['React', 'Hooks', 'JavaScript'],
        },
        'web-development': {
            title: 'Современная веб-разработка',
            author: 'Елена Волкова',
            date: '2024-01-30',
            content:
                'Тренды и технологии в современной веб-разработке. От статических сайтов до полноценных SPA приложений.',
            tags: ['Веб-разработка', 'JavaScript', 'CSS'],
        },
    };

    const post = posts[slug] || {
        title: 'Пост не найден',
        author: 'Неизвестный автор',
        date: 'Неизвестная дата',
        content: 'К сожалению, запрашиваемый пост не найден.',
        tags: [],
    };

    return (
        <div className='space-y-8'>
            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-bold text-foreground'>
                    {post.title}
                </h1>
                <p className='text-xl text-muted-foreground'>
                    Динамическая страница блога с параметром slug
                </p>
            </div>

            {/* Информация о роутинге */}
            <div className='bg-blue-50 border border-blue-200 rounded-lg shadow-md p-6 dark:bg-blue-900/20 dark:border-blue-700'>
                <h2 className='text-2xl font-semibold mb-4 text-foreground'>
                    Как работает роут блога?
                </h2>
                <div className='space-y-4 text-muted-foreground'>
                    <p>
                        Файл{' '}
                        <code className='bg-blue-100 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100'>
                            src/app/blog/[slug]/page.js
                        </code>{' '}
                        создает роуты вида{' '}
                        <code className='bg-blue-100 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100'>
                            /blog/my-post
                        </code>
                    </p>

                    <div className='bg-blue-100 border-l-4 border-blue-400 p-4 dark:bg-blue-800 dark:border-blue-500'>
                        <h3 className='font-semibold text-blue-800 dark:text-blue-200 mb-2'>
                            Параметр slug:
                        </h3>
                        <p className='text-blue-700 dark:text-blue-300'>
                            Значение{' '}
                            <code className='bg-blue-200 px-1 rounded dark:bg-blue-700 dark:text-blue-100'>
                                {slug}
                            </code>{' '}
                            передается в компонент через{' '}
                            <code className='bg-blue-200 px-1 rounded dark:bg-blue-700 dark:text-blue-100'>
                                params.slug
                            </code>
                        </p>
                    </div>
                </div>
            </div>

            {/* Содержимое поста */}
            <article className='bg-background border border-border rounded-lg shadow-md p-6'>
                <div className='mb-6'>
                    <div className='flex items-center justify-between mb-4'>
                        <div className='flex items-center space-x-4'>
                            <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center dark:bg-blue-800'>
                                <span className='text-blue-600 font-semibold dark:text-blue-300'>
                                    {post.author
                                        .split(' ')
                                        .map((n) => n[0])
                                        .join('')}
                                </span>
                            </div>
                            <div>
                                <p className='font-semibold text-foreground'>
                                    {post.author}
                                </p>
                                <p className='text-muted-foreground text-sm'>
                                    {post.date}
                                </p>
                            </div>
                        </div>
                        <div className='text-sm text-muted-foreground'>
                            Читать 5 мин
                        </div>
                    </div>

                    {post.tags.length > 0 && (
                        <div className='flex flex-wrap gap-2'>
                            {post.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className='px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm'>
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className='prose max-w-none'>
                    <p className='text-muted-foreground leading-relaxed text-lg'>
                        {post.content}
                    </p>

                    <p className='text-muted-foreground leading-relaxed mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>

                    <p className='text-muted-foreground leading-relaxed mt-4'>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </article>

            {/* Другие посты */}
            <div className='bg-background border border-border rounded-lg shadow-md p-6'>
                <h2 className='text-2xl font-semibold mb-4 text-foreground'>
                    Другие посты:
                </h2>
                <div className='grid md:grid-cols-2 gap-4'>
                    {Object.entries(posts).map(([postSlug, postData]) => (
                        <Link
                            key={postSlug}
                            href={`/blog/${postSlug}`}
                            className={`block p-4 border rounded-lg transition-colors ${
                                postSlug === slug
                                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                    : 'border-border hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                            }`}>
                            <h3 className='font-semibold text-foreground mb-2'>
                                {postData.title}
                            </h3>
                            <p className='text-muted-foreground text-sm mb-2'>
                                {postData.author} • {postData.date}
                            </p>
                            <div className='flex flex-wrap gap-1'>
                                {postData.tags.slice(0, 2).map((tag, index) => (
                                    <span
                                        key={index}
                                        className='px-2 py-1 bg-muted text-muted-foreground rounded text-xs'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* SEO и метаданные */}
            <div className='bg-green-50 border border-green-200 rounded-lg p-6 dark:bg-green-900/20 dark:border-green-700'>
                <h3 className='text-xl font-semibold mb-3 text-green-800 dark:text-green-200'>
                    SEO и метаданные
                </h3>
                <p className='text-green-700 dark:text-green-300 mb-3'>
                    Next.js автоматически генерирует метаданные для каждой
                    страницы, что улучшает SEO.
                </p>
                <div className='bg-green-100 p-3 rounded font-mono text-sm text-foreground border border-green-200 dark:bg-green-800 dark:border-green-600'>
                    <div>{'// Автоматически генерируется:'}</div>
                    <div>
                        &lt;title&gt;{post.title} - Next.js Демо&lt;/title&gt;
                    </div>
                    <div>
                        &lt;meta name=&quot;description&quot;
                        content=&quot;...&quot; /&gt;
                    </div>
                    <div>
                        &lt;link rel=&quot;canonical&quot; href=&quot;/blog/
                        {slug}&quot; /&gt;
                    </div>
                </div>
            </div>

            <div className='text-center space-x-4'>
                <Link
                    href='/'
                    className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'>
                    ← Вернуться на главную
                </Link>
                <Link
                    href='/blog/first-post'
                    className='inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors'>
                    Все посты
                </Link>
            </div>
        </div>
    );
}
