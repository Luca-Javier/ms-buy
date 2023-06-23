import { Flex, Text } from "@chakra-ui/react"
import ReactStars from "react-stars"
import { colors } from "@/app/theme"
import { IRating } from "@/models"

interface Props {
  rating: IRating
}

function Raiting({ rating }: Props) {
  return (
    <Flex align="center">
      <ReactStars
        count={5}
        value={rating.rate}
        half
        size={18}
        color2={colors.brand.primary}
        edit={false}
      />
      <Text>({rating.rate})</Text>
    </Flex>
  )
}

export default Raiting
