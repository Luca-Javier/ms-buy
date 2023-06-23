import { Box, Flex, Stack, Text } from "@chakra-ui/react"
import AppLogo from "../AppLogo"
import { mobileNavContainerStyles, mobileSearchWrapper } from "./styles"
import Search from "../Search/Search"
import MobileNavMenu from "./MobileNavMenu"
import Cart from "../Cart/Cart"
import Wishlist from "../Wishlist/Wishlist"

function MobileNav({}) {
  return (
    <>
      <Flex {...mobileNavContainerStyles}>
        <Box>
          <MobileNavMenu />
        </Box>
        <AppLogo />
        <Stack direction="row" spacing={1}>
          <Wishlist />

          <Cart />
        </Stack>
      </Flex>

      <Box {...mobileSearchWrapper}>
        <Search />
      </Box>
    </>
  )
}

export default MobileNav
