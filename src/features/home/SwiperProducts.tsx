"use client"
import ProductCard from "@/components/ProductCard"
import SectionHeading from "@/components/SectionHeading"
import SwiperNavButtons from "@/components/SwiperNavButtons"
import { IProduct } from "@/models"
import { Box } from "@chakra-ui/react"
import { CSSProperties } from "react"
import { SwiperOptions, Navigation, Autoplay } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

interface Props {
  title: string
  products: IProduct[]
}

const slidesStyles: CSSProperties = {
  boxSizing: "border-box",
  maxWidth: "350px",
}

function SwiperProducts({ title, products }: Props) {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 10,
    slidesPerView: "auto",
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  }

  return (
    <Box w={{ base: "100%", lg: "90%" }} mx="auto" p="2rem">
      <SectionHeading title={title} />
      <Swiper {...sliderSettings} style={{ width: "100%", height: "100%" }}>
        {products.map(product => (
          <SwiperSlide key={product.id} style={slidesStyles}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}

        <SwiperNavButtons />
      </Swiper>
    </Box>
  )
}

export default SwiperProducts
