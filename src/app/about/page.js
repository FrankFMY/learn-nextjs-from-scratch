import Link from 'next/link';

export default function About() {
    return (
        <div className='space-y-8'>
            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-bold text-foreground'>О нас</h1>
                <p className='text-xl text-muted-foreground'>
                    Это статическая страница - она генерируется на этапе сборки
                </p>
            </div>

            <div className='bg-blue-50 border border-blue-200 rounded-lg shadow-md p-6 dark:bg-blue-900/20 dark:border-blue-700'>
                <h2 className='text-2xl font-semibold mb-4 text-foreground'>
                    Как создается эта страница?
                </h2>
                <div className='space-y-4 text-muted-foreground'>
                    <p>
                        Файл{' '}
                        <code className='bg-blue-100 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100'>
                            src/app/about/page.js
                        </code>{' '}
                        автоматически создает роут{' '}
                        <code className='bg-blue-100 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100'>
                            /about
                        </code>
                    </p>

                    <div className='bg-blue-100 border-l-4 border-blue-400 p-4 dark:bg-blue-800 dark:border-blue-500'>
                        <h3 className='font-semibold text-blue-800 dark:text-blue-200 mb-2'>
                            App Router принцип:
                        </h3>
                        <p className='text-blue-700 dark:text-blue-300'>
                            Структура папок = структура URL. Каждая папка с{' '}
                            <code className='bg-blue-200 px-1 rounded dark:bg-blue-700 dark:text-blue-100'>
                                page.js
                            </code>
                            становится роутом в вашем приложении.
                        </p>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
                <div className='bg-green-50 border border-green-200 rounded-lg p-6 dark:bg-green-900/20 dark:border-green-700'>
                    <h3 className='text-xl font-semibold mb-3 text-green-800 dark:text-green-200'>
                        Статические страницы
                    </h3>
                    <ul className='space-y-2 text-green-700 dark:text-green-300'>
                        <li>• Генерируются на этапе сборки</li>
                        <li>• Максимальная производительность</li>
                        <li>• Отлично для SEO</li>
                        <li>• Кэшируются CDN</li>
                    </ul>
                </div>

                <div className='bg-purple-50 border border-purple-200 rounded-lg p-6 dark:bg-purple-900/20 dark:border-purple-700'>
                    <h3 className='text-xl font-semibold mb-3 text-purple-800 dark:text-purple-200'>
                        Динамические страницы
                    </h3>
                    <ul className='space-y-2 text-purple-700 dark:text-purple-300'>
                        <li>• Генерируются по запросу</li>
                        <li>• Подходят для персонального контента</li>
                        <li>• Могут использовать данные из API</li>
                        <li>• Поддерживают серверный рендеринг</li>
                    </ul>
                </div>
            </div>

            <div className='bg-yellow-50 border border-yellow-200 rounded-lg shadow-md p-6 dark:bg-yellow-900/20 dark:border-yellow-700'>
                <h2 className='text-2xl font-semibold mb-4 text-foreground'>
                    Примеры файловой структуры:
                </h2>
                <div className='bg-yellow-100 p-4 rounded-lg font-mono text-sm overflow-x-auto text-foreground border border-yellow-200 dark:bg-yellow-800 dark:border-yellow-600'>
                    <div>src/app/</div>
                    <div>├── page.js → /</div>
                    <div>├── about/</div>
                    <div>│ └── page.js → /about</div>
                    <div>├── users/</div>
                    <div>│ └── [id]/</div>
                    <div>│ └── page.js → /users/123</div>
                    <div>└── blog/</div>
                    <div> └── [slug]/</div>
                    <div> └── page.js → /blog/my-post</div>
                </div>
            </div>

            <div className='text-center'>
                <Link
                    href='/'
                    className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'>
                    ← Вернуться на главную
                </Link>
            </div>
        </div>
    );
}
