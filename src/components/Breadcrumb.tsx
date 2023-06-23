"use client"
import { NavItem } from "@/models"
import { ChevronRightIcon } from "@chakra-ui/icons"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react"
import Link from "next/link"

interface ICustomBreadcrumbProps {
  items?: NavItem[]
}

function CustomBreadcrumb({ items = [] }: ICustomBreadcrumbProps) {
  return (
    items.length > 0 && (
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
        w={{ base: "100%", lg: "90%" }}
        mx="auto"
        py="2rem"
        px="1rem"
        fontSize={{ base: "xs", md: "md" }}>
        {items.map((item, index) => (
          <BreadcrumbItem key={item.href}>
            {index !== items.length - 1 ? (
              <BreadcrumbLink as={Link} href={item.href}>
                {item.label}
              </BreadcrumbLink>
            ) : (
              <Text color="gray.400" noOfLines={1} w="200px">
                {item.label}
              </Text>
            )}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    )
  )
}

export default CustomBreadcrumb
