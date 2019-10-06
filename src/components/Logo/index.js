import React from 'react'
import { Link, Img } from './styles'

export const Logo = props => {
  const { fixed } = props
  return (<Link to='/' fixed={fixed}>
    <Img src="../logo.png" />
  </Link>)
}

