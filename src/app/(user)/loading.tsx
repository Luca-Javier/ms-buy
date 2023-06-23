"use client"
import { Image } from "@chakra-ui/next-js"
import { Flex, Text } from "@chakra-ui/react"

function Loading() {
  return (
    <Flex
      justify="center"
      align="center"
      flexDir="column"
      width="100vw"
      height="100vh">
      <Image
        width={200}
        height={200}
        src={"/loading-cart.gif"}
        alt="Loading cart gif"
      />
      <Text>Loading...</Text>
    </Flex>
  )
}

export default Loading
