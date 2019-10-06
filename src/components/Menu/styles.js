import styled, { css } from 'styled-components'
import {Link as LinkRouter} from '@reach/router'

export const Nav = styled.nav`
  position: fixed;
  z-index: 1000;
  max-width: 500px;
  height: 100vh;
  top: 128px;
  left: 0;
  padding: 1em;
  background: rgba(0,0,0,0.94);
  text-align: center;
  display: none;
  right: 0;
  bottom: 0;
  margin: auto;
  ${props => props.showMenu && css`
    {
      display: block;
    }
  `}
`

export const Link = styled(LinkRouter)`
  display: inline-flex;
  margin: 1em;
`

export const Image = styled.img`
  overflow: hidden;
  object-fit: cover;
  border: 1px solid #ddd;
  height: 95px;
  width: 95px;
  border-radius: 50%;
  box-shadow: 0px 0px 7px #5f5656;
`