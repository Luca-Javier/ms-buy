import {
  Button,
  HStack,
  Input,
  StackProps,
  useNumberInput,
} from "@chakra-ui/react"

interface IQuantityProps {
  max?: number
  styles?: StackProps
  value?: number
  setQuantity?: (valueAsString: string, valueAsNumber: number) => void
}

function Quantity({
  max = 20,
  styles,
  value = 1,
  setQuantity,
}: IQuantityProps) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: value,
      min: 1,
      max,
      onChange(valueAsString, valueAsNumber) {
        if (!setQuantity) return
        setQuantity(valueAsString, valueAsNumber)
      },
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack maxW="320px" {...styles}>
      <Button {...inc}>+</Button>
      <Input {...input} textAlign="center" />
      <Button {...dec}>-</Button>
    </HStack>
  )
}

export default Quantity
