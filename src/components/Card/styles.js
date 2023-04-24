import styled from "styled-components";

export const Container = styled.div`
  width: 50rem;
  height: 50rem;

  background-color: ${({theme}) => theme.COLORS.BLACK_200};

  border-radius: .4rem;
  display: flex;
  justify-content: center;

  @media(max-width:600px) {
    width: auto;

    background-color: transparent;

    animation: fadeIn;
    animation-duration: 1s; 
  }
`;

export const Fieldset = styled.fieldset`
  border: none;

  margin: auto;

  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;

    color: ${({theme}) => theme.COLORS.YELLOW};
  }

  @media(max-width:600px) {
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  margin-bottom: 2.5rem;

  > legend {
    display: flex;
    align-items: center;
    gap: 1rem;

    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3.6rem;

    color: ${({theme}) => theme.COLORS.BAGE};

    svg {
      color: ${({theme}) => theme.COLORS.YELLOW}
    }
  }

  > p {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;

export const Form = styled.form`
  margin-bottom: 2rem;

  > label {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;

    color: ${({theme}) => theme.COLORS.GRAY};

    display: block;
    margin-bottom: .5rem;
  }

    div:focus-within {
    border: 1px solid ${({theme}) => theme.COLORS.YELLOW};
    color: ${({theme}) => theme.COLORS.YELLOW};
    box-shadow: 0px 0px 0px 2px #FFDE88;
    border-radius: 4px;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  margin-bottom: 2rem; 
`;

export const Footer = styled.footer`
  margin-top: 1.4rem;
  text-align: center; 

  > a {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;

    color: ${({theme}) => theme.COLORS.YELLOW};
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;

    color: ${({theme}) => theme.COLORS.YELLOW};
  }
`;