import styled from "styled-components";
import { flex } from "../../styles/mixins.style";
import {
  blackRegular,
  blackLight,
  aquaRegular,
  headingStyle,
  buttonDark,
  buttonLight,
  aquaDark
} from "../../styles/variables.style";

export const FlexWrap = styled.div`
display:flex;
`;
export const ProjectContainer = styled.section`
padding: 0 100px 0 100px;
  background: #151218;
  @media (max-width: 925px) {
    padding: 0 50px 0 50px;
  }
  @media (max-width: 480px) {
    padding: 0 20px 0 20px;
    display:flex;
    flex-flow:column;
    align-items: center;
  }
  h1 {
    margin-bottom: 3rem;
    ${headingStyle}
  }
  p {
    font-size: 2.5rem;
    color: #bcbac1;
    letter-spacing: 0.05rem;
    line-height: 3.5rem;
    @media (max-width: 755px) {
      font-size: 2.3rem;
      line-height: 3rem;
    }
    @media (max-width: 711px) {
      font-size: 2rem;
      line-height: 3rem;
    }
    @media (max-width: 450px) {
    
    }
    
    a {
      color: ${aquaDark};
      transition: 150ms ease-in;
      &:hover {
        border-bottom: 0.1rem solid white;
        color: white;
      }
    }
  }
`;

export const ProjectGallery = styled.div`
  margin: 4rem 0;
`;

export const Project = styled.section`
  ${flex()}
  align-items: center;
  /* margin-bottom: 10rem; */
  /* screenshot of the project application */
  .project-thumbnail {
    width: 50%;
    @media (max-width: 610px) {
      display: none;
    }
    img {
      width: 90%;
      height: auto;
    }
  }
  .inverted-thumbnail {
    text-align: right;
  }
  .project-description {
   
    width: 50%;
    padding: 0.5rem 0;
    @media (max-width: 610px) {
      width: 100%;
    }
    @media (max-width: 480px) {
      text-align: center
    }
    /* project team category */
    h3 {
      margin-bottom:0;
      font-size: 1.8rem;
      letter-spacing: 0.2rem;
      line-height: 2.5rem;
      color: ${blackLight};
      @media (max-width: 755px) {
        font-size: 1.6rem;
        line-height: 2rem;
      }
      @media (max-width: 610px) {
        font-size: 1.5rem;
      }
      @media (max-width: 400px) {
        font-size: 1.4rem;
      }
    }
    /* project title */
    h2 {
      margin-top:0;
      margin-bottom: 1rem;
      font-size: 3.5rem;
      font-weight: 700;
      color: ${aquaDark};
      @media (max-width: 755px) {
        font-size: 2.5rem;
        line-height: 3rem;
      }
    }

    /* project role*/
    h4{
      margin: 0;
      color: #bcbac1;



    }
    /* project mini description */
    p {
      font-size: 1.8rem;
      line-height: 3rem;
      color: ${blackLight};
      margin-bottom: 3.5rem;
      @media (max-width: 1066px) {
      }
      @media (max-width: 610px) {
      }
      @media (max-width: 390px) {     }
    }
    .long-description {
      height: 11rem;
      @media (max-width: 1111px) {
        height: 15rem;
      }
      @media (max-width: 610px) {
        height: 11rem;
      }
      @media (max-width: 444px) {
        height: 14rem;
      }
      @media (max-width: 345px) {
        height: 16rem;
      }
    }

    .long-description2 {
      width: 50%;
      
      @media (max-width: 1111px) {
      }
      @media (max-width: 610px) {
        width: 100%;
      }
      @media (max-width: 480px) {
        width: 100%
      }
      @media (max-width: 345px) {
      }
    }



    .btn-group2 {
      position: relative;
      margin-top: 3rem;
      font-size: 1.4rem;
      text-transform: uppercase;
      letter-spacing: 0.3rem;
      z-index: 1;
      @media (max-width: 480px) {
        display:flex;
        flex-flow: column;
        
       }
      a {
        margin-right: 3rem;
        transition: 150ms ease-in;
        @media (max-width: 755px) {
          margin-right: 2rem;
        }
        
      }

      
      /* View button */
      
      .app-btn {
       ${buttonDark}
       text-align: center;
        padding-left: 3.8rem;
        padding-right: 3.8rem;
        @media (max-width: 755px) {
          padding: 0.5rem 2.8rem;
        }
        @media (max-width: 480px) {
          margin-bottom: 1rem;
         }
      }
      /* Source button */
      .src-btn {
        ${buttonLight}
        text-align:center
        @media (max-width: 755px) {
          padding: 0.5rem 1.8rem;
        }
      }
      
    }
    
  
    .btn-group {
      display:flex;
      justify-content: flex-end;
      position: relative;
      margin-top: 3rem;
      font-size: 1.4rem;
      text-transform: uppercase;
      letter-spacing: 0.3rem;
      z-index: 1;
      @media (max-width: 480px) {
        display:flex;
        flex-flow: column;
        
       }
      a {
        margin-right: 3rem;
        transition: 150ms ease-in;
        @media (max-width: 755px) {
          margin-right: 2rem;
        }
       
      }

      
      /* View button */
      
      .app-btn {
       ${buttonDark}
        padding-left: 3.8rem;
        padding-right: 3.8rem;
        text-align: center;
        @media (max-width: 755px) {
          padding: 0.5rem 2.8rem;
        }
        @media (max-width: 480px) {
          margin-bottom: 1rem;
         }
      }
      /* Source button */
      .src-btn {
        ${buttonLight}
        text-align: center;
        @media (max-width: 755px) {
          padding: 0.5rem 1.8rem;
        }
      }
      
    }
    /* minions illustrations */
    .minions {
      margin-top: 5rem;
      text-align: center;
      img {
        width: 65%;
        height: auto;
      }
      @media (max-width: 610px) {
        display: none;
      }
    }
  }
  .mentor{
    width: 100%;
  } 
`;