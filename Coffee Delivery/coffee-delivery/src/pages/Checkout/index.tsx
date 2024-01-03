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
            <ButtonPayment>
              <CreditCard /> Cartão de crédito
            </ButtonPayment>

            <ButtonPayment>
              <Bank /> Cartão de Débito
            </ButtonPayment>

            <ButtonPayment>
              <Money /> Dinheiro
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
