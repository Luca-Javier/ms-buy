import useAppContext from "@/context/AppContext"
import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { useRef } from "react"
import { BsCart4, BsHeart } from "react-icons/bs"
import WishlistItem from "./WishlistItem"
import { notificationItemsCount, trashButtonStyles } from "../Cart/styles"

function Wishlist() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)
  const {
    state: { wishlist },
    resetItems,
  } = useAppContext()

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          ref={btnRef}
          onClick={onOpen}
          pos="relative"
          bgColor="transparent"
          _hover={{ bgColor: "transparent" }}
          color="brand.primary">
          <BsHeart />
          <Text>Wishlist</Text>

          {wishlist.length > 0 && (
            <Flex {...notificationItemsCount}>{wishlist.length}</Flex>
          )}
        </Button>
      </PopoverTrigger>

      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader fontWeight="bold" color="brand.primary">
            Wishlist
          </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            {wishlist.length > 0 ? (
              <>
                {wishlist.map(item => (
                  <WishlistItem key={item.id} item={item} />
                ))}
              </>
            ) : (
              <Flex justify="center">"Your wishlist is empty"</Flex>
            )}
          </PopoverBody>
          {wishlist.length > 0 && (
            <PopoverFooter>
              <Button
                {...trashButtonStyles}
                onClick={() => resetItems("wishlist")}>
                Clean Wishlist
              </Button>
            </PopoverFooter>
          )}
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default Wishlist
