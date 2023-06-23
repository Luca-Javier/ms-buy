import { BoxProps, InputProps } from "@chakra-ui/react"

export const searchInputStyles: InputProps = {
  type: "search",
  placeholder: "Search...",
  focusBorderColor: "brand.primaryLight",
  borderWidth: "1px",
  borderColor: "gray.400",
  w: { base: "100%", lg: "32rem" },
}

export const wrapperContainerStyles: BoxProps = {
  pos: "relative",
  w: { base: "100%", lg: "32rem" },
}
export const dropDownStyles: BoxProps = {
  pos: "absolute",
  padding: "0.5rem",
  shadow: "md",
  w: "100%",
  bg: "white",
  overflowY: "auto",
  maxH: "500px",
}
