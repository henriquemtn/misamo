"use client"

import React from "react"

import { cn } from "@/registry/default/lib/utils"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs"

interface ComponentTabsProps {
  defaultValue?: string
  className?: string
  children: React.ReactNode
}

export default function ComponentTabs({
  defaultValue = "preview",
  className,
  children,
}: ComponentTabsProps) {
  return (
    <Tabs defaultValue={defaultValue} className={cn("w-full", className)}>
      <TabsList className="text-muted-foreground mb-3 inline-flex h-9 w-full items-center justify-start rounded-none border-b bg-transparent p-0">
        <TabsTrigger
          value="preview"
          className="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 cursor-pointer rounded-none border-b-2 border-b-transparent bg-transparent px-4 pt-2 pb-3 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
        >
          Preview
        </TabsTrigger>
        <TabsTrigger
          value="code"
          className="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 cursor-pointer rounded-none border-b-2 border-b-transparent bg-transparent px-4 pt-2 pb-3 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
        >
          Code
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  )
}
