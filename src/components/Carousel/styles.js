import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1em ${props => props.chevronWidth}px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const SlideItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  height: 6em;
`;

export const Arrow = styled.button`
  height: 25px;
  width: 25px;
  border-radius: 100%;
  background: #e8e4e4;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 5px #5f5656;
  border: 1px solid #ddd;
  cursor: pointer;
`