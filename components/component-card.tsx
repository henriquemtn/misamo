"use client"

import React from "react"
import type { RegistryItem } from "shadcn/registry"
import { cn } from "@/registry/default/lib/utils"
import { TabsContent } from "@/registry/default/ui/tabs"
import ComponentTabs from "@/components/component-tabs"
import ComponentCodeTab from "@/components/component-code-tab"
import ComponentLoader from "./component-loader-server"
import { Button } from "./ui/button"
import { RefreshCcw } from "lucide-react"
import OpenInV0 from "./open-in-v0"

interface ComponentCardProps {
  isSearchPage?: boolean
  previewContent: React.ReactNode
  component: RegistryItem
  className?: string
}

export default function ComponentCard({
  isSearchPage = false,
  previewContent,
  component,
  className,
}: ComponentCardProps) {
  const getColSpanClasses = (includeStart = false) => {
    const baseClasses =
      component.meta?.colSpan === 2
        ? "col-span-12 sm:col-span-6 lg:col-span-6"
        : component.meta?.colSpan === 3
          ? "col-span-12 sm:col-span-12 lg:col-span-12"
          : "col-span-12 sm:col-span-6 lg:col-span-4"

    const startClasses =
      includeStart && component.meta?.colSpan !== 3
        ? component.meta?.colSpan === 2
          ? "sm:col-start-4 lg:col-start-4"
          : "sm:col-start-4 lg:col-start-5"
        : ""

    return cn(baseClasses, startClasses)
  }

  const styleClasses =
    component.meta?.style === 1
      ? "flex justify-center items-center"
      : component.meta?.style === 2
        ? "text-center"
        : ""

  return (
    <div
      className={cn(
        "group/item relative has-[[data-comp-loading=true]]:border-none",
        isSearchPage
          ? "col-span-12 grid grid-cols-12"
          : cn(getColSpanClasses(), styleClasses),
        className
      )}
      data-slot={component.name}
    >
      <ComponentTabs>
        <TabsContent value="preview" className="mt-0 border-0 p-0">
          <div className="relative">

            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <OpenInV0
                componentSource={`https://misamo.io/r/${component.name}.json`}
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => { }}
                className="text-muted-foreground/80 hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100"
                title="Refresh preview"
              >
                <RefreshCcw size={16} />
                <span className="sr-only">Refresh preview</span>
              </Button>
            </div>

            <div className={cn(
              "flex min-h-[350px] w-full items-center justify-center border rounded-md p-10",
              isSearchPage
                ? "col-span-12 grid grid-cols-12"
                : styleClasses
            )}>
              {isSearchPage ? (
                <div className={cn(getColSpanClasses(true), styleClasses)}>
                  {previewContent}
                </div>
              ) : (
                previewContent
              )}
            </div>
          </div>
        </TabsContent>
        <ComponentCodeTab component={component} />
      </ComponentTabs>
    </div>
  )
}