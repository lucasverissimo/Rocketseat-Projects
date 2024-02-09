import styled from 'styled-components'

export const ProductContainer = styled.div`
  height: auto;
  padding-top: 1rem;
`

export const ProductInsideContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 0rem 1.875rem 1.875rem 1.875rem;
  text-align: center;
`

export const ProductImage = styled.div`
  text-align: center;
  margin: auto;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: start;
  justify-content: center;

  .image-product {
    width: auto;
    height: auto;
    max-width: 95%;
    max-height: 95%;
    margin-top: -1rem;
  }
`

export const ProductTag = styled.span`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  font-size: ${(props) => props.theme.tag};
  padding: 0.3125rem;
  border-radius: 100px;
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  margin-top: 0.625rem;
`

export const ProductTitle = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: ${(props) => props.theme['title-s']};
  color: ${(props) => props.theme['base-subtitle']};
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
`

export const ProductDescription = styled.p`
  font-size: ${(props) => props.theme['text-s']};
  color: ${(props) => props.theme['base-label']};
  margin-bottom: 1.375rem;
  line-height: 1.4;
`

export const ProductBuy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.price {
    color: ${(props) => props.theme['base-text']};
    font-size: ${(props) => props.theme['text-m']};
    font-weight: bold;

    span.currency {
      font-size: ${(props) => props.theme['text-s']};
      font-weight: normal;
      display: inline-block;
      vertical-align: baseline;
      margin-right: 0.3125rem;
    }
  }

  div.add_cart {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    div.qtd {
      background-color: ${(props) => props.theme['base-button']};
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;

      input[type='text'] {
        background: transparent;
        padding: 13px 5px;
        width: 30px;
        height: auto;
        text-align: center;
        border: 0;
      }

      span {
        font-size: 1.2rem;
        color: ${(props) => props.theme.purple};
        width: 20px;
        cursor: pointer;
      }
    }

    button.add {
      border-radius: 6px;
      background-color: ${(props) => props.theme['purple-dark']};
      padding: 7px;
      border: 0;
      margin-left: 10px;
      cursor: pointer;
    }
  }
`
