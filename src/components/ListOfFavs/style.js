import styled, { css } from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn, gradientAnimate } from '../../styles/animation'

export const Link = styled(LinkRouter)`
  border-radius: 8px;
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  width: 31.33%;
  position: relative;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  ${props => props.widthShadow && css`
    {
      box-shadow: 0px 0px 4px #5f5656;
    }
  `}
`

export const NoFavs = styled.div`
  border-radius: 8px;
  display: flex;
  height: inherit;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  padding-bottom: .3em;
  position: absolute;
  top: 0;
  bottom: 0;
  left: auto;
  right: auto;
  margin: auto;
`
export const Message = styled.span`
  border-radius: 8px;
  display: flex;
  height: 30px;
  position: relative;
  align-items: 'center';
  justify-content: center;
  padding: .3em .8em;
`

export const Loader = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(-45deg,#e4e2e1,#d4cacc,#bbc1c1,#eaecef);
  background-size: 400% 400%;
  z-index:100;
  ${ gradientAnimate() }
`

export const Grid = styled.div`
  border-radius: 1em;
  padding: .5em .5em 0;
  margin: 2em .5em 0;
  min-height: calc(100vh - 38vh);
  position: relative;
  ${props => props.widthBackground && css`
  {
    background: #f3f3f3;
  }
`}
`

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index:10;
  border-radius: 8px;
  ${ fadeIn() }
`