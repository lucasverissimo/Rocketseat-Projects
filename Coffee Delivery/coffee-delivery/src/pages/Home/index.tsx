import { CenterContainer, TitleSection } from '../../styles/global'
import { BackgroundBanner, RowProducts } from './style'

import { Product } from '../../components/Product'

import BannerContent from '../../assets/info-banner-home.png'

export function Home() {
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => {
            return <Product key={product} />
          })}
        </RowProducts>
      </CenterContainer>
    </>
  )
}
