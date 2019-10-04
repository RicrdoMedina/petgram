import React from 'react'
import { WrapperAvatar, ImgAvatar } from './styles'
const defaultAvatar = 'https://react-advanced-rcrdmedina.ricrdomedina.now.sh/avatar.gif'

export const Avatar = ({avatar = defaultAvatar}) => {
  return (<WrapperAvatar>
    <ImgAvatar src={defaultAvatar}/>
  </WrapperAvatar>)
}