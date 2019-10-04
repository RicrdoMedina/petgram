import React, {Fragment, useState } from 'react'
import {useInputValue} from '../../hooks/useInputValue'
import {ContentForm, Title, Input, Message } from './styles'
import { SubmitButton } from '../SubmitButton'

export const Form = ({ onSubmit, inputs, disabled, title, submitTitle, errorMsg }) => {

  const [message, setMessage] = useState('')

  const error = message ? message : errorMsg ? errorMsg : ''

  const showError = error ? true : false

  inputs.map((input, index) => {
    const { value } = input;
    const bindProps = useInputValue(value);
    inputs[index] = {...input, ...bindProps}
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('')
    let isValid = true

    inputs.map((input) => {
      const { value, name, required } = input
      if (value === '' && isValid && required) {
        setMessage(`El campo ${name} es obligatorio.`)
        setShowMessage(true)
        isValid = false
      }
    })

    isValid && onSubmit(inputs)
  }
  
  const renderInputs = () => inputs.map((input, index) => <Input key={index} disabled={input.disabled} placeholder={input.placeholder} {...input}/>)

  return <Fragment>
    <ContentForm disabled={disabled} onSubmit={handleSubmit}>
    <Title>{title}</Title>
    {
      renderInputs()
    }
    { error && <Message showMessage={showError}>{error}</Message>}
    <SubmitButton disabled={disabled}>{submitTitle ? submitTitle : title }</SubmitButton>
  </ContentForm>
  </Fragment>
    
}