import styled from "styled-components";
import { wrapper } from "../../styles/mixins.style";

export const MainContainer = styled.div`
  ${wrapper()}
  .active-nav {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.01);
    background: #747475;

  }
`;

export const MainWrapper = styled.div`
  /* border: 2px solid lightgreen; */
  ${wrapper("100%", "0 auto")} /* margin-top: 9rem; */
`;