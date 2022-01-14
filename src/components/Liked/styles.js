import styled, { css } from 'styled-components'
import { favIn } from '../../styles/animation'

export const ContainerLike = styled.div`
  background:rgba(0, 0, 0, 0.64);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  opacity:0;
  ${ favIn() }
`