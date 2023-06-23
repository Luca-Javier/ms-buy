import Hero from "@/components/Hero"
import GridProducts from "@/features/products/GridProducts"
import CustomBreadcrumb from "@/components/Breadcrumb"
import { ICategory, IProduct } from "@/models"
import { defaultBreadcrumbItems } from "@/helpers"
import { groq } from "next-sanity"
import { client } from "../../../../../utils/sanity.client"

const getProductsFromCategoriesQuery = groq`*[_type == "product" && references($id)]{
  "id":_id,
  "slug":slug.current,
  "mainImage":mainImage.asset->url,
  rating,
  price,
  description,
  category->{
    name,
    "image":image.asset->url
  }
}`

interface ICategoryPageProps {
  params: { id: string }
}

async function CategoryPage({ params: { id } }: ICategoryPageProps) {
  const products: IProduct[] = await client.fetch(
    getProductsFromCategoriesQuery,
    { id }
  )

  const categoryName = products[0]?.category.name

  return (
    <>
      <Hero
        btnLabel="View Alll Categories"
        btnLink="/categories"
        description={`Best and Affordable ${categoryName} `}
        heading={categoryName}
        imageUrl={products[0]?.category.image}
      />
      <CustomBreadcrumb
        items={[...defaultBreadcrumbItems, { label: categoryName, href: "" }]}
      />
      <GridProducts products={products} />
    </>
  )
}

export default CategoryPage

export const revalidate = 60

export const dynamicParams = false //? PROBAR PARA SACAR LOS ?

export async function generateStaticParams() {
  const getCategoriesQuery = groq`*[_type == "category"]{
    "id":_id
  }`

  const categories: { id: string }[] = await client.fetch(getCategoriesQuery)

  return categories
}
