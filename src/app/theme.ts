import { extendTheme } from "@chakra-ui/react"
import { buildLegacyTheme } from "sanity"

export const colors = {
  brand: {
    primary: "hsl(337,79%,60%)",
    primaryLight: "hsl(337,79%,70%)",
    primaryDark: "hsl(337,79%,50%)",
  },
}

export const theme = extendTheme({ colors })

export const sanityTheme = buildLegacyTheme({
  "--black": "#1a1a1a",
  "--gray": "#666666",
  "--white": "#ffffff",
  "--focus-color": colors.brand.primaryDark,
  "--brand-primary": colors.brand.primary,
  "--component-bg": "#ffffff",
  "--component-text-color": "#000000",
  "--default-button-color": "#666666",
  "--default-button-primary-color": colors.brand.primary,
  "--state-info-color": colors.brand.primaryLight,
})
