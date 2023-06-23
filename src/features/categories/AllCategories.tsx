"use client"
import { ICategory } from "@/models"
import { Image, Link } from "@chakra-ui/next-js"
import { Card, Grid, Heading } from "@chakra-ui/react"
import { categoryCardStyles, categoryGridStyles } from "./styles"

interface IAllCategoriesProps {
  categories: ICategory[]
}

function AllCategories({ categories }: IAllCategoriesProps) {
  return (
    <Grid {...categoryGridStyles}>
      {categories.map(category => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </Grid>
  )
}

export default AllCategories

interface ICategoryCardProps {
  category: ICategory
}

function CategoryCard({ category }: ICategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.id}`}
      _hover={{ textDecoration: "none" }}>
      <Card {...categoryCardStyles}>
        <Image
          src={category.image}
          alt={category.slug}
          width={200}
          height={200}
        />
        <Heading size="md" textDecoration="none">
          {category.name}
        </Heading>
      </Card>
    </Link>
  )
}
