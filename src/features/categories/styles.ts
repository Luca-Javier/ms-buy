import { CardProps, GridProps } from "@chakra-ui/react"

export const categoryGridStyles: GridProps = {
  templateColumns: { base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" },
  gap: "20px",
  mx: "auto",
  p: "2rem",
  w: { base: "100%", lg: "90%" },
}

export const categoryCardStyles: CardProps = {
  direction: "column",
  align: "center",
  overflow: "hidden",
  variant: "outline",
  w: "100%",
  p: "10px",
  _hover: { bgColor: "gray.100", cursor: "pointer" },
}
