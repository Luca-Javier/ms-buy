import { Box } from "@chakra-ui/react"
import { navbarStyles } from "./styles"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

function Navbar() {
  return (
    <Box className="navbar-wrapper" h="120px">
      <Box {...navbarStyles}>
        <DesktopNav />
        <MobileNav />
      </Box>
    </Box>
  )
}

export default Navbar
