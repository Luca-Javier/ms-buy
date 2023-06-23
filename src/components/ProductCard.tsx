import { Box } from "@chakra-ui/react"
import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react"
import Raiting from "./Raiting"
import AddTocartButton from "./AddTocartButton"
import { IProduct } from "@/models"
import AddWishlistButton from "./AddWishlistButton"
import { Link } from "@chakra-ui/next-js"

interface Props {
  product: IProduct
}

function ProductCard({ product }: Props) {
  const { description, mainImage, price, name, rating, slug } = product

  return (
    <Card maxW="sm">
      <Link
        href={`/products/${slug}`}
        cursor="default"
        _hover={{ textDecor: "none", cursor: "default" }}>
        <CardBody pos="relative">
          <AddWishlistButton product={product} />
          <Box
            boxSize="200px"
            bg={`center / contain no-repeat url(${mainImage})`}
            mx="auto"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Flex justify="space-between">
              <Heading size="sm" w={{ base: "60%", md: "auto" }} noOfLines={2}>
                {name}
              </Heading>
              <Flex>
                <Text fontSize="sm" color="brand.primary" fontWeight="bold">
                  ${" "}
                </Text>
                <Text
                  color="brand.primary"
                  fontWeight="bold"
                  as="span"
                  fontSize="lg">
                  {price}
                </Text>
              </Flex>
            </Flex>
            <Text noOfLines={2}>{description}</Text>
            <Raiting rating={rating} />
          </Stack>
        </CardBody>
      </Link>

      <CardFooter>
        <AddTocartButton product={product} />
      </CardFooter>
    </Card>
  )
}

export default ProductCard
