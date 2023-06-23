import {
  defineArrayMember,
  defineConfig,
  defineField,
  defineType,
} from "sanity"

export const FeaturedProductsAndCategoriesSchema = defineType({
  name: "featuredProductsAndCategories",
  title: "Featured",
  type: "document",
  fields: [
    defineField({
      name: "topCategories",
      title: "Top Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    }),
    defineField({
      name: "mostSellingProducts",
      title: "Most Selling Products",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    }),
    defineField({
      name: "bestDeals",
      title: "Beast Deals",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    }),
    defineField({
      name: "trendingProducts",
      title: "Treanding Products",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    }),
  ],
})
