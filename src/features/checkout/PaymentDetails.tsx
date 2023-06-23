import useAppContext from "@/context/AppContext"
import { calculateItemsTotalPrice } from "@/helpers"
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useState, useRef } from "react"

function PaymentDetails() {
  const {
    state: { checkout },
  } = useAppContext()

  const total = useRef(calculateItemsTotalPrice(checkout))
  const tax = total.current * 0.1

  return (
    <Card>
      <CardHeader fontSize="md">Payment Details</CardHeader>

      <CardBody>
        <Stack>
          <Flex justify="space-between">
            <Input type="text" placeholder="Enter Copund Code" rounded="full" />
            <Button
              bgColor="brand.primary"
              color="white"
              rounded="full"
              ml="40px"
              px="2rem"
              _hover={{ bgColor: "brand.primaryDark" }}
              _active={{ bgColor: "brand.primaryDark" }}>
              Apply Coupon
            </Button>
          </Flex>
          <Divider mt="1rem" />

          <Box>
            <Heading size="xs" my="1rem">
              Payment Options
            </Heading>
            <RadioGroup>
              <Stack>
                <Radio value="cashOnDelivery">Cash On Delivery</Radio>
                <Radio value="mobilePayment">Mobile Money Payment</Radio>
                <Radio value="creditCard">Credit Card (Master/Visa)</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Divider mt="1rem" />

          <Box>
            <Flex justify="space-between" align="center" my="1rem">
              <Text fontWeight="bold">Sub Total</Text>
              <Text fontWeight="bold">${total.current.toFixed(2)}</Text>
            </Flex>

            <Flex justify="space-between" align="center" my="1rem">
              <Text fontWeight="bold">Tax(10%)</Text>
              <Text fontWeight="bold">${tax.toFixed(2)}</Text>
            </Flex>

            <Flex justify="space-between" align="center" my="1rem">
              <Text fontWeight="bold">Coupon Discount</Text>
              <Text fontWeight="bold">-${tax.toFixed(2)}</Text>
            </Flex>

            <Flex justify="space-between" align="center" my="1rem">
              <Text fontWeight="bold">Shipping Cost</Text>
              <Text fontWeight="bold">-$0.00</Text>
            </Flex>
            <Divider />
            <Flex justify="space-between" align="center" my="1rem">
              <Text fontWeight="bold">Total</Text>
              <Text fontWeight="bold">${total.current.toFixed(2)}</Text>
            </Flex>
          </Box>

          <Button
            bgColor="brand.primary"
            color="white"
            w="100%"
            rounded="full"
            _hover={{
              bgColor: "brand.primaryDark",
            }}
            _active={{
              bgColor: "brand.primaryDark",
            }}>
            Pay ${total.current.toFixed(2)}
          </Button>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default PaymentDetails
