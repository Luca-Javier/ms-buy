import useAppContext from "@/context/AppContext"
import { IShopItem } from "@/models"
import { Link } from "@chakra-ui/next-js"
import { Avatar, Button, Flex, Input, Text } from "@chakra-ui/react"
import { BsCart, BsTrash } from "react-icons/bs"
import { trashButtonStyles, wishlistItemsFlexContainerStyles } from "../Cart/styles"

interface IWishlistItemProps {
  item: IShopItem
}

function WishlistItem({ item }: IWishlistItemProps) {
  const { removeItem, addItem } = useAppContext()

  return (
    <Flex {...wishlistItemsFlexContainerStyles}
     >
      <Link href={`/products/${item.slug}`}>
        <Avatar h="3rem" mr="1rem" src={item.mainImage} />
      </Link>
      <Text noOfLines={2} flex={{ base: 2, lg: "unset" }}>
        {item.description}
      </Text>
      <Button {...trashButtonStyles} onClick={() => addItem("cart", item, 1)}>
        <BsCart />
      </Button>

      <Text fontWeight="bold">$ {item.price}</Text>
      <Button
        {...trashButtonStyles}
        onClick={() => removeItem("wishlist", item.id)}>
        <BsTrash />
      </Button>
    </Flex>
  )
}

export default WishlistItem
