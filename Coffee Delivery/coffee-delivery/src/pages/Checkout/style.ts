import styled, { css } from 'styled-components'
import { CenterContainer, TitleSection } from '../../styles/global'

export const CenterContainerFlex = styled(CenterContainer)`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: start;
  gap: 2%;
`

export const TitleSectionSmall = styled(TitleSection)`
  font-size: ${(props) => props.theme['title-xs']};
`

export const FundoSectionCheckout = styled.section`
  padding: 30px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`

export const HeadSectionCheckout = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
`
export const InfoHeadSectionCheckout = styled.div`
  margin-left: 15px;
`
export const SpanTitle = styled.div`
  font-size: ${(props) => props.theme['text-m']};
  margin-bottom: 5px;
  color: ${(props) => props.theme['base-subtitle']};
`
export const SpanSubtitle = styled.div`
  font-size: ${(props) => props.theme['text-s']};
  color: ${(props) => props.theme['base-subtitle']};
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  justify-content: start;
  margin-top: 25px;
  gap: 2%;
  & > :not(:last-child) {
    margin-bottom: 15px;
  }
`

const InputForm = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  border-color: ${(props) => props.theme['base-button']};
  border-width: 1px;
  border-radius: 4px;
  padding: 10px;
  border-style: solid;
`

export const InputSmall = styled(InputForm)`
  width: 12%;
`

export const InputMedium = styled(InputForm)`
  width: 29%;
`

export const InputBig = styled(InputForm)`
  width: 55%;
`

export const InputLarge = styled(InputForm)`
  width: 69%;
`

export const InputFull = styled(InputForm)`
  width: 100%;
`

export const ButtonPaymentContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  .btn-active {
    border: 1px solid ${({ theme }) => theme['purple-dark']};
    background: ${({ theme }) => theme['purple-light']};
  }
`

export const ButtonPayment = styled.button`
  width: 30%;
  height: auto;
  padding: 15px 10px;
  text-transform: uppercase;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  ${({ theme }) => css`
    color: ${theme['base-text']};
    font-size: ${theme['text-s']};
    background: ${theme['base-button']};
  `}
  display: flex;
  align-items: center;
  justify-content: center;

  .iconBtnBuy {
    height: 20px;
    width: 20px;
    margin-right: 5px;
    color: ${({ theme }) => theme.purple};
  }
`
