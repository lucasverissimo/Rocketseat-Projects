import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import {
  HeaderContainer,
  CartHeader,
  ButtonLocationHeader,
  NavLinkCart,
} from './style'
import { CenterContainer } from '../../styles/global'

import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <CenterContainer className="main-header">
        <NavLink to="/">
          <img
            src={Logo}
            alt="Logo Coffee Delivery"
            title="Logo Coffee Delivery"
            className="img-logo-delivery"
          />
        </NavLink>

        <CartHeader>
          <ButtonLocationHeader>
            <MapPin size={22} className="icon-button" />
            <span>Itaquaquecetuba, SP</span>
          </ButtonLocationHeader>

          <NavLinkCart to="/checkout">
            <ShoppingCart size={22} className="icon-button" />
            <span>0</span>
          </NavLinkCart>
        </CartHeader>
      </CenterContainer>
    </HeaderContainer>
  )
}
