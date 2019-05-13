import styled from "styled-components";
import { flex } from "../../styles/mixins.style";
import {
  aquaRegular,
  blackRegular,
  blackLight,
  headingStyle
} from "../../styles/variables.style";

export const AboutContainer = styled.section`
  ${flex("space-between", "center")}
  height: 80vh;
  background: #151218;
  padding: 100px 100px 0 100px;
  @media (max-width: 925px) {
    height: auto;
    padding: 100px 50px 0 50px;
  }
  @media (max-width: 650px) {
    height: auto;
    padding: 100px 50px 0 50px;
  }
  @media (max-width: 480px) {
    height: auto;
    padding: 100px 20px 0 20px;
    display:flex;
    flex-flow: column;
    align-items:center;
  }
`;

export const AboutHeadline = styled.div`
width: 50%;
@media (max-width: 800px) {
  
}
  @media (max-width: 650px) {
    width: 100%;
  }
  h1 {
    margin: 0;
    ${headingStyle}
    @media (max-width: 480px) {
      text-align: center;
    }
  }
  .ul-list {
    display: flex;
    flex-flow: column wrap;
    height: 260px;
    padding-left:20px;
    box-sizing: border-box;
    counter-reset: li; /* Initiate a counter */
    list-style: none; /* Remove default numbering */
    *list-style: decimal; /* Keep using default numbering for IE6/7 */
    font: 15px 'trebuchet MS', 'lucida sans';
    margin-bottom: 4em;
    text-shadow: 0 1px 0 rgba(255,255,255,.5);
    @media (max-width: 1130px) {
      height: 370px;
    }
    @media (max-width: 480px) {
      display:flex;
      flex-flow: column wrap;
      align-items:center;
    }
    li{
      position: relative;
    display: block;
    padding: .4em .4em .4em 2em;
    *padding: .4em;
    margin: .9rem 0;
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
    color: #bcbac1;
    margin: 0;
    font-size: 1.2rem;
    line-height: 2rem;
    @media (max-width: 1200px) {
      font-size: 1.2rem;
      line-height: 2rem;
    }
    @media (max-width: 885px) {
      font-size: 1.2rem;
      line-height: 2rem;
    }
    @media (max-width: 711px) {
      font-size: 1.2rem;
      line-height: 2rem;
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
    &:hover {
      opacity: 0.7;
    }
  }
  .secondary-headline {
    font-size: 1.8rem;
    line-height: 4rem;
    color: ${blackLight};
    &:hover {
      opacity: 0.5;
    }
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
        border-bottom: 0.1rem solid ${aquaRegular};
        color: ${aquaRegular};
      }
    }
`;