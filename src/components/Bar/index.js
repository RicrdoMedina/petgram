import React, { useContext } from 'react'
import { Context } from '../../Context'
import { Content, Span } from './styles'

export const Bar = () => {
  const { showMenu, setShowMenu } = useContext(Context)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (<Content className={ showMenu && 'open'} onClick={toggleMenu}>
            <Span/>
            <Span/>
            <Span/>
          </Content>)
}