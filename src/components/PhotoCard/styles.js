import styled, { css } from 'styled-components'
import { fadeIn, gradientAnimate } from '../../styles/animation'

export const Article = styled.article`
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 3em;
  background: #f3f3f3;
  border-radius: 1em;
  margin: 0 .5em 1em;
  cursor:pointer;
  position: relative;
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImgWrapper = styled.div`
  border-radius: 8px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 90%;
  position: relative;
  ${props => props.widthShadow && css`
    {
      box-shadow: 0px 0px 15px #5f5656;
    }
  `}
`

export const Img = styled.img`
  ${ fadeIn() }
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 8px;
`

export const LoaderPhotos = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  background: linear-gradient(-45deg,#e4e2e1,#d4cacc,#bbc1c1,#eaecef);
	background-size: 400% 400%;
  ${ gradientAnimate() }
`
