export interface ComponentCategory {
  slug: string
  name: string
  components: { name: string, isNew?: boolean }[]
  isNew?: boolean
}

export const categories: ComponentCategory[] = [
  {
    slug: "components",
    name: "Components",
    components: [{ name: "marquee", isNew: true }],
  },
]

export function getCategory(slug: string): ComponentCategory | undefined {
  return categories.find((category) => category.slug === slug)
}
