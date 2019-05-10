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
  .ul-list {
    counter-reset: li; /* Initiate a counter */
    list-style: none; /* Remove default numbering */
    *list-style: decimal; /* Keep using default numbering for IE6/7 */
    font: 15px 'trebuchet MS', 'lucida sans';
    padding: 0;
    margin-bottom: 4em;
    text-shadow: 0 1px 0 rgba(255,255,255,.5);
    li{
      position: relative;
    display: block;
    padding: .4em .4em .4em 2em;
    *padding: .4em;
    margin: 1em 0;
    width:86px;
    background: #ddd;
    color: #444;
    text-decoration: none;
    border-radius: .3em;
    transition: all .3s ease-out; 
    }
    li:hover{
      background: #eee;
    }
    li:hover:before{
      transform: rotate(360deg);
    }
    li:before{
      content: counter(li);
    counter-increment: li;
    position: absolute; 
    left: -1.3em;
    top: 50%;
    margin-top: -1.3em;
    background: #3D1219;
    height: 2em;
    color: white;
    width: 2em;
    line-height: 2em;
    border: .3em solid #fff;
    text-align: center;
    border-radius: 2em;
    transition: all .3s ease-out;
    }
  }
  p {
    color: ${blackRegular};
    letter-spacing: 0.05rem;
  }
  .main-headline {
    color: #ddd;
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