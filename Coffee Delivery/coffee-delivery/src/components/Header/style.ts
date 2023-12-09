import styled from 'styled-components'
import { ButtonIcon } from '../../styles/global'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  width: 100%;
  height: auto;
  padding: 4rem 0;

  .main-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 1.5625rem 0;
  }
  @media screen and (max-width: 767px) {
    padding: 1.25rem 0;
  }
`

export const CartHeader = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.625rem;
`

export const ButtonLocationHeader = styled(ButtonIcon)`
  background-color: ${(props) => props.theme['purple-light']};
  border: 0;
  font-size: ${(props) => props.theme['text-s']};
  font-weight: normal;
  line-height: 130%;
  padding: 0.625rem;

  span {
    margin-left: 0.3125rem;
    color: ${(props) => props.theme['purple-dark']};
  }

  .icon-button {
    fill: ${(props) => props.theme['purple-dark']};
  }
`

export const NavLinkCart = styled(NavLink)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0.625rem;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 8px;
  position: relative;

  .icon-button {
    fill: ${(props) => props.theme['yellow-dark']};
  }

  span {
    position: absolute;
    top: -0.625rem;
    right: -0.625rem;
    font-size: ${(props) => props.theme['text-xs']};
    color: ${(props) => props.theme.white};
    border-radius: 30px;
    background-color: ${(props) => props.theme['yellow-dark']};
    width: 1.25rem;
    height: 1.25rem;
    line-height: 1.25rem;
    text-align: center;
  }
`
