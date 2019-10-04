import styled, { css } from 'styled-components'


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;
`
export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  margin-top: .3em;
  font-size: .8em;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  ${props => props.color && css`
  {
    color: ${props.color};
  }
`}
`
