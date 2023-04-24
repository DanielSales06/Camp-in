import styled from "styled-components";

import backgroundImg from "../../assets/Background.png";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
`;

export const Content = styled.div`
  margin: 4rem;

  > div {
    margin: auto 2rem;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width:600px) {
    width: 100vw;
    > div {
    margin: auto 1.5rem;
    }
   
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  @media(max-width:620px) {
    display: none;
  }
`;