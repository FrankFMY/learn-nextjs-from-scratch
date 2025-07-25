'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь можно добавить логику отправки формы
        console.log('Форма отправлена:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className='space-y-8'>
            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-bold text-foreground'>Контакты</h1>
                <p className='text-xl text-muted-foreground'>
                    Страница с интерактивной формой - демонстрация клиентских
                    компонентов
                </p>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
                {/* Информация о контактах */}
                <div className='space-y-6'>
                    <div className='bg-blue-50 border border-blue-200 rounded-lg shadow-md p-6 dark:bg-blue-900/20 dark:border-blue-700'>
                        <h2 className='text-2xl font-semibold mb-4 text-foreground'>
                            Свяжитесь с нами
                        </h2>
                        <div className='space-y-4'>
                            <div className='flex items-center space-x-3'>
                                <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center dark:bg-blue-800'>
                                    📧
                                </div>
                                <div>
                                    <p className='font-semibold text-foreground'>
                                        Email
                                    </p>
                                    <p className='text-muted-foreground'>
                                        info@example.com
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center dark:bg-green-800'>
                                    📞
                                </div>
                                <div>
                                    <p className='font-semibold text-foreground'>
                                        Телефон
                                    </p>
                                    <p className='text-muted-foreground'>
                                        +7 (999) 123-45-67
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center dark:bg-purple-800'>
                                    📍
                                </div>
                                <div>
                                    <p className='font-semibold text-foreground'>
                                        Адрес
                                    </p>
                                    <p className='text-muted-foreground'>
                                        Москва, ул. Примерная, 123
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-green-50 border border-green-200 rounded-lg p-6 dark:bg-green-900/20 dark:border-green-700'>
                        <h3 className='text-xl font-semibold mb-3 text-green-800 dark:text-green-200'>
                            Клиентские компоненты
                        </h3>
                        <p className='text-green-700 dark:text-green-300 mb-3'>
                            Эта страница использует{' '}
                            <code className='bg-green-100 px-1 rounded dark:bg-green-800 dark:text-green-100'>
                                &apos;use client&apos;
                            </code>{' '}
                            директиву, что позволяет использовать React хуки и
                            интерактивность.
                        </p>
                        <ul className='text-green-700 dark:text-green-300 space-y-1 text-sm'>
                            <li>• useState для управления состоянием формы</li>
                            <li>• Обработка событий (onChange, onSubmit)</li>
                            <li>• Интерактивные элементы</li>
                        </ul>
                    </div>
                </div>

                {/* Форма */}
                <div className='bg-background border border-border rounded-lg shadow-md p-6'>
                    <h2 className='text-2xl font-semibold mb-4 text-foreground'>
                        Отправить сообщение
                    </h2>

                    {isSubmitted ? (
                        <div className='bg-green-50 border border-green-200 rounded-lg p-4 dark:bg-green-900/20 dark:border-green-700'>
                            <h3 className='text-green-800 dark:text-green-200 font-semibold mb-2'>
                                Сообщение отправлено!
                            </h3>
                            <p className='text-green-700 dark:text-green-300 mb-4'>
                                Спасибо за ваше сообщение. Мы свяжемся с вами в
                                ближайшее время.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors'>
                                Отправить еще одно
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className='space-y-4'>
                            <div>
                                <label
                                    htmlFor='name'
                                    className='block text-sm font-medium text-foreground mb-1'>
                                    Имя
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background text-foreground'
                                    placeholder='Введите ваше имя'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='email'
                                    className='block text-sm font-medium text-foreground mb-1'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background text-foreground'
                                    placeholder='your@email.com'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='message'
                                    className='block text-sm font-medium text-foreground mb-1'>
                                    Сообщение
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className='w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background text-foreground'
                                    placeholder='Введите ваше сообщение...'
                                />
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium'>
                                Отправить сообщение
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <div className='text-center'>
                <Link
                    href='/'
                    className='inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors'>
                    ← Вернуться на главную
                </Link>
            </div>
        </div>
    );
}
