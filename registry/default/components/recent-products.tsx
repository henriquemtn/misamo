"use client"

import React, { useState } from 'react'
import * as motion from 'motion/react-client'
import { Button } from '@/components/ui/button';

const products = [
    {
        id: 1,
        name: 'Comfort Basic Linen Shirt with Collar',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Comfort Basic Linen Shirt with Collar",
        originalPrice: '$ 179.90',
        currentPrice: '$ 119.90',
        discount: '33% Off',
        installments: '6x $ 19.98',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Slim Fit Pima Cotton Shirt with Band Collar',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Slim Fit Pima Cotton Shirt with Band Collar",
        originalPrice: '$ 159.90',
        currentPrice: '$ 99.90',
        discount: '38% Off',
        color: 'White',
    },
    {
        id: 3,
        name: 'Regular Fit Linen and Cotton Shirt with Short Sleeves',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Regular Fit Linen and Cotton Shirt with Short Sleeves",
        originalPrice: '$ 149.90',
        currentPrice: '$ 89.90',
        discount: '40% Off',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Long Sleeve Oxford Cotton Shirt',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Long Sleeve Oxford Cotton Shirt",
        originalPrice: '$ 199.90',
        currentPrice: '$ 129.90',
        discount: '35% Off',
        color: 'Blue',
    },
]

export default function Component() {
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
    const [wishlist, setWishlist] = useState<number[]>([]);

    const toggleWishlist = (id: number, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (wishlist.includes(id)) {
            setWishlist(wishlist.filter(item => item !== id));
        } else {
            setWishlist([...wishlist, id]);
        }
    };

    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Recents</h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        className="group relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        onMouseEnter={() => setHoveredProduct(product.id)}
                        onMouseLeave={() => setHoveredProduct(null)}
                    >
                        <a href={product.href} className="block relative">
                            {/* Wishlist button */}
                            <Button
                                size="icon"
                                variant="ghost"
                                onClick={(e) => toggleWishlist(product.id, e)}
                                className="absolute right-2 top-2 z-10 p-1 rounded-full bg-white/80 shadow-sm hover:bg-white"
                            >
                                {wishlist.includes(product.id) ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500">
                                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                )}
                            </Button>

                            {/* Product Image */}
                            <div className="overflow-hidden rounded-md bg-gray-100">
                                <motion.img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full aspect-square object-cover object-center"
                                    initial={{ scale: 1 }}
                                    animate={{ scale: hoveredProduct === product.id ? 1.05 : 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </a>

                        {/* Product Info */}
                        <div className="mt-4">
                            <h3 className="text-sm text-gray-700 font-medium line-clamp-2" title={product.name}>
                                {product.name}
                            </h3>
                            <div className="mt-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500 line-through">{product.originalPrice}</span>
                                    <span className="text-base font-semibold text-gray-900">{product.currentPrice}</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">{product.installments}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}