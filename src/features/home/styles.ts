import {
  BoxProps,
  FlexProps,
  HeadingProps,
  LinkProps,
  TextProps,
} from "@chakra-ui/react"

export const bannerStyles: FlexProps = {
  justify: "center",
  align: "center",
  gap: "2",
  direction: { base: "column", lg: "row" },
  w: { base: "100%", lg: "90%" },
  mx: "auto",
  p: "2rem",
}

export const bannerHeadingStyles: HeadingProps = {
  as: "h1",
  size: { base: "xl", lg: "3xl" },
  color: "brand.primary",
}

export const bannerDescriptionStyles: TextProps = {
  fontSize: { base: "md", lg: "lg" },
  py: "1rem",
  maxW: "600px",
}

export const bannerButtonStyles: LinkProps = {
  rounded: "full",
  minW: "10rem",
  bgColor: "brand.primary",
  color: "white",
  _hover: { bgColor: "brand.primaryDark" },
  py: ".5rem",
  px: "2rem",
}

export const bannerImageStyles: BoxProps = {
  as: "img",
  mx: "2rem",
  boxSize: { base: "300px", lg: "600px" },
  bg: "center / cover no-repeat url(mockup.svg)",
}
