import { Flex, Stack, Box } from "@chakra-ui/react"
import {
  logoSectionStyles,
  desktopNavStyles,
  cartSectionStyles,
} from "./styles"
import AppLogo from "../AppLogo"
import { navItems } from "@/helpers"
import { Link } from "@chakra-ui/next-js"
import Search from "../Search/Search"
import Cart from "../Cart/Cart"
import Wishlist from "../Wishlist/Wishlist"

function DesktopNav() {
  return (
    <Flex {...desktopNavStyles}>
      <Stack {...logoSectionStyles}>
        <Box>
          <AppLogo />
        </Box>
        <Box display="flex" gap={"inherit"}>
          {navItems.map(({ label, href }) => (
            <Box key={href}>
              <Link href={href}>{label}</Link>
            </Box>
          ))}
        </Box>
        <Box>
          <Search />
        </Box>
      </Stack>
      <Stack {...cartSectionStyles}>
        <Wishlist />
        <Cart />
      </Stack>
    </Flex>
  )
}

export default DesktopNav
