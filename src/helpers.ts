import { IShopItem, NavItem } from "./models"

export const navItems: NavItem[] = [
  {
    label: "All Products",
    href: "/products",
  },
  {
    label: "Categories",
    href: "/categories",
  },
]

export const defaultBreadcrumbItems: NavItem[] = [
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
]

export const calculateItemsTotalPrice = (items: IShopItem[]) => {
  return items.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.count,
    0
  )
}
