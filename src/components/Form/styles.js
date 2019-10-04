import styled, { css } from 'styled-components'

export const ContentForm = styled.form`
  padding: 0 1em 1em;
`

export const Title = styled.h1`
  text-align: center;
  padding: .5em 0;
  font-size: 1.2em;
  margin-bottom: .5em;
  font-family: 'Lato', sans-serif;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 1em;
  padding: 0 .8em;
  height: 3em;
  display: block;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  &[disabled] {
    opacity: .9;
  }
`

export const Message = styled.div`
  color: red;
  font-size: .675em;
  font-family: 'Montserrat', sans-serif;
  ${props => props.showMessage && css`
  {
    margin-bottom: 1em;
  }
`}
`