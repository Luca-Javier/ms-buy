import { Link } from "@chakra-ui/next-js"
import { Text } from "@chakra-ui/react"

function AppLogo() {
  return (
    <Link
      _hover={{ textDecor: "none" }}
      href="/"
      color="gray.800"
      fontWeight="bold">
      MS{" "}
      <Text as="span" color="brand.primary">
        BUY
      </Text>
    </Link>
  )
}

export default AppLogo
