import styled from 'styled-components'

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 3em;
  display: block;
  width: 100%;
  text-align: center;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  &[disabled] {
    opacity: .3;
  }
`