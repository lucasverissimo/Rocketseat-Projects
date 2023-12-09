import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        line-height: 100%;
    }    
    
    body, html{
        width: 100%;
        height: 100%;
        font-size: 1rem;
    }

    body{
        background-color: ${(props) => props.theme.background}
    }

    @media screen and (max-width: 767px){
        html, body {
            font-size: 80%;
        }
    }
`
export const CenterContainer = styled.section`
  height: auto;
  max-width: 95%;
  margin: auto;
  @media screen and (min-width: 1200px) {
    width: 1120px;
  }
`

export const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  cursor: pointer;
`

export const TitleSection = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-size: ${(props) => props.theme['title-l']};
  font-weight: 800;
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 100%;
  margin: 1.25rem 0;
`
