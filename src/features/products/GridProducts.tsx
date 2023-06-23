"use client"
import ProductCard from "@/components/ProductCard"
import { IProduct } from "@/models"
import { Box, Button, Flex } from "@chakra-ui/react"
import { usePagination } from "@mantine/hooks"
import { useState } from "react"

interface IGridProductsProps {
  products: IProduct[]
}

const itemsPerPage = 3

function GridProducts({ products }: IGridProductsProps) {
  const [visibleProduct, setVisibleProduct] = useState(
    products.slice(0, itemsPerPage)
  )

  const total = Math.ceil(products.length / itemsPerPage)
  const pagination = usePagination({
    total,
    initialPage: 1,
    onChange(page) {
      console.log(page)
      const start = (page - 1) * itemsPerPage
      const end = start + itemsPerPage
      setVisibleProduct(products.slice(start, end))
    },
  })

  return (
    <>
      <Flex
        flexWrap={"wrap"}
        w={{ base: "100%", lg: "90%" }}
        mx="auto"
        gap="1rem"
        justify={{ base: "center", lg: "space-between" }}>
        {visibleProduct.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Flex>
      {itemsPerPage < products.length && (
        <Flex justify="center" align="center" mt="2rem">
          {pagination.range.map(range =>
            range === "dots" ? (
              <Button
                borderWidth="1px"
                borderColor="brand.primary"
                color="brand.primary"
                bgColor="white"
                mx="1"
                key={range}>
                ...
              </Button>
            ) : (
              <Button
                onClick={() => pagination.setPage(range)}
                borderWidth="1px"
                borderColor="brand.primary"
                color={pagination.active === range ? "white" : "brand.primary"}
                bgColor={
                  pagination.active === range ? "brand.primary" : "white"
                }
                mx="1"
                key={range}
                _active={{ bgColor: "none" }}
                _hover={{ bgColor: "none" }}>
                {range}
              </Button>
            )
          )}
        </Flex>
      )}
    </>
  )
}

export default GridProducts
