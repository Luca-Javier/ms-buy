import useAppContext from "@/context/AppContext"
import { Button } from "@chakra-ui/react"
import { products } from "../../mocks/products"
import { BsHeartFill, BsHeart } from "react-icons/bs"
import { IProduct } from "@/models"

interface IAddWishlistButtonProps {
  product:IProduct
}

function AddWishlistButton({ product }:IAddWishlistButtonProps) {
  const { isAdded, addItem, removeItem } = useAppContext()

  return !isAdded("wishlist", product.id) ? (
    <Button
      variant="ghost"
      bgColor="transparent"
      color="red.400"
      rounded="full"
      size="sm"
      _hover={{ bgColor: "transparent" }}
      title="Add to wishlist"
      onClick={() => addItem("wishlist", product, 1)}>
      <BsHeart />
    </Button>
  ) : (
    <Button
      variant="ghost"
      bgColor="transparent"
      color="red.400"
      rounded="full"
      size="sm"
      _hover={{ bgColor: "transparent" }}
      title="Remove from wishlist"
      onClick={() => removeItem("wishlist", product.id)}>
      <BsHeartFill />
    </Button>
  )
}

export default AddWishlistButton

//https://youtu.be/pVqQBZqOvQw?t=133
