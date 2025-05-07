"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { categories } from "@/config/components"
import { cn } from "@/registry/default/lib/utils"

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
            <div className="no-scrollbar h-full overflow-auto py-6 pr-4 lg:py-8">
                <div className="flex flex-col gap-6">
                    {categories
                        .sort((a, b) => {
                            if (a.isNew && !b.isNew) return -1
                            if (!a.isNew && b.isNew) return 1
                            return a.name.localeCompare(b.name)
                        })
                        .map((category) => (
                            <div key={category.slug} className="flex flex-col gap-1">
                                <h4 className="rounded-md px-2 py-1 text-sm font-semibold">
                                    {category.name}
                                    {category.isNew && (
                                        <span className="ml-2 rounded-md bg-[#FFBD7A] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline">
                                            New
                                        </span>
                                    )}
                                </h4>
                                <div className="relative grid grid-flow-row auto-rows-max gap-0.5 text-sm">
                                    {category.components.map((component) => {
                                        // Check if current path matches this component's path
                                        const href = `/${category.slug}/${component.name}`;
                                        const isActive = pathname === href;

                                        return (
                                            <Link
                                                key={component.name}
                                                href={href}
                                                className={cn(
                                                    "group relative flex h-8 w-full items-center justify-between rounded-lg px-2 font-normal transition-transform duration-200 hover:translate-x-px hover:text-accent-foreground",
                                                    isActive
                                                        ? "bg-accent font-medium text-accent-foreground"
                                                        : "text-foreground"
                                                )}
                                            >
                                                <span className="relative shrink-0">
                                                    {component.name.charAt(0).toUpperCase() + component.name.slice(1)}
                                                </span>
                                                {component.isNew && (
                                                    <span className="ml-2 rounded-md bg-[#FFBD7A] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline">
                                                        New
                                                    </span>
                                                )}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </aside>
    )
}