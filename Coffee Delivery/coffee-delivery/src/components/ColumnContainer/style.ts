import styled from 'styled-components'

export interface ColumnType {
  width?: number
  widthtablet?: number
  widthmobile?: number
  children?: React.ReactNode
}

export const ColumnContainerDiv = styled.div<ColumnType>`
  display: inline-block;
  width: ${(props) => props.width || '100'}%;

  @media screen and (max-width: 992px) and (min-width: 768px) {
    width: ${(props) => props.widthtablet}%;
  }
  @media screen and (max-width: 767px) {
    width: ${(props) => props.widthmobile}%;
  }
`
