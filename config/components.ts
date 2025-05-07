export interface ComponentCategory {
  slug: string
  name: string
  components: { name: string }[]
  isNew?: boolean
}

export const categories: ComponentCategory[] = [
  {
    slug: "components",
    name: "Components",
    components: [{ name: "marquee" }],
  },
]

export function getCategory(slug: string): ComponentCategory | undefined {
  return categories.find((category) => category.slug === slug)
}
