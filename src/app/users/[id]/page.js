import Link from 'next/link';
import Image from 'next/image';

// Генерируем статические параметры для демонстрации
export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }];
}

export default async function UserPage({ params }) {
    const { id } = await params;

    // Имитируем данные пользователя
    const userData = {
        id: id,
        name: `Пользователь ${id}`,
        email: `user${id}@example.com`,
        role: id % 2 === 0 ? 'Администратор' : 'Пользователь',
        joinDate: '2024-01-15',
        posts: parseInt(id) * 3,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=user${id}`,
    };

    return (
        <div className='space-y-8'>
            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-bold text-foreground'>
                    Профиль пользователя #{id}
                </h1>
                <p className='text-xl text-muted-foreground'>
                    Динамическая страница с параметром из URL
                </p>
            </div>

            {/* Информация о роутинге */}
            <div className='bg-blue-50 border border-blue-200 rounded-lg shadow-md p-6 dark:bg-blue-900/20 dark:border-blue-700'>
                <h2 className='text-2xl font-semibold mb-4 text-foreground'>
                    Как работает динамический роут?
                </h2>
                <div className='space-y-4 text-muted-foreground'>
                    <p>
                        Файл{' '}
                        <code className='bg-blue-100 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100'>
                            src/app/users/[id]/page.js
                        </code>{' '}
                        создает роуты вида{' '}
                        <code className='bg-blue-100 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100'>
                            /users/123
                        </code>
                    </p>

                    <div className='bg-blue-100 border-l-4 border-blue-400 p-4 dark:bg-blue-800 dark:border-blue-500'>
                        <h3 className='font-semibold text-blue-800 dark:text-blue-200 mb-2'>
                            Параметр из URL:
                        </h3>
                        <p className='text-blue-700 dark:text-blue-300'>
                            Значение{' '}
                            <code className='bg-blue-200 px-1 rounded dark:bg-blue-700 dark:text-blue-100'>
                                {id}
                            </code>{' '}
                            передается в компонент через{' '}
                            <code className='bg-blue-200 px-1 rounded dark:bg-blue-700 dark:text-blue-100'>
                                params.id
                            </code>
                        </p>
                    </div>
                </div>
            </div>

            {/* Профиль пользователя */}
            <div className='bg-background border border-border rounded-lg shadow-md p-6'>
                <div className='flex items-center space-x-6'>
                    <div className='w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full border-4 border-blue-200 flex items-center justify-center dark:from-blue-800 dark:to-purple-800 dark:border-blue-600'>
                        <span className='text-2xl font-bold text-blue-600 dark:text-blue-300'>
                            {userData.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                        </span>
                    </div>
                    <div className='flex-1'>
                        <h2 className='text-2xl font-bold text-foreground mb-2'>
                            {userData.name}
                        </h2>
                        <p className='text-muted-foreground mb-1'>
                            {userData.email}
                        </p>
                        <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                                userData.role === 'Администратор'
                                    ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
                                    : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                            }`}>
                            {userData.role}
                        </span>
                    </div>
                </div>

                <div className='grid md:grid-cols-3 gap-4 mt-6'>
                    <div className='bg-muted rounded-lg p-4 text-center'>
                        <div className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
                            {userData.posts}
                        </div>
                        <div className='text-muted-foreground'>Постов</div>
                    </div>
                    <div className='bg-muted rounded-lg p-4 text-center'>
                        <div className='text-2xl font-bold text-green-600 dark:text-green-400'>
                            {userData.id}
                        </div>
                        <div className='text-muted-foreground'>ID</div>
                    </div>
                    <div className='bg-muted rounded-lg p-4 text-center'>
                        <div className='text-2xl font-bold text-purple-600 dark:text-purple-400'>
                            {userData.joinDate}
                        </div>
                        <div className='text-muted-foreground'>
                            Дата регистрации
                        </div>
                    </div>
                </div>
            </div>

            {/* Другие пользователи */}
            <div className='bg-background border border-border rounded-lg shadow-md p-6'>
                <h2 className='text-2xl font-semibold mb-4 text-foreground'>
                    Другие пользователи:
                </h2>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                    {[1, 2, 3, 4, 5].map((userId) => (
                        <Link
                            key={userId}
                            href={`/users/${userId}`}
                            className={`block p-4 border rounded-lg text-center transition-colors ${
                                userId.toString() === id
                                    ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                                    : 'border-border hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 bg-background'
                            }`}>
                            <div className='font-semibold text-foreground'>
                                Пользователь {userId}
                            </div>
                            <div className='text-sm text-muted-foreground'>
                                ID: {userId}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* generateStaticParams объяснение */}
            <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-6 dark:bg-yellow-900/20 dark:border-yellow-700'>
                <h3 className='text-xl font-semibold mb-3 text-yellow-800 dark:text-yellow-200'>
                    generateStaticParams
                </h3>
                <p className='text-yellow-700 dark:text-yellow-300 mb-3'>
                    Эта функция предварительно генерирует статические страницы
                    для указанных параметров на этапе сборки, что улучшает
                    производительность.
                </p>
                <div className='bg-yellow-100 p-3 rounded font-mono text-sm text-foreground border border-yellow-200 dark:bg-yellow-800 dark:border-yellow-600'>
                    <div>
                        export async function generateStaticParams() {'{'}
                    </div>
                    <div className='ml-4'>return [</div>
                    <div className='ml-8'>{'{ id: "1" },'}</div>
                    <div className='ml-8'>{'{ id: "2" },'}</div>
                    <div className='ml-8'>{'{ id: "3" },'}</div>
                    <div className='ml-8'>{'{ id: "4" },'}</div>
                    <div className='ml-8'>{'{ id: "5" }'}</div>
                    <div className='ml-4'>];</div>
                    <div>{'}'}</div>
                </div>
            </div>

            <div className='text-center space-x-4'>
                <Link
                    href='/'
                    className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'>
                    ← Вернуться на главную
                </Link>
                <Link
                    href='/users/1'
                    className='inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors'>
                    Список пользователей
                </Link>
            </div>
        </div>
    );
}
