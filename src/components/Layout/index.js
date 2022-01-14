import React, { Fragment } from 'react'
import { Header } from '../Header'
import { Menu } from '../Menu'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles'

export const Layout = ({ children, title, subtitle, hiddenTitle = false}) => {
  return (<Fragment>
    <Helmet>
      { title && <title>{title} - Petgram </title>}
      { subtitle && <meta name='description' content={subtitle}/>}
    </Helmet>
    <Div>
      <Header/>
      <Menu/>
      {title && !hiddenTitle && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children}
    </Div>
  </Fragment>)
}

