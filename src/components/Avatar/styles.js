import styled, { css } from 'styled-components'
import { gradientAnimate } from '../../styles/animation'

export const WrapperAvatar = styled.div`
  width: 100%;
  height: 30vh;
  background: #9c9e9e;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg,#f3bed0,#a0bec1,#3e4c4c,#9C27B0);
	background-size: 400% 400%;
  ${ gradientAnimate('6s') }
`
export const ImgAvatar = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 100%;
  border: solid 2px #ccc;
  box-shadow: 0px 0px 15px #5f5656;
`