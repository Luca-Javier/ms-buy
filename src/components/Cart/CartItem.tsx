import { IShopItem } from "@/models"
import { Avatar, Button, Flex, Input, Text } from "@chakra-ui/react"
import Quantity from "../Quantity"
import { BsTrash } from "react-icons/bs"
import useAppContext from "@/context/AppContext"
import { Link } from "@chakra-ui/next-js"
import {
  cartItemFlexContainerStyles,
  cartItemInputStyles,
  trashButtonStyles,
} from "./styles"

interface ICartProps {
  item: IShopItem
}

function CartItem({ item }: ICartProps) {
  const { removeItem, increaseCount, decreaseCount } = useAppContext()

  return (
    <Flex {...cartItemFlexContainerStyles}>
      <Link href={`/products/${item.slug}`}>
        <Avatar src={item.mainImage} />
      </Link>
      <Text noOfLines={2} flex={{ base: 2, lg: "unset" }}>
        {item.description}
      </Text>
      <Flex gap="0 1rem" flex="2">
        <Button onClick={() => increaseCount("cart", item.id)}>+</Button>
        <Input value={item.count} {...cartItemInputStyles} />
        <Button onClick={() => decreaseCount("cart", item.id)}>-</Button>
      </Flex>
      <Text fontWeight="bold">$ {item.price}</Text>
      <Button
        {...trashButtonStyles}
        onClick={() => removeItem("cart", item.id)}>
        <BsTrash />
      </Button>
    </Flex>
  )
}

export default CartItem
