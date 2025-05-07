import React from 'react'
import Link from 'next/link'
import { categories } from "@/config/components"

export default function Sidebar() {
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
                                    {category.components.map((component) => (
                                        <Link
                                            key={component.name}
                                            href={`/components/${category.slug}/${component.name}`}
                                            className="group relative flex h-8 w-full items-center justify-between rounded-lg px-2 font-normal text-foreground transition-transform duration-200 hover:translate-x-px hover:text-accent-foreground"
                                        >
                                            <span className="relative shrink-0">{component.name}</span>
                                            <div></div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </aside>
    )
}