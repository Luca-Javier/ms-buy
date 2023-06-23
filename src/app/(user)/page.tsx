import Banner from "@/features/home/Banner"
import SwiperProducts from "@/features/home/SwiperProducts"
import TopCategories from "@/features/home/TopCategories"
import { client } from "../../../utils/sanity.client"
import { groq } from "next-sanity"
import { IItems } from "@/models"

const getItemsQuery = groq`*[_type == "featuredProductsAndCategories"]
{
  topCategories[]->{
    "id":_id,
    name,
    "slug":slug.current,
    "image":image.asset->url
  },
  bestDeals[]->{
    "id":_id,
    name,
    description,
    price,
    "slug":slug.current,
    rating,
    "mainImage":mainImage.asset->url
  },
  trendingProducts[]->{
    "id":_id,
    name,
    description,
    price,
    "slug":slug.current,
    rating,
    "mainImage":mainImage.asset->url
  },
  mostSellingProducts[]->{
    "id":_id,
    name,
    description,
    price,
    "slug":slug.current,
    rating,
    "mainImage":mainImage.asset->url
  }
}
`

const getItems = async (): Promise<IItems> => {
  const data = await client.fetch(getItemsQuery)

  return data[0]
}

export default async function Home() {
  const items = await getItems()

  return (
    <div>
      <Banner />
      <TopCategories categories={items.topCategories} />
      <SwiperProducts title="Best Deals For You" products={items.bestDeals} />
      <SwiperProducts
        title="Most Selling Products"
        products={items.mostSellingProducts}
      />
      <SwiperProducts
        title="Trending Products"
        products={items.trendingProducts}
      />
    </div>
  )
}
