"use client"
import AddTocartButton from "@/components/AddTocartButton"
import CustomBreadcrumb from "@/components/Breadcrumb"
import LinkButton from "@/components/LinkButton"
import Quantity from "@/components/Quantity"
import Raiting from "@/components/Raiting"
import useAppContext from "@/context/AppContext"
import { defaultBreadcrumbItems } from "@/helpers"
import { IProduct, NavItem } from "@/models"
import { Link } from "@chakra-ui/next-js"
import {
  Box,
  Breadcrumb,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import { useState } from "react"

interface IProductDetailsProps {
  product: IProduct
}

function ProductDetails({ product }: IProductDetailsProps) {
  const [quantity, setQuantity] = useState(0)

  const { resetItems, addItem } = useAppContext()

  const handleBuyNow = () => {
    resetItems("checkout")
    addItem("checkout", product, quantity)
  }

  return (
    <>
      <CustomBreadcrumb
        items={[
          ...defaultBreadcrumbItems,
          {
            label: product.category.name,
            href: `/categories/${product.category.id}`,
          },
          {
            label: product.name,
            href: `/products/${product.slug}`,
          },
        ]}
      />
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        w={{ base: "100%", lg: "90%" }}
        mx="auto"
        p="2rem"
        gap="20">
        <GridItem>
          <Image src={product.mainImage} alt={product.name} />
        </GridItem>
        <GridItem>
          <Heading>{product.name}</Heading>
          <Text>{product.description}</Text>
          <Raiting rating={product.rating} />

          <Text fontWeight="bold" fontSize="2rem">
            $ {product.price}
          </Text>
          <Divider my="1rem" />
          <Quantity
            setQuantity={(valueAsString, valueAsNumber) => {
              setQuantity(valueAsNumber)
            }}
          />
          <Divider my="1rem" />
          <Flex align="center" gap="1rem">
            <LinkButton
              args={{ onClick: () => handleBuyNow() }}
              label="Buy Now"
              href="/checkout"
            />
            <AddTocartButton product={product} count={quantity} />
          </Flex>

          <Stack py="2rem">
            <Box>
              <Text fontWeight="bold">Free Delivery</Text>
              <Link href="#" textDecor="underline" color="gray.500">
                Enter your postal Code for Delivery Avariability
              </Link>
            </Box>

            <Box>
              <Text fontWeight="bold">Return Delivery</Text>
              <Text color="gray.500">
                Free 30 Days Delivery Returns{" "}
                <Link href="#" textDecor="underline">
                  Details
                </Link>
              </Text>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </>
  )
}

export default ProductDetails
