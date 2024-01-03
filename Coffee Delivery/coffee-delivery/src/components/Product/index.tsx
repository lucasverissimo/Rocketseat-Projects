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

import ImageExample from '../../assets/coffe-example.png'

export function Product() {
  return (
    <ProductContainer>
      <ProductInsideContainer>
        <ProductImage>
          <img src={ImageExample} alt="" className="image-product" />
        </ProductImage>
        <ProductTag>Tradicional</ProductTag>
        <ProductTitle>Expresso Tradicional</ProductTitle>
        <ProductDescription>
          O tradicional café feito com água quente e grãos moídos
        </ProductDescription>
        <ProductBuy>
          <div className="price">
            <span className="currency">R$</span>
            9,90
          </div>
          <div className="add_cart">
            <div className="qtd">
              <span className="minus">-</span>
              <input type="text" value="1" disabled />
              <span className="plus">+</span>
            </div>
            <button className="add">
              <ShoppingCart size={25} color={'#fff'} />
            </button>
          </div>
        </ProductBuy>
      </ProductInsideContainer>
    </ProductContainer>
  )
}
