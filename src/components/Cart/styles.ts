import { ButtonProps, FlexProps, InputProps, LinkProps } from "@chakra-ui/react"

export const cartItemFlexContainerStyles: FlexProps = {
  wrap: { base: "nowrap", lg: "wrap" },
  p: "1rem",
  gap: "1rem",
  align: "center",
  borderBottom: "1px",
  borderColor: "gray.200",
}

export const cartItemInputStyles: InputProps = {
  minW: "3rem",
  textAlign: "center",
  isReadOnly: true,
}

export const trashButtonStyles: ButtonProps = {
  color: "brand.primary",
  bgColor: "transparent",
  _hover: { bgColor: "transparent" },
}

export const notificationItemsCount: FlexProps = {
  pos: "absolute",
  top: 0,
  right: 0,
  rounded: "full",
  width: "14px",
  height: "14px",
  justify: "center",
  align: "center",
  fontSize: "8px",
  bgColor: "brand.primary",
  color: "white",
}

export const cartButtonStyles: ButtonProps = {
  pos: "relative",
  bgColor: "transparent",
  _hover: { bgColor: "transparent" },
  color: "brand.primary",
}

export const cleanCartButtonStyles: ButtonProps = {
  variant: "ghost",
  color: "black",
}

export const checkoutButtonStyles: LinkProps = {
  color: "white",
  bgColor: "brand.primary",
  marginLeft: "2rem",
  borderColor: "brand.primary",
  p: ".6rem 1rem",
  rounded: "5px",
  _hover: {
    bgColor: "white",
    color: "brand.primary",
    border: "1px",
  },
}

export const wishlistItemsFlexContainerStyles: FlexProps = {
  align: "center",
  fontSize: { base: "sm", lg: "md" },
  paddingBottom: "1rem",
  marginTop: "1rem",
  borderBottom: "1px",
  borderColor: "gray.200",
}
