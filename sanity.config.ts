import { visionTool } from "@sanity/vision"
import { Config, StudioNavbar } from "sanity"
import { deskTool } from "sanity/desk"
import { schemaTypes } from "./schemas"
import { sanityTheme } from "@/app/theme"

export const config: Config = {
  name: "default",
  title: "ms-buy",
  projectId: "ew7lkf6o",
  dataset: "production",
  basePath: "/studio",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  theme: sanityTheme,

  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
}
