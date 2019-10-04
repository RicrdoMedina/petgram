import React, {Fragment, useState} from 'react'
import {useInputValue} from '../../hooks/useInputValue'
import {Form, Title, Input, Message } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ onSubmit, values = null, disabled, title, submitTitle, errorMsg }) => {

  const email = useInputValue('')
  const password = useInputValue('')
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')

  const error = message ? message : errorMsg ? errorMsg : ''

  const showError = error ? true : false
  

  const handleSubmit = (event) => {
    event.preventDefault()

    setShowMessage(false)
    setMessage('')

    if (email.value === '') {
       setMessage('El email es obligatorio.')
       setShowMessage(true)
       return false
    }
    
    if (password.value === '') {
      setMessage('El password es obligatorio.')
      setShowMessage(true)
      return false
    }

    onSubmit({email: email.value, password: password.value})
  }

  return <Fragment>
    <Form disabled={disabled} onSubmit={handleSubmit}>
    <Title>{title}</Title>
    <Input disabled={disabled} placeholder='Email' {...email}/>
    <Input disabled={disabled} placeholder='Password' type='password' {...password}/>
    { error && <Message showMessage={showError}>{error}</Message>}
    <SubmitButton disabled={disabled}>{title ? title : submitTitle}</SubmitButton>
  </Form>
  </Fragment>
    
}