import styled from "styled-components";
export const ContainerCenter = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--bgColor);
  width: 100%;
`;

export const QuestionContainer = styled.div`
  margin-top: 72px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 516px) {
    width: 80%;
    align-items: center;
  }
`;

export const ItemHeader = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 30px;
  margin: 5px 0;
  padding: 0;
  color: var(--colorFontOrder);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 516px) {
    font-size: 1rem;
    margin: 0;
    width: 60%;
  }
`;

export const ContainerInformation = styled.button`
  border: none;
  width: 428px;
  height: 48px;
  margin-top: 40px;
  background-color: var(--colorBgDivModal);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: var(--bgColor);
  cursor: pointer;
  transition: 0.3s ease all;
  &:hover {
    filter: brightness(1.08);
  }

  @media (max-width: 516px) {
    width: auto;
  }

  span {
    margin: 0 36px 0 36px;
  }
`;

export const DivButton = styled.div`
  width: 100%;
  margin-top: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ButtonDecision = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
`;

export const DivModal = styled.div`
  position: absolute;
  top: 50;
  left: 50;
  width: 100%;
  max-height: 380px;
  border: 2px solid white;
  z-index: 1;
  background-color: var(--colorBgDivModal);
  color: var(--colorFontDark);
  border-radius: 5px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 30px;
  div {
    width: auto;
    height: auto;
    margin: 30px 27px 46px 35px;

    p {
      margin: 0;
    }
  }
`;

export const Modal = styled.div`
  position: static;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--bgColor);
  opacity: 0.2;
  z-index: 0;
`;
