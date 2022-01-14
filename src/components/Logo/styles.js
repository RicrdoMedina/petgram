import styled, { css } from 'styled-components'
import {Link as LinkRouter} from '@reach/router'

export const Link = styled(LinkRouter)`
  height: inherit;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  ${props => props.fixed && css`
    {
      position: relative;
      top: 4px;
    }
  `}
`

export const Img = styled.img`
  width: 10rem;

`