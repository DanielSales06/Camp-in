import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.YELLOW};
  color: ${({theme}) => theme.COLORS.BROWN};

  height: 5.1rem;
  border: none;
  padding: 1.2rem 2.4rem;
  border-radius: .4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Poppins' sans-serif;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.7rem;

  letter-spacing: 0.015em;
  text-transform: uppercase;

`;