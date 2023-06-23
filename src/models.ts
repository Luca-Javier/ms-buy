export type IShopItemKey = "cart" | "wishlist" | "checkout"

export interface NavItem {
  label: string
  href: string
}

export interface IRating {
  rate: number
  count: number
}

export interface IProduct {
  id: string
  name: string
  description: string
  price: number
  rating: IRating
  slug: string
  mainImage: string
  category: ICategory
  gallery?: string[]
}

export interface ICategory {
  id: string
  name: string
  image: string
  slug: string
}

export interface IItems {
  topCategories: ICategory[]
  bestDeals: IProduct[]
  mostSellingProducts: IProduct[]
  trendingProducts: IProduct[]
}

export interface IAppState {
  cart: IShopItem[]
  wishlist: IShopItem[]
  checkout: IShopItem[]
}

export interface IShopItem extends IProduct {
  count: number
}

export interface IAppContext {
  state: IAppState
  addItem: (key: IShopItemKey, product: IProduct, count?: number) => void
  removeItem: (key: IShopItemKey, productId: string) => void
  increaseCount: (key: IShopItemKey, productId: string) => void
  decreaseCount: (key: IShopItemKey, productId: string) => void
  resetItems: (key: IShopItemKey) => void
  isAdded: (key: IShopItemKey, productId: string) => boolean
}
