import styled from "styled-components";
import { flex, wrapper } from "../../styles/mixins.style";
import {
  blackLight,
  whiteRegular,
  buttonLight
} from "../../styles/variables.style";

export const NavContainer = styled.div`
  ${wrapper()}
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  transition: 150ms ease-in;
`;

export const NavWrapper = styled.div`
  ${wrapper("60%", "0")}
  ${flex("space-between", "center")}
  padding: 1rem 20%;
`;

export const NavBrand = styled.a`

  img {
    width: 4.5rem;
    height: auto;
    
  }
`;

export const NavMenu = styled.nav`
  .active {
    color: white;
    border-bottom: 2px solid white;
    padding-bottom: 0.5rem;
    transition: 150ms ease-in;
  }
  ul {
    ${flex("space-between", "center")}
    width: 100%;
    box-sizing: border-box;
    list-style-type: none;
    color: ${blackLight}
    text-align: center;
    @media (max-width: 700px) {
      min-width: 0;
    }
    .page-links {
      @media (max-width: 700px) {
        display: none;
      }
    }
    li {
      margin-left: 3.5rem;
      width: 25%;
      a {
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 150ms ease-in;
        cursor: pointer;
        &:hover {
          color: white;
          border-bottom: 2px solid white;
          padding-bottom: 0.5rem;
        }
      }
      a:active {
        color: white;
        border-bottom: 2px solid white;
        padding-bottom: 0.5rem;
      }
    }
    li:first-child {
      margin: 0;
    }
   
  }
`;
