import useAppContext from "@/context/AppContext"
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react"
import { FaKey } from "react-icons/fa"

function ReviewItems() {
  const {
    state: { checkout },
  } = useAppContext()

  return (
    <Card>
      <CardHeader fontSize="md">Review Items</CardHeader>

      <CardBody>
        {checkout.map(item => (
          <Flex align="center" justify="space-between" mb="1rem">
            <Flex align="center">
              <Image src={item.mainImage} boxSize="100px" bgSize="contain" />
              <Box mx="1rem" maxW="50%">
                <Text
                  maxW="500px"
                  fontWeight="bold"
                  fontSize={{ base: "md", lg: "lg" }}
                  noOfLines={2}>
                  {item.name}
                </Text>

                <Text color="gray.500" noOfLines={1}>
                  {item.description}
                </Text>
              </Box>
            </Flex>

            <Box textAlign="right">
              <Text fontWeight="bold" fontSize={{ base: "md", lg: "lg" }}>
                $ {item.price}
              </Text>
              <Flex fontSize={{ base: "sm", lg: "md" }} gap="0 5px">
                <Text>Quantity:</Text>
                <Text as="span">{item.count.toFixed(2)}</Text>
              </Flex>
            </Box>
          </Flex>
        ))}
      </CardBody>
    </Card>
  )
}

export default ReviewItems
