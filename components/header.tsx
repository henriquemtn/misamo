"use client"

import Link from "next/link"
import { RiGithubFill, RiMenu2Line, RiTwitterXFill } from "@remixicon/react"

import { useIsMobile } from "@/hooks/use-mobile"
import HeaderLink from "@/components/header-link"
import ThemeToggle from "@/components/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

const links = [
  { text: "Components", href: "/components/marquee" },
  { text: "Templates", href: "/templates", comingSoon: true },
]

export default function Header() {
  const isMobile = useIsMobile()

  return (
    <header className="before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] relative before:absolute before:-inset-x-32 before:bottom-0 before:h-px">
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-3">
        <div className="flex items-center gap-3 md:gap-10">
          <Link className="shrink-0" href="/" aria-label="Home">
            <span className="sr-only">Misamo UI</span>
            <h1 className="text-xl font-bold">Misamo</h1>
          </Link>

          <div className="flex items-center gap-4 md:gap-10">
            {links.map((link) => (
              <HeaderLink
                key={link.href}
                text={link.text}
                href={link.href}
                comingSoon={link.comingSoon}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center">
          {!isMobile && (
            <>
              <div
                className="bg-input ms-4 me-4 h-5 w-px md:ms-10"
                aria-hidden="true"
              ></div>
            </>
          )}
          <div className="flex items-center gap-1">
            <a
              className="text-muted-foreground hover:text-foreground/80 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex size-9 items-center justify-center rounded outline-none focus-visible:ring-[3px]"
              href="https://github.com/origin-space/originui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <RiGithubFill size={20} />
            </a>
            <ThemeToggle />
            {isMobile && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-muted-foreground hover:text-foreground/80 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex size-9 items-center justify-center rounded outline-none focus-visible:ring-[3px]">
                    <RiMenu2Line className="size-5" size={20} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {links.map((link) => (
                    <DropdownMenuItem
                      className="cursor-pointer focus:bg-transparent focus:underline"
                      key={link.href}
                      asChild
                    >
                      <HeaderLink text={link.text} href={link.href} />
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
