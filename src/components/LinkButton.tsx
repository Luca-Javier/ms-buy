import { Link } from "@chakra-ui/next-js"
import { LinkProps } from "@chakra-ui/react"

interface ILinkButtonProps {
  label: string
  href: string
  styles?: LinkProps
  args?: LinkProps
}

const ButtonStyles: LinkProps = {
  rounded: "full",
  minW: "10rem",
  bgColor: "brand.primary",
  textAlign: "center",
  color: "white",
  py: ".2rem",
  px: "1rem",
  display: "block",
  my: "1rem",
  inlineSize: "fit-content",
  _hover: { textDecor: "none" },
}

function LinkButton({ label, href, styles, args }: ILinkButtonProps) {
  return (
    <Link {...args} {...ButtonStyles} {...styles} href={href}>
      {label}
    </Link>
  )
}

export default LinkButton
