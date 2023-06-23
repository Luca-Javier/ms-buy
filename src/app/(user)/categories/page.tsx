import Hero from "@/components/Hero"
import AllCategories from "@/features/categories/AllCategories"
import { groq } from "next-sanity"
import { client } from "../../../../utils/sanity.client"

const getCategoriesQuery = groq`*[_type == "category"]{
  "id":_id,
  name,
  "slug":slug.current,
  "image":image.asset->url
  }`

async function CategoriesPage() {
  const categories = await client.fetch(getCategoriesQuery)

  return (
    <div>
      <Hero
        btnLink="/products"
        btnLabel="View All Products"
        heading="Product Categories"
        description="We'vw got all your favorite Categories"
        imageUrl="https://cdn.sanity.io/images/gbmlc5y8/production/e085a7a29cbc4f47eee4b2b8ce6660e9c028e100-640x369.jpg"
      />

      <AllCategories categories={categories} />
    </div>
  )
}

export default CategoriesPage
