import { Box, IconButton, IconButtonProps } from "@chakra-ui/react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { useSwiper } from "swiper/react"

const btnStyles: IconButtonProps = {
  rounded: "lg",
  mx: "1",
  bgColor: "white",
  borderColor: "brand.primary",
  borderWidth: "1px",
  color: "brand.primaryDark",
  "aria-label": "",
}

function SwiperNavButtons() {
  const swiper = useSwiper()

  return (
    <Box>
      <IconButton
        {...btnStyles}
        aria-label="Prev"
        icon={<FaChevronLeft />}
        onClick={() => swiper.slidePrev()}
      />
      <IconButton
        {...btnStyles}
        aria-label="Prev"
        icon={<FaChevronRight />}
        onClick={() => swiper.slideNext()}
      />
    </Box>
  )
}

export default SwiperNavButtons
