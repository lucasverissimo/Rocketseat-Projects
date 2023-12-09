import styled from 'styled-components'
import BgBanner from '../../assets/bg-banner-home.png'

export const BackgroundBanner = styled.div`
  width: 100%;
  height: auto;
  padding: 3.75rem 0;
  background-image: url(${BgBanner});
  background-size: 100% 100%;
  background-position: center center;

  .banner-content {
    width: 100%;
    height: auto;
  }
`
export const RowProducts = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
`
