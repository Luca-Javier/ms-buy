import { Heading } from "@chakra-ui/react"

interface Props {
  title: string
}

function SectionHeading({ title }: Props) {
  return (
    <Heading size={"md"} my={"1.5rem"}>
      {title}
    </Heading>
  )
}

export default SectionHeading
