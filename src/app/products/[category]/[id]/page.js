import Link from 'next/link';

// Генерируем статические параметры для демонстрации
export async function generateStaticParams() {
    return [
        { category: 'electronics', id: '1' },
        { category: 'electronics', id: '2' },
        { category: 'clothing', id: '1' },
        { category: 'clothing', id: '2' },
        { category: 'books', id: '1' },
        { category: 'books', id: '2' },
    ];
}

export default async function ProductPage({ params }) {
    const { category, id } = await params;

    // Имитируем данные товаров
    const products = {
        electronics: {
            name: 'Электроника',
            products: {
                1: {
                    name: 'Смартфон iPhone 15',
                    price: '89,999 ₽',
                    description:
                        'Новейший смартфон с мощным процессором и отличной камерой.',
                    features: [
                        '6.1" дисплей',
                        'A17 Pro чип',
                        '48MP камера',
                        'USB-C',
                    ],
                },
                2: {
                    name: 'Ноутбук MacBook Air',
                    price: '129,999 ₽',
                    description:
                        'Легкий и мощный ноутбук для работы и творчества.',
                    features: [
                        '13.6" дисплей',
                        'M2 чип',
                        '18 часов работы',
                        'Retina экран',
                    ],
                },
            },
        },
        clothing: {
            name: 'Одежда',
            products: {
                1: {
                    name: 'Джинсы классические',
                    price: '3,999 ₽',
                    description: 'Удобные джинсы из качественного денима.',
                    features: [
                        '100% хлопок',
                        'Классический крой',
                        '5 карманов',
                        'Размеры 28-36',
                    ],
                },
                2: {
                    name: 'Футболка хлопковая',
                    price: '1,299 ₽',
                    description: 'Мягкая футболка из натурального хлопка.',
                    features: [
                        '100% хлопок',
                        'Дышащая ткань',
                        'Размеры XS-XXL',
                        'Множество цветов',
                    ],
                },
            },
        },
        books: {
            name: 'Книги',
            products: {
                1: {
                    name: 'React: Полное руководство',
                    price: '2,499 ₽',
                    description:
                        'Подробное руководство по React от основ до продвинутых тем.',
                    features: [
                        '500 страниц',
                        'Практические примеры',
                        'Твердый переплет',
                        'Цветные иллюстрации',
                    ],
                },
                2: {
                    name: 'Next.js в действии',
                    price: '1,899 ₽',
                    description:
                        'Практическое руководство по созданию приложений на Next.js.',
                    features: [
                        '300 страниц',
                        'Реальные проекты',
                        'Мягкий переплет',
                        'Код на GitHub',
                    ],
                },
            },
        },
    };

    const categoryData = products[category];
    const product = categoryData?.products[id];

    if (!categoryData || !product) {
        return (
            <div className='space-y-8'>
                <div className='text-center space-y-4'>
                    <h1 className='text-4xl font-bold text-foreground'>
                        Товар не найден
                    </h1>
                    <p className='text-xl text-muted-foreground'>
                        Категория: {category}, ID: {id}
                    </p>
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

    return (
        <div className='space-y-8'>
            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-bold text-foreground'>
                    {product.name}
                </h1>
                <p className='text-xl text-muted-foreground'>
                    Вложенный динамический роут: /products/{category}/{id}
                </p>
            </div>

            {/* Информация о роутинге */}
            <div className='bg-blue-50 border border-blue-200 rounded-lg shadow-md p-6 dark:bg-blue-900/20 dark:border-blue-700'>
                <h2 className='text-2xl font-semibold mb-4 text-foreground'>
                    Как работает вложенный роут?
                </h2>
                <div className='space-y-4 text-muted-foreground'>
                    <p>
                        Файл{' '}
                        <code className='bg-blue-100 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100'>
                            src/app/products/[category]/[id]/page.js
                        </code>{' '}
                        создает роуты вида{' '}
                        <code className='bg-blue-100 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100'>
                            /products/electronics/1
                        </code>
                    </p>

                    <div className='bg-blue-100 border-l-4 border-blue-400 p-4 dark:bg-blue-800 dark:border-blue-500'>
                        <h3 className='font-semibold text-blue-800 dark:text-blue-200 mb-2'>
                            Параметры из URL:
                        </h3>
                        <p className='text-blue-700 dark:text-blue-300'>
                            Категория:{' '}
                            <code className='bg-blue-200 px-1 rounded dark:bg-blue-700 dark:text-blue-100'>
                                {category}
                            </code>{' '}
                            | ID:{' '}
                            <code className='bg-blue-200 px-1 rounded dark:bg-blue-700 dark:text-blue-100'>
                                {id}
                            </code>
                        </p>
                        <p className='text-blue-700 dark:text-blue-300 mt-2'>
                            Передаются через{' '}
                            <code className='bg-blue-200 px-1 rounded dark:bg-blue-700 dark:text-blue-100'>
                                params.category
                            </code>{' '}
                            и
                            <code className='bg-blue-200 px-1 rounded dark:bg-blue-700 dark:text-blue-100'>
                                {' '}
                                params.id
                            </code>
                        </p>
                    </div>
                </div>
            </div>

            {/* Информация о товаре */}
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='bg-background border border-border rounded-lg shadow-md p-6'>
                    <div className='w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-6 dark:from-blue-800 dark:to-purple-800'>
                        <span className='text-4xl'>📦</span>
                    </div>

                    <h2 className='text-2xl font-bold text-foreground mb-2'>
                        {product.name}
                    </h2>
                    <p className='text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4'>
                        {product.price}
                    </p>
                    <p className='text-muted-foreground mb-6'>
                        {product.description}
                    </p>

                    <button className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium'>
                        Добавить в корзину
                    </button>
                </div>

                <div className='space-y-6'>
                    <div className='bg-background border border-border rounded-lg shadow-md p-6'>
                        <h3 className='text-xl font-semibold mb-4 text-foreground'>
                            Характеристики
                        </h3>
                        <ul className='space-y-2'>
                            {product.features.map((feature, index) => (
                                <li
                                    key={index}
                                    className='flex items-center space-x-2'>
                                    <span className='text-green-500'>✓</span>
                                    <span className='text-muted-foreground'>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='bg-background border border-border rounded-lg shadow-md p-6'>
                        <h3 className='text-xl font-semibold mb-4 text-foreground'>
                            Информация о роуте
                        </h3>
                        <div className='space-y-2 text-sm'>
                            <div className='flex justify-between'>
                                <span className='text-muted-foreground'>
                                    Категория:
                                </span>
                                <span className='font-mono bg-muted px-2 py-1 rounded text-foreground'>
                                    {category}
                                </span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='text-muted-foreground'>
                                    ID товара:
                                </span>
                                <span className='font-mono bg-muted px-2 py-1 rounded text-foreground'>
                                    {id}
                                </span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='text-muted-foreground'>
                                    Полный URL:
                                </span>
                                <span className='font-mono bg-muted px-2 py-1 rounded text-foreground'>
                                    /products/{category}/{id}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Другие товары в категории */}
            <div className='bg-background border border-border rounded-lg shadow-md p-6'>
                <h2 className='text-2xl font-semibold mb-4 text-foreground'>
                    Другие товары в категории &quot;{categoryData.name}&quot;:
                </h2>
                <div className='grid md:grid-cols-2 gap-4'>
                    {Object.entries(categoryData.products).map(
                        ([productId, productData]) => (
                            <Link
                                key={productId}
                                href={`/products/${category}/${productId}`}
                                className={`block p-4 border rounded-lg transition-colors ${
                                    productId === id
                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                        : 'border-border hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                                }`}>
                                <h3 className='font-semibold text-foreground mb-2'>
                                    {productData.name}
                                </h3>
                                <p className='text-blue-600 dark:text-blue-400 font-bold mb-2'>
                                    {productData.price}
                                </p>
                                <p className='text-muted-foreground text-sm'>
                                    {productData.description}
                                </p>
                            </Link>
                        )
                    )}
                </div>
            </div>

            {/* Другие категории */}
            <div className='bg-background border border-border rounded-lg shadow-md p-6'>
                <h2 className='text-2xl font-semibold mb-4 text-foreground'>
                    Все категории:
                </h2>
                <div className='grid md:grid-cols-3 gap-4'>
                    {Object.entries(products).map(([catSlug, catData]) => (
                        <Link
                            key={catSlug}
                            href={`/products/${catSlug}/1`}
                            className={`block p-4 border rounded-lg text-center transition-colors ${
                                catSlug === category
                                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                                    : 'border-border hover:border-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                            }`}>
                            <h3 className='font-semibold text-foreground mb-2'>
                                {catData.name}
                            </h3>
                            <p className='text-muted-foreground text-sm'>
                                {Object.keys(catData.products).length} товаров
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

            <div className='text-center space-x-4'>
                <Link
                    href='/'
                    className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'>
                    ← Вернуться на главную
                </Link>
                <Link
                    href='/products/electronics/1'
                    className='inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors'>
                    Все товары
                </Link>
            </div>
        </div>
    );
}
