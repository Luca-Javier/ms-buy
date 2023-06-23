"use client"

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import {
  bannerButtonStyles,
  bannerDescriptionStyles,
  bannerHeadingStyles,
  bannerImageStyles,
  bannerStyles,
} from "./styles"
import { Link } from "@chakra-ui/next-js"

function Banner() {
  return (
    <Flex {...bannerStyles}>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Heading {...bannerHeadingStyles}>
          Online Shopping <br /> Made Easy
        </Heading>
        <Text {...bannerDescriptionStyles}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quaerat
          exercitationem optio. Sunt earum adipisci, officia doloribus mollitia
          eos? Doloremque.
        </Text>
        <Link {...bannerButtonStyles} href={"/products"}>
          Show Now
        </Link>
      </Box>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Box {...bannerImageStyles} />
      </Box>
    </Flex>
  )
}

export default Banner
