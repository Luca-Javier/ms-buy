import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react"
import { useRef } from "react"
import { VscListFlat } from "react-icons/vsc"
import AppLogo from "../AppLogo"
import { navItems } from "@/helpers"

import { Link } from "@chakra-ui/next-js"
import { color } from "framer-motion"

function MobileNavMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <VscListFlat />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <AppLogo />
          </DrawerHeader>

          <DrawerBody>
            {navItems.map(({ href, label }) => (
              <Box
                key={href}
                p="1rem"
                _hover={{ bgColor: "brand.primary", color: "white" }}
                rounded="lg">
                <Link
                  cursor="default"
                  _hover={{ textDecor: "none", cursor: "default" }}
                  href={href}
                  onClick={onClose}>
                  {label}
                </Link>
              </Box>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileNavMenu
