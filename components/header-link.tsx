import Link from "next/link"
import { RiArrowRightUpLine } from "@remixicon/react"

import { cn } from "@/registry/default/lib/utils"

export default function HeaderLink({
  text,
  href,
  external = false,
  className,
  isNew = false,
  comingSoon = false,
}: {
  text: string
  href: string
  external?: boolean
  className?: string
  comingSoon?: boolean
  isNew?: boolean
}) {
  return (
    <div className="flex items-start gap-1.5">
      {external ? (
        <a
          className={cn(
            "inline-flex gap-0.5 text-sm hover:underline",
            className
          )}
          href={href}
          target="_blank"
        >
          {text}
          <span className="hidden sm:inline">
            {" "}
            <RiArrowRightUpLine
              className="text-muted-foreground/80"
              size={14}
              aria-hidden="true"
            />
          </span>
        </a>
      ) : (
        <>
          <Link
            href={href}
            className={cn(
              "inline-flex gap-0.5 text-sm hover:underline",
              className
            )}
          >
            {text}
          </Link>
          {isNew && (
            <div className="-ml-0.5 inline-flex h-5 items-center rounded-full bg-[#FFBD7A] px-1 py-0.5 text-[11px] font-semibold">
              Novidade!
            </div>
          )}
          {comingSoon && (
            <div className="ml-0.5 inline-flex h-5 items-center rounded-full bg-[#FFBD7A] px-2 py-0.5 text-[11px] font-semibold">
              Coming Soon
            </div>
          )}
        </>
      )}
    </div>
  )
}
