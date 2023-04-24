import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.BLACK_200};
  color: ${({theme}) => theme.COLORS.GRAY};

  border: 1px solid ${({theme}) => theme.COLORS.GRAY};
  border-radius: .4rem;

  padding-left: 1.2rem; 

  margin-bottom: 2rem;
 
  > input {
   height: 4.4rem;
   width: 100%;

   padding: 0 1rem; 

   color: ${({ theme }) => theme.COLORS.GRAY};
   font-size: 1.4rem;
   background: none;

   border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }
`;