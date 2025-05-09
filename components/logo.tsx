import React from 'react'
import { League_Spartan } from 'next/font/google'
import Link from 'next/link'

const leagueSpartan = League_Spartan({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-league-spartan',
})

export default function Logo() {
    const className = leagueSpartan.className
    const fontClass = `text-black tracking-tighter dark:text-white font-bold text-3xl ${className}`

    return (
        <Link className="flex items-center gap-1 shrink-0" href="/" aria-label="Home">
            <h1 className={fontClass}>misamo.</h1>
        </Link>
    )
}
