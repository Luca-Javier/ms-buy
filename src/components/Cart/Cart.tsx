import useAppContext from "@/context/AppContext"
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
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { useRef } from "react"
import { BsCart4 } from "react-icons/bs"
import CartItem from "./CartItem"
import {
  cartButtonStyles,
  checkoutButtonStyles,
  cleanCartButtonStyles,
  notificationItemsCount,
} from "./styles"
import { calculateItemsTotalPrice } from "@/helpers"
import { Link } from "@chakra-ui/next-js"

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)
  const {
    state: { cart },
    resetItems,
    addItem,
  } = useAppContext()

  const handleCheckout = () => {
    resetItems("checkout")
    cart.forEach(item => {
      addItem("checkout", item, item.count)
    })
    onClose()
  }

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} {...cartButtonStyles}>
        <BsCart4 />
        <Text>Cart</Text>
        {cart.length > 0 && (
          <Flex {...notificationItemsCount}>{cart.length}</Flex>
        )}
      </Button>
      <Drawer
        size={{ base: "lg", lg: "sm" }}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}>
        <Text>Cart</Text>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="brand.primary">Cart</DrawerHeader>

          <DrawerBody>
            {cart.length > 0 ? (
              cart.map(item => <CartItem key={item.id} item={item} />)
            ) : (
              <Flex justify="center">"Your cart is empty"</Flex>
            )}
          </DrawerBody>

          {cart.length > 0 && (
            <DrawerFooter justifyContent="space-between">
              <Box>
                <Button
                  {...cleanCartButtonStyles}
                  onClick={() => resetItems("cart")}>
                  Clean Cart
                </Button>
                <Link
                  {...checkoutButtonStyles}
                  onClick={handleCheckout}
                  href="/checkout">
                  Checkout
                </Link>
              </Box>
              <Text fontWeight="bold">
                Total: $ {calculateItemsTotalPrice(cart)}
              </Text>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
