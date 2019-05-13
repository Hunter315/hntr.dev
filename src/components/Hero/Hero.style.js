import styled from "styled-components";
import { flex } from "../../styles/mixins.style";


export const HeroContainer = styled.section`
  ${flex("center", "center")}
  flex-direction: column;
  height: 100vh;
  @media (max-width: 700px) {
    display: none;
  }
  
  .hero-image {
    height: 100vh;
    width: 100vw;
    text-align: center;
    background: rgb(61, 18, 25);
    
  }
  .grit {
    right:40%;
    @media (max-width: 970px) {
      right: 10%;
    }
   
  }

  .shadow {
    right:40%;

    @media (max-width: 970px) {
     right: 10%; 
    }
   
  }

  .gradient{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 300px;
    background-color: transparent;
    z-index: 5;
    background-image:
    linear-gradient(transparent, #151218)
  }
  .drop-down-icon {
    z-index: 10;
    width:100%;
    display:flex;
    justify-content: center;
    position:absolute;
    bottom: 5%;
    a{
      display: flex;
      flex-flow:column

    }
    img {
      position: absolute;
      bottom: 2rem;
      width: 4.5rem;
      opacity: 0.8;
      cursor: pointer;
      animation: bounce 2s infinite;
      transition: 150ms ease-in;
      &:hover {
        opacity: 0.5;
      }
    }
    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }
  }
`;