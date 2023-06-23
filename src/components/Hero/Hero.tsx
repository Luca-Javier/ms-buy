"use client"
import { Box, Card, Heading, Image, Text } from "@chakra-ui/react"
import { heroCardStyles, heroImageStyles } from "./styles"
import { Link } from "@chakra-ui/next-js"
import LinkButton from "../LinkButton"

interface IHeroProps {
  heading: string
  description: string
  imageUrl: string
  btnLabel: string
  btnLink: string
}

function Hero({
  heading,
  description,
  imageUrl,
  btnLabel,
  btnLink,
}: IHeroProps) {
  return (
    <Card {...heroCardStyles}>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Heading size={{ base: "xl", lg: "2xl" }}>{heading}</Heading>
        <Text mt="0.5rem"> {description} </Text>

        <LinkButton label={btnLabel} href={btnLink} />
      </Box>

      <Box mx="2rem" w={{ base: "100%", lg: "50%" }}>
        <Image {...heroImageStyles} src={imageUrl} alt={heading} />
      </Box>
    </Card>
  )
}

export default Hero
