import React, { Fragment,useContext } from 'react'
import { Content, Item } from './styles'
import { Context } from '../../Context'

export const NoRegister = () => {
  const { showRegisterForm, setShowRegisterForm } = useContext(Context)
  const showSingUpForm = () => {
    setShowRegisterForm(true)
  }
  const showSingIn = () => {
    setShowRegisterForm(false)
  }
  return (<Content>
      {!showRegisterForm && (<Fragment>
        <Item onClick={showSingUpForm}>¿ Ya tienes una cuenta ?</Item>
        <Item>Olvide mi password</Item>
      </Fragment>)}
      {
        showRegisterForm && (<Item onClick={showSingIn}>Iniciar sesión</Item>)
      }
  </Content>)
}