import { IAppContext, IAppState, IProduct, IShopItemKey } from "@/models"
import { useLocalStorage } from "@mantine/hooks"
import { ReactNode, useState, createContext, useContext } from "react"

const AppContext = createContext<IAppContext | null>(null)

interface IAppContextProviderProps {
  children: ReactNode
}

const initialState: IAppState = {
  cart: [],
  wishlist: [],
  checkout: [],
}

function useAppContext() {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider")
  }

  return context
}

function AppContextProvider({ children }: IAppContextProviderProps) {
  const [state, setState] = useLocalStorage<IAppState>({
    key: "ms-buy",
    defaultValue: initialState,
  })

  const addItem = (key: IShopItemKey, product: IProduct, count?: number) => {
    setState(prevState => ({
      ...prevState,
      [key]: [...prevState[key], { ...product, count: count || 1 }],
    }))
  }

  const removeItem = (key: IShopItemKey, productId: string) => {
    setState(prevState => ({
      ...prevState,
      [key]: prevState[key].filter(item => item.id !== productId),
    }))
  }

  const increaseCount = (key: IShopItemKey, productId: string) => {
    const items = [...state[key]]

    const index = items.findIndex(item => item.id === productId)

    if (index === -1) return

    items[index].count++
    setState(prevState => ({ ...prevState, [key]: items }))
  }

  const decreaseCount = (key: IShopItemKey, productId: string) => {
    const items = [...state[key]]

    const index = items.findIndex(item => item.id === productId)

    if (index === -1) return
    if (items[index].count <= 1) return

    items[index].count--
    setState(prevState => ({ ...prevState, [key]: items }))
  }

  const resetItems = (key: IShopItemKey) => {
    setState(prevState => ({ ...prevState, [key]: [] }))
  }

  const isAdded = (key: IShopItemKey, productId: string): boolean => {
    return state[key].some(item => item.id === productId)
  }

  return (
    <AppContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        increaseCount,
        decreaseCount,
        resetItems,
        isAdded,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export default useAppContext
export { AppContextProvider, AppContext }
