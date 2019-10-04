import React from 'react'
import { Container, Message } from './styles'
import { MdErrorOutline, MdFolderSpecial } from 'react-icons/md'

export const Status = ({state = 'error', message='Ocurrio un error', color = 'red'}) => {
  return <Container>
    {
      state === 'error' && <MdErrorOutline size="42px" color={color}/>
    }
    {
      state === 'empty' && <MdFolderSpecial size="42px" color={color}/>
    }
    {
      state === 'success' && <MdCheckCircle size="42px" color={color}/>
    }
    <Message state={state} color={color}>{ message }</Message>
  </Container>
}
