import { colors } from "@/app/theme"
import Link from "next/link"
import { CSSProperties } from "react"
import { NavbarProps } from "sanity"

const linkStyles: CSSProperties = {
  textDecoration: "none",
  color: colors.brand.primary,
}

function StudioNavbar(props: NavbarProps) {
  return (
    <>
      <div>
        <Link href="/" style={linkStyles}>
          Back Home
        </Link>
        <Link href="/products" style={linkStyles}>
          View Products
        </Link>
      </div>
      {props.renderDefault(props)}
    </>
  )
}

export default StudioNavbar
