import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { categories, getCategory } from "@/config/components"
import { getComponentsByNames } from "@/lib/utils"
import ComponentCard from "@/components/component-card"
import ComponentDetails from "@/components/component-details"
import ComponentLoader from "@/components/component-loader-server"
import Cta from "@/components/cta"
import PageGrid from "@/components/page-grid"
import PageHeader from "@/components/page-header"

type Props = {
  params: { category: string; component: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categorySlug = (await params).category
  const componentName = (await params).component

  const category = getCategory(categorySlug)
  if (!category) return {}

  const components = getComponentsByNames(
    category.components.map((item) => item.name)
  )

  const component = components.find(comp => comp.name === componentName)
  if (!component) return {}

  // Custom title and description for event-calendar
  if (category.slug === "event-calendar") {
    return {
      title: "Event calendar component built with React and Tailwind CSS - Origin UI",
      description: "An event calendar component built with React and Tailwind CSS. Originally built in v0 and currently in early alpha stage.",
    }
  }

  return {
    title: `${component.name} component built with React and Tailwind CSS - Origin UI`,
    description: `A beautiful and accessible ${component.name.toLowerCase()} component built with React and Tailwind CSS.`,
  }
}

export async function generateStaticParams() {
  const params = []

  // Generate params for each component in each category
  for (const category of categories) {
    for (const component of category.components) {
      params.push({
        category: category.slug,
        component: component.name,
      })
    }
  }

  return params
}

export default async function Page({ params }: Props) {
  const categorySlug = (await params).category
  const componentName = (await params).component

  const category = getCategory(categorySlug)
  if (!category) notFound()

  const components = getComponentsByNames(
    category.components.map((item) => item.name)
  )

  const component = components.find(comp => comp.name === componentName)
  if (!component) notFound()

  // Determine description based on component/category
  const getDescriptionText = () => {
    if (category.slug === "event-calendar") {
      return (
        <span className="block text-balance">
          An event calendar component built with React and Tailwind CSS.
          Originally built in{" "}
          <a
            href="https://v0.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            v0
          </a>{" "}
          and currently in early alpha stage.
        </span>
      )
    }

    return `A ${component.name.toLowerCase()} component built with React and Tailwind CSS.`
  }

  return (
    <div className="flex flex-col gap-6 py-9">
      <PageHeader
        title={component.name}
        breadcrumbs={[
          { label: category.name, href: `#` },
          { label: component.name, href: `/${category.slug}/${component.name}` },
        ]}
      >
        {getDescriptionText()}
      </PageHeader>
      <ComponentCard
        component={component}
        previewContent={<ComponentLoader component={component} />}
      />
    </div>
  )
}