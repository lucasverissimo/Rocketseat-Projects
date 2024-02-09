import { useState, useEffect } from 'react'

import { CenterContainer, TitleSection } from '../../styles/global'
import { BackgroundBanner, RowProducts } from './style'

import { Product, ProductProps } from '../../components/Product'

import BannerContent from '../../assets/info-banner-home.png'

import { arrListProducts } from './listproducts.mock'

export function Home() {
  const [listProducts, setListProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    setListProducts(arrListProducts)
  }, [listProducts])

  return (
    <>
      <BackgroundBanner>
        <CenterContainer>
          <img
            src={BannerContent}
            alt="Conteúdo do banner"
            title="Conteúdo do banner"
            className="banner-content"
          />
        </CenterContainer>
      </BackgroundBanner>

      <CenterContainer>
        <TitleSection>Nossos cafés</TitleSection>
        <RowProducts>
          {listProducts.map((product) => {
            return <Product key={product.id} {...product} />
          })}
        </RowProducts>
      </CenterContainer>
    </>
  )
}
