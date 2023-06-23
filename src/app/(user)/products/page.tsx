import GridProducts from "@/features/products/GridProducts"
import Hero from "@/components/Hero"
import { client } from "../../../../utils/sanity.client"
import { IProduct } from "@/models"
import { groq } from "next-sanity"

const getProductsQuery = groq`*[_type == "product"]{
"id":_id,
name,
description,
price,
rating,
"slug":slug.current,
"mainImage":mainImage.asset->url
}`

const getProducts = async (): Promise<IProduct[]> => {
  const data = await client.fetch(getProductsQuery)

  return data
}

async function ProductsPage() {
  const products = await getProducts()

  return (
    <div>
      <Hero
        btnLink="/categories"
        btnLabel="View All Categories"
        heading="Best and Quality Products"
        description="Affordability, Durability, Fast and Convenient Delivery, Free Shipping and more"
        imageUrl="https://cdn.sanity.io/images/gbmlc5y8/production/e085a7a29cbc4f47eee4b2b8ce6660e9c028e100-640x369.jpg"
      />
      <GridProducts products={products} />
    </div>
  )
}

export default ProductsPage
