import { title } from "process"
import {
  defineArrayMember,
  defineConfig,
  defineField,
  defineType,
} from "sanity"

export const ProductSchema = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of Product",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "galleryImage" }],
      options: {},
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "object",
      fields: [
        { name: "rate", title: "Rate", type: "number" },
        {
          name: "count",
          title: "Count",
          type: "number",
        },
      ],
    }),
  ],
})
