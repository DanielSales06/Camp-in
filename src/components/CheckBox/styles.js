import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  
  > input {
  position: absolute;
  top: 0;
  margin: 0;
  width: 2rem;
  height: 2rem;
  opacity: 0;
  }

  > label {
    display: flex;
    align-items: center;
    gap: .5rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;

    color: ${({theme}) => theme.COLORS.GRAY};

    :before {
    content: "";
    width: 2rem;
    height: 2rem;
    display: block;
    
    border: 1px solid ${({theme}) => theme.COLORS.GRAY};
    border-radius: .4rem;
    }
  }

  input:checked +label::before {
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.6667 1L5.50004 10.1667L1.33337 6' stroke='%23473404' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({theme}) => theme.COLORS.YELLOW};
  border: 1px solid ${({theme}) => theme.COLORS.YELLOW};
  }
`;