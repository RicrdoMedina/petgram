import styled, { css } from "styled-components";
import { likeIn, gradientAnimate } from "../../styles/animation";

export const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  & svg {
    margin-right: 4px;
  }
`;
export const Like = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-image: url("../like.png");
  background-size: 1450px 50px;
  ${(props) =>
    props.liked &&
    css`
       {
        ${likeIn()}
      }
    `}
`;
export const ContentLoader = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0.8em 0 0.6em;
`;

export const LoaderLike = styled.span`
  width: 90px;
  height: 18px;
  border-radius: 8px;
  background: linear-gradient(-45deg, #e4e2e1, #d4cacc, #bbc1c1, #eaecef);
  background-size: 400% 400%;
  ${gradientAnimate()}
`;
export const Text = styled.span`
  position: relative;
  left: -10px;
  font-family: "Montserrat", sans-serif;
`;

// background-image: url('../src/assets/like.png');
