import React from 'react'
import { WrapperAvatar, ImgAvatar } from './styles'
const defaultAvatar = 'https://raw.githubusercontent.com/RicrdoMedina/petgram/master/src/assets/avatar.gif'

export const Avatar = ({avatar = defaultAvatar}) => {
  return (<WrapperAvatar>
    <ImgAvatar src={defaultAvatar}/>
  </WrapperAvatar>)
}