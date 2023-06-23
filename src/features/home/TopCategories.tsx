"use client"
import SectionHeading from "@/components/SectionHeading"
import { ICategory } from "@/models"
import { Image, Link } from "@chakra-ui/next-js"
import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react"

interface Props {
  categories: ICategory[]
}

function TopCategories({ categories }: Props) {
  return (
    <Box w={{ base: "100%", lg: "90%" }} mx="auto" px="2rem">
      <SectionHeading title="Show Our Top Categories" />

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2 ,1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap="1rem">
        {categories.map(category => (
          <GridItem key={category.id}>
            <TopCategoryCard category={category} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default TopCategories

interface ITopCategoryCardProps {
  category: ICategory
}

function TopCategoryCard({ category }: ITopCategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.id}`}
      textDecor="none"
      _hover={{ textDecor: "none" }}>
      <Card
        direction="row"
        align="center"
        overflow="hidden"
        variant="outline"
        boxSize="100%"
        p="10px"
        _hover={{ cursor: "pointer", bgColor: "gray.100" }}>
        <Image
          src={category.image}
          alt={category.slug}
          width={100}
          height={100}
        />
        <CardBody>
          <Heading size={{ base: "sm", lg: "md" }}>{category.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  )
}
