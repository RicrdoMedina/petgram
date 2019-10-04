import styled, {css} from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  width: 100%;
  ${props => props.fixed && css`
    {
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0,0,0,0.3);
      left: 0;
      margin: 0 auto;
      padding: 5px;
      position: fixed;
      right:0;
      top: -20px;
      transform: scale(.5);
      z-index: 1;
      max-width: 400px;
    }
  `}
  &::-webkit-scrollbar { width: 0 !important }
`

export const Item = styled.li`
  padding: 0 8px;
  
`