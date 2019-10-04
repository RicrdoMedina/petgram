import React from 'react'
import {Arrow,} from './styles'

export const Button = (props) => {
  return (
    <Arrow>
      {props.children}
    </Arrow>
  )
}
