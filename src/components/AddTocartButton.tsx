import useAppContext from "@/context/AppContext"
import { Button } from "@chakra-ui/react"
import { products } from "../../mocks/products"
import { IProduct, IShopItem } from "@/models"

interface IAddTocartButtonProps {
  product: IProduct
  count?: number
}

function AddTocartButton({ product, count = 1 }: IAddTocartButtonProps) {
  const { isAdded, addItem, removeItem } = useAppContext()

  return !isAdded("cart", product.id) ? (
    <Button
      variant="outline"
      borderColor="brand.primary"
      color="brand.primary"
      rounded="full"
      w="130px"
      size="sm"
      onClick={() => addItem("cart", product, count)}>
      Add to cart
    </Button>
  ) : (
    <Button
      variant="outline"
      borderColor="gray.400"
      color="gray.400"
      px="1rem"
      rounded="full"
      size="sm"
      onClick={() => removeItem("cart", product.id)}>
      Remove from cart
    </Button>
  )
}

export default AddTocartButton
