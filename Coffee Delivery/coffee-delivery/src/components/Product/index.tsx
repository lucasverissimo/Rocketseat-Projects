import { useEffect, useState, useContext } from 'react'

import {
  ProductContainer,
  ProductInsideContainer,
  ProductImage,
  ProductTag,
  ProductTitle,
  ProductDescription,
  ProductBuy,
} from './style'

import { ShoppingCart } from '@phosphor-icons/react'

import { AppContext } from '../../contexts/AppContext'

export type ProductProps = {
  id: number
  nome: string
  descricao: string
  preco: number
  qtd: number
  image: string
  tag: Array<string>
}

export function Product(product: ProductProps) {
  const [qtd, setQtd] = useState(1)
  const [preco, setPreco] = useState('')

  const { handleAddCart } = useContext(AppContext)

  function handleQtd(type: string) {
    if (type === '+') {
      if (qtd < product.qtd) {
        setQtd(qtd + 1)
      }
    } else {
      if (qtd > 1) {
        setQtd(qtd - 1)
      }
    }
  }

  function addToCart(id: number, qtd: number) {
    alert(handleAddCart(id, qtd))
  }

  useEffect(() => {
    function changePrice() {
      const numero = product.preco * qtd
      const formatoMoeda = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
      const valorMonetario = formatoMoeda.format(numero)
      const valorNumerico = valorMonetario.replace('R$', '')
      setPreco(valorNumerico)
    }

    changePrice()
  }, [qtd, product.preco])

  return (
    <ProductContainer>
      <ProductInsideContainer>
        <ProductImage>
          <img src={product.image} alt="" className="image-product" />
        </ProductImage>
        {product.tag.map((text) => {
          return <ProductTag key={text}>{text}</ProductTag>
        })}

        <ProductTitle>{product.nome}</ProductTitle>
        <ProductDescription>{product.descricao}</ProductDescription>
        <ProductBuy>
          <div className="price">
            <span className="currency">R$</span>
            {preco}
          </div>
          <div className="add_cart">
            <div className="qtd">
              <span className="minus" onClick={() => handleQtd('-')}>
                -
              </span>
              <input type="text" value={qtd} disabled />
              <span className="plus" onClick={() => handleQtd('+')}>
                +
              </span>
            </div>
            <button className="add" onClick={() => addToCart(product.id, qtd)}>
              <ShoppingCart size={25} color={'#fff'} />
            </button>
          </div>
        </ProductBuy>
      </ProductInsideContainer>
    </ProductContainer>
  )
}
