import {
  defineArrayMember,
  defineConfig,
  defineField,
  defineType,
} from "sanity"

export const GallerySchema = defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "image",
  fields: [
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      options: {
        // isHightLight: true,
      },
    }),
  ],
})
