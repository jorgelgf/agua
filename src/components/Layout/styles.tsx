import styled from "styled-components";
export const Container = styled.div`
  min-height: 100vh;
  min-width: 420px;
  max-width: 680px;
  padding-bottom: 30px;
  background-color: var(--bgColor);
  display: flex;
  justify-self: center;
  align-items: center;
  flex-direction: column;
  transform: translateX(-20px);
  animation: animeLeft 0.4s forwards;

  @media (max-width: 460px) {
    width: auto;
  }
  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;

export const FooterDiv = styled.footer`
  font-size: 12px;
  background-color: var(--bgColor);
  color: white;
`;
