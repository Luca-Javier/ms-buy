import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  Text,
  Image,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import {
  dropDownStyles,
  searchInputStyles,
  wrapperContainerStyles,
} from "./styles"
import { useState, useEffect, useRef } from "react"
import { client } from "../../../utils/sanity.client"
import { groq } from "next-sanity"
import { IProduct } from "@/models"
import { Link } from "@chakra-ui/next-js"

const searchProductsQuery = groq`*[_type == "product" && (name match $search || description match $search || category->name match $search) ] {
      ...,
      "id": _id,
      "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{
            name,
            "id": _id,
            "image": image.asset->url
        },
        "gallery": gallery[].asset->url
    }`

function Search() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [products, setProducts] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const fetchDebounce = useRef<NodeJS.Timeout>()

  const fetchProducts = async () => {
    setIsLoading(true)

    const searchToMatch = `*${search}*`
    const response: IProduct[] = await client.fetch(searchProductsQuery, {
      search: searchToMatch,
    })

    setProducts(response)
    setIsLoading(false)
  }
  useEffect(() => {
    clearTimeout(fetchDebounce.current)

    if (search.trim().length === 0) setProducts([])

    if (search.trim().length < 3) return

    fetchDebounce.current = setTimeout(fetchProducts, 400)

    return () => clearTimeout(fetchDebounce.current)
  }, [search])

  return (
    <Box {...wrapperContainerStyles}>
      <InputGroup size="sm">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          value={search}
          onChange={e => setSearch(e.target.value)}
          onClick={() => setIsDropdownOpen(true)}
          onBlur={() => setIsDropdownOpen(false)}
          {...searchInputStyles}
        />
      </InputGroup>
      {isDropdownOpen && (
        <Box {...dropDownStyles}>
          {products.length === 0 ? (
            isLoading ? (
              "Loading..."
            ) : (
              "No products found"
            )
          ) : (
            <ProductsList products={products} />
          )}
        </Box>
      )}
    </Box>
  )
}

export default Search

function ProductsList({ products }: { products: IProduct[] }) {
  return products.map(product => (
    <Link key={product.id} href={`/products/${product.slug}`}>
      <Box
        borderBottom="1px"
        borderBottomColor="gray.100"
        p="2px"
        _hover={{ bgColor: "gray.200" }}>
        <Flex align="center" gap="0 1rem">
          <Image
            src={product.mainImage}
            boxSize="50px"
            alt={product.description}
          />
          <Text>{product.name}</Text>
        </Flex>
        <Flex justify="flex-end">
          <Tag size="sm">{product.category.name}</Tag>
        </Flex>
      </Box>
    </Link>
  ))
}
