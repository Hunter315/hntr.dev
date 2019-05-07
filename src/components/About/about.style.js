import styled from "styled-components";
import { flex } from "../../styles/mixins.style";
import {
  redRegular,
  blackRegular,
  blackLight,
  headingStyle
} from "../../styles/variables.style";

export const AboutContainer = styled.section`
  ${flex("space-between", "center")}
  height: 80vh;
  background: #151218;
  padding: 100px 50px 0 50px;
  @media (max-width: 700px) {
    height: 100vh;
  }
`;

export const AboutHeadline = styled.div`
width: 50%;
  @media (max-width: 650px) {
    width: 100%;
  }
  h1 {
    margin: 0;
    ${headingStyle}
  }
  p {
    color: ${blackRegular};
    letter-spacing: 0.05rem;
  }
  .main-headline {
    margin-bottom: 5rem;
    font-size: 2.5rem;
    line-height: 4rem;
    @media (max-width: 1200px) {
      font-size: 2.5rem;
      line-height: 4rem;
    }
    @media (max-width: 885px) {
      font-size: 2.5rem;
      line-height: 4rem;
    }
    @media (max-width: 711px) {
      font-size: 2rem;
      line-height: 3rem;
    }
  }
  
  }
`;

export const AboutImage = styled.div`
  width: 50%;
  text-align: center;
  @media (max-width: 650px) {
    display: none;
  }
  img {
    width: 60%;
    height: auto;
    border-radius:50%;
  }
  .secondary-headline {
    font-size: 1.8rem;
    line-height: 4rem;
    color: ${blackLight};
    @media (max-width: 1200px) {
      font-size: 1.6rem;
      line-height: 3rem;
    }
    @media (max-width: 885px) {
      font-size: 1.6rem;
    }
    a {
      border-bottom: 0.1rem solid ${blackLight};
      color: ${blackLight};
      transition: 150ms ease-in;
      &:hover {
        border-bottom: 0.1rem solid ${redRegular};
        color: ${redRegular};
      }
    }
`;