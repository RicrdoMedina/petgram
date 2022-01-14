import styled, {css} from 'styled-components'

export const Container = styled.header`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 65px;
  position: relative;
  margin-bottom: 1em;
  max-width: 500px;
  ${props => props.fixed && css`
    {
      position: fixed;
      z-index: 100;
      background: rgba(255, 255, 255, 0.92);
      width: 100%;
      border-bottom: 1px solid #ddd;
    }
  `}
`