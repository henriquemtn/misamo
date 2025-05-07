"use client"

import React, { useEffect, useState, JSX } from "react"
import { TabsContent } from "@/registry/default/ui/tabs"
import type { RegistryItem } from "shadcn/registry"
import { LoaderCircleIcon } from "lucide-react"

import { convertRegistryPaths } from "@/lib/utils"
import CodeBlock, { highlight } from "@/components/code-block"
import CopyButton from "@/components/copy-button"

interface ComponentCodeTabProps {
  component: RegistryItem
}

export default function ComponentCodeTab({ component }: ComponentCodeTabProps) {
  const [code, setCode] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [highlightedCode, setHighlightedCode] = useState<JSX.Element | null>(null)

  useEffect(() => {
    const handleEmptyCode = () => {
      setCode("")
      setHighlightedCode(null)
      setIsLoading(false)
    }

    const loadCode = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`/r/${component.name}.json`)
        if (!response.ok) {
          handleEmptyCode()
          return
        }

        const contentType = response.headers.get("content-type")
        if (!contentType || !contentType.includes("application/json")) {
          handleEmptyCode()
          return
        }

        const data = await response.json()
        const codeContent = convertRegistryPaths(data.files[0].content) || ""
        setCode(codeContent)

        // Pre-highlight the code
        const highlighted = await highlight(codeContent, "tsx")
        setHighlightedCode(highlighted)
        setIsLoading(false)
      } catch (error) {
        console.error("Failed to load code:", error)
        handleEmptyCode()
      }
    }

    loadCode()
  }, [component.name])

  return (
    <TabsContent value="code" className="mt-0 border-0 p-0">
      <div className="relative border rounded-md">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <LoaderCircleIcon className="animate-spin text-muted-foreground" size={24} />
          </div>
        ) : code === "" ? (
          <p className="text-muted-foreground text-sm">
            No code available. If you think this is an error, please{" "}
            <a
              href="https://github.com/origin-space/originui/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium underline hover:no-underline"
            >
              open an issue
            </a>.
          </p>
        ) : (
          <div className="relative">
            <CodeBlock
              code={code}
              lang="tsx"
              preHighlighted={highlightedCode}
            />
            <CopyButton componentSource={code} />
          </div>
        )}
      </div>
    </TabsContent>
  )
}