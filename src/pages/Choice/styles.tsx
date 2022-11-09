import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

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
export const ContainerInformation = styled.div`
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
  @media (max-width: 516px) {
    width: auto;
  }

  span {
    margin: 0 36px 0 36px;
  }
`;

export const ItemProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  margin-top: 35px;
  color: var(--colorFontProduct);

  @media (max-width: 520px) {
    font-size: 1rem;
    width: 60%;
  }
`;

export const DivName = styled.div`
  width: 200px;
  @media (max-width: 520px) {
    width: 150px;
  }
`;
export const PlusButton = styled.button`
  color: var(--colorIconGreen);
  cursor: pointer;
  width: auto;
  background-color: transparent;
  border: none;
`;
export const LessSpan = styled.button`
  color: var(--colorIconRed);
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const ContainerInformationTotal = styled.div`
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
  span {
    margin: 0 0 0 36px;
  }
  @media (max-width: 516px) {
    width: 310px;
  }
`;

export const TotalInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100px;
  font-size: 1.5rem;
  @media (max-width: 520px) {
    font-size: 25px;
  }
`;
export const ButtonDecision = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
`;

export const DivButton = styled.div`
  width: 100%;
  margin-top: 59px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 500px) {
    width: 310px;
  }
`;
