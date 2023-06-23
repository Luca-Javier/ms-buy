import ProductDetails from "@/features/products/ProductDetails"

import { groq } from "next-sanity"
import { client } from "../../../../../utils/sanity.client"

const getProductQuery = groq`*[_type == "product" && slug.current == $slug][0]
{
  "id":_id,
  name,
  description,
  price,
  rating,
  "slug":slug.current,
  "mainImage":mainImage.asset->url,
  "gallery": gallery[].asset->url,
  category->{
    name,
    "id":_id,
    "image":image.asset->url
  }
}`

interface IProductDetailsPageProps {
  params: { slug: string }
}

async function ProductDetailsPage({
  params: { slug },
}: IProductDetailsPageProps) {
  const product = await client.fetch(getProductQuery, { slug })

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  )
}

export default ProductDetailsPage
