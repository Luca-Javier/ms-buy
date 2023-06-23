import useAppContext from "@/context/AppContext"
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"

function DeliveryInformation() {
  const {
    state: { checkout },
  } = useAppContext()

  return (
    <Card>
      <CardHeader fontSize="md">Delivery Information</CardHeader>

      <CardBody>
        <Stack spacing="2rem">
          <Box>
            <FormLabel>Full Name</FormLabel>
            <Input type="text" placeholder="Full Name" />
          </Box>

          <Box>
            <FormLabel>Address</FormLabel>
            <Input type="text" placeholder="Adress" />
          </Box>

          <Box>
            <FormLabel>Phone</FormLabel>
            <Input type="text" placeholder="Phone Number" />
          </Box>

          <Box>
            <FormLabel>Email</FormLabel>
            <Input type="text" placeholder="email" />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default DeliveryInformation
