import { css, keyframes } from 'styled-components'

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`
export const fadeIn = ({time = '1s', type = 'ease' } = {}) => css`
animation: ${time} ${fadeInKeyFrames} ${type};`

const likeInKeyFrames = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: right;
  }
`

export const likeIn = ({time = '.8s', steps = 28, mode = 'forwards' } = {}) => css`
  animation-name: ${likeInKeyFrames};
  animation-duration: ${time};
  animation-timing-function: steps(${steps});
  animation-fill-mode: ${mode};
`

const favInKeyFrames = keyframes`
  0% {
    opacity: 0;
    filter: blur(5px);
  }
  50% {
    opacity: 1;
    filter: blur(0);
  }
  100% {
    opacity: 0;
    filter: blur(5px);
  }
`

export const favIn = ({time = '1s', mode = 'forwards' } = {}) => css`
  animation-name: ${favInKeyFrames};
  animation-duration: ${time};
  animation-fill-mode: ${mode};
`
const gradientKeyFrames = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
    background-position: 0% 50%;
	}
`

export const gradientAnimate = (time = '3s') => css`
  animation: ${gradientKeyFrames} ${time} ease infinite;
`