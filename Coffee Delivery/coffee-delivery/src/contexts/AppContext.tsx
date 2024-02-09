import { ReactNode, createContext } from 'react'

type CartProps = {
  id: number
  qtd: number
}

interface AppContextTypes {
  handleAddCart: (id: number, qtd: number) => string
  handleDeleteItemCart: () => void
  handleGetCart: () => Array<CartProps>
}

export const AppContext = createContext({} as AppContextTypes)

interface AppContextProps {
  children: ReactNode
}

export function AppContextProvider({ children }: AppContextProps) {
  function handleAddCart(id: number, qtd: number) {
    const cartItems: CartProps[] = handleGetCart()
    const item = { id, qtd }
    if (cartItems.length === 0) {
      localStorage.setItem('@coffee-delivery:cart', JSON.stringify([item]))
      return 'Item adicionado ao carrinho!'
    } else {
      const itemExists = cartItems.find((item) => item.id === id)
      if (itemExists) {
        const newCart = cartItems.filter((item) => {
          if (item.id === id) {
            item.qtd = qtd
          }
          return item
        })
        localStorage.setItem('@coffee-delivery:cart', JSON.stringify(newCart))
        return 'Item atualizado ao carrinho!'
      } else {
        const newCart = [...cartItems, item]
        localStorage.setItem('@coffee-delivery:cart', JSON.stringify(newCart))
        return 'Item adicionado ao carrinho!'
      }
    }

    return 'Nenhuma operação conhecida foi detectada!'
  }

  function handleDeleteItemCart() {
    console.log('delete cart')
  }

  function handleGetCart() {
    const cartItems = localStorage.getItem('@coffee-delivery:cart')
    if (cartItems === null) {
      return []
    } else {
      return JSON.parse(cartItems)
    }
  }

  return (
    <AppContext.Provider
      value={{ handleAddCart, handleGetCart, handleDeleteItemCart }}
    >
      {children}
    </AppContext.Provider>
  )
}
