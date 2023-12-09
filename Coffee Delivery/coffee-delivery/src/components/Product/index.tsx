import {
  ProductContainer,
  ProductInsideContainer,
  ProductImage,
  ProductTag,
  ProductTitle,
  ProductDescription,
  ProductBuy,
} from './style'

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
        </ProductBuy>
      </ProductInsideContainer>
    </ProductContainer>
  )
}
