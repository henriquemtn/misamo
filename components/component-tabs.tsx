"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs"
import { cn } from "@/registry/default/lib/utils"

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
    <Tabs 
      defaultValue={defaultValue} 
      className={cn("w-full", className)}
    >
      <TabsList className="mb-3 text-muted-foreground inline-flex h-9 items-center w-full justify-start rounded-none border-b bg-transparent p-0">
        <TabsTrigger 
          value="preview" 
          className="cursor-pointer relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
        >
          Preview
        </TabsTrigger>
        <TabsTrigger 
          value="code" 
          className="cursor-pointer relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
        >
          Code
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  )
}