import React from 'react'
import { WrapperAvatar, ImgAvatar } from './styles'
const defaultAvatar = 'https://github.com/RicrdoMedina/petgram/tree/master/src/assets/avatar.gif'

export const Avatar = ({avatar = defaultAvatar}) => {
  return (<WrapperAvatar>
    <ImgAvatar src={defaultAvatar}/>
  </WrapperAvatar>)
}