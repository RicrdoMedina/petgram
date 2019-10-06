import styled, { css } from 'styled-components'

export const Content = styled.div`
  width: 41px;
  height: 30px;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
  position: absolute;
  left: 1.6em;
  bottom: 1.1em;
  z-index: 100;
`
export const Span = styled.span`
  display: block;
  position: absolute;
  height: 3px;
  width: 80%;
  background: #000;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
  &:nth-child(1) { top: 5px; }
  &:nth-child(2) { top: 19px; }
  &:nth-child(3) { top: 32px; }
  .open &:nth-child(1){
    top: 18px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
  }
  .open &:nth-child(2){
    opacity: 0;
    left: -60px;
  }
  .open &:nth-child(3){
    top: 18px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
`