import { useState } from 'react'
import { ColumnContainer } from '../../components/ColumnContainer'
import {
  CenterContainerFlex,
  TitleSectionSmall,
  FundoSectionCheckout,
  HeadSectionCheckout,
  InfoHeadSectionCheckout,
  SpanTitle,
  SpanSubtitle,
  FormContainer,
  InputSmall,
  InputMedium,
  InputBig,
  InputFull,
  InputLarge,
  ButtonPaymentContainer,
  ButtonPayment,
} from './style'

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'

export function Checkout() {
  const [paymentSelected, setPaymentSelected] = useState('')

  function handleSetPaymentMethod(method: string) {
    setPaymentSelected((prevPaymentSelected) => {
      if (prevPaymentSelected === method) {
        return ''
      } else {
        return method
      }
    })

    console.log(method, paymentSelected)
  }

  return (
    <CenterContainerFlex>
      <ColumnContainer width={60}>
        <TitleSectionSmall>Complete seu pedido</TitleSectionSmall>

        <FundoSectionCheckout>
          <HeadSectionCheckout>
            <MapPinLine size={22} color={'#C47F17'} />
            <InfoHeadSectionCheckout>
              <SpanTitle>Endereço de Entrega</SpanTitle>
              <SpanSubtitle>
                Informe o endereço onde deseja receber seu pedido
              </SpanSubtitle>
            </InfoHeadSectionCheckout>
          </HeadSectionCheckout>

          <FormContainer name="form_checkout" method="post">
            <InputMedium type="text" name="cep" placeholder="CEP" />
            <InputFull type="text" name="rua" placeholder="Rua" />
            <InputMedium type="text" name="numero" placeholder="Número" />
            <InputLarge
              type="text"
              name="complemento"
              placeholder="Complemento (opcional)"
            />
            <InputMedium type="text" name="bairro" placeholder="Bairro" />
            <InputBig type="text" name="cidade" placeholder="Cidade" />
            <InputSmall type="text" name="uf" placeholder="UF" />
          </FormContainer>
        </FundoSectionCheckout>
        <br />
        <FundoSectionCheckout>
          <HeadSectionCheckout>
            <CurrencyDollar size={22} color={'#8047F8'} />
            <InfoHeadSectionCheckout>
              <SpanTitle>Pagamento</SpanTitle>
              <SpanSubtitle>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </SpanSubtitle>
            </InfoHeadSectionCheckout>
          </HeadSectionCheckout>

          <ButtonPaymentContainer>
            <ButtonPayment
              className={paymentSelected === 'credit-card' ? 'btn-active' : ''}
              onClick={() => handleSetPaymentMethod('credit-card')}
            >
              <CreditCard className="iconBtnBuy" />
              Cartão de crédito
            </ButtonPayment>

            <ButtonPayment
              className={paymentSelected === 'debit-card' ? 'btn-active' : ''}
              onClick={() => handleSetPaymentMethod('debit-card')}
            >
              <Bank className="iconBtnBuy" /> Cartão de Débito
            </ButtonPayment>

            <ButtonPayment
              className={paymentSelected === 'cash' ? 'btn-active' : ''}
              onClick={() => handleSetPaymentMethod('cash')}
            >
              <Money className="iconBtnBuy" /> Dinheiro
            </ButtonPayment>
          </ButtonPaymentContainer>
        </FundoSectionCheckout>
      </ColumnContainer>

      <ColumnContainer width={38}>
        <TitleSectionSmall>Cafés selecionados</TitleSectionSmall>
      </ColumnContainer>
    </CenterContainerFlex>
  )
}
