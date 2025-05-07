import React from "react"
import Link from "next/link"

import { cn } from "@/registry/default/lib/utils"

interface BreadcrumbItem {
  label: string
  href: string
}

interface PageHeaderProps {
  title: string
  breadcrumbs?: BreadcrumbItem[]
  className?: string
  children: React.ReactNode
}

export default function PageHeader({
  title,
  breadcrumbs,
  className,
  children,
}: PageHeaderProps) {
  return (
    <div className={cn("mb-16 flex flex-col text-start", className)}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="text-muted-foreground mb-4 flex items-center space-x-1 text-sm">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={item.href}>
              {index > 0 && (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                >
                  <path
                    d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {index === breadcrumbs.length - 1 ? (
                <div className="text-foreground font-medium">
                  {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-foreground truncate"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
      <h1 className="font-heading text-foreground mb-3 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h1>
      <p className="text-muted-foreground max-w-3xl text-lg">{children}</p>
    </div>
  )
}
