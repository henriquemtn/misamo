import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { categories, getCategory } from "@/config/components"
import { getComponentsByNames } from "@/lib/utils"
import PageGrid from "@/components/page-grid"
import PageHeader from "@/components/page-header"
import ComponentCard from "@/components/component-card"
import Cta from "@/components/cta"

type Props = {
  params: { category: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory(params.category)
  if (!category) return {}

  const componentCount = category.components.length
  
  // Custom title and description for event-calendar
  if (category.slug === "event-calendar") {
    return {
      title: "Event calendar components built with React and Tailwind CSS - Origin UI",
      description: "Event calendar components built with React and Tailwind CSS. Originally built in v0 and currently in early alpha stage.",
    }
  }

  return {
    title: `${category.name} components built with React and Tailwind CSS - Origin UI`,
    description: `Explore ${componentCount} beautiful and accessible ${category.name.toLowerCase()} components built with React and Tailwind CSS.`,
  }
}

export async function generateStaticParams() {
  return categories.map(category => ({
    category: category.slug,
  }))
}

export default function Page({ params }: Props) {
  const category = getCategory(params.category)
  if (!category) notFound()

  const components = getComponentsByNames(
    category.components.map((item) => item.name)
  )
  
  return (
    <>
      <PageHeader title={`${category.name} (${components.length})`}>
        Browse all {category.name.toLowerCase()} components.
      </PageHeader>
      <PageGrid>
        {components.map(component => (
          <Link 
            key={component.name} 
            href={`/components/${category.slug}/${component.name}`}
            className="transition-transform hover:scale-[1.02]"
          >
           
          </Link>
        ))}
      </PageGrid>
      <Cta />
    </>
  )
}