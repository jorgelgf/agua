import styled from "styled-components";

export const ContainerCenter = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--bgColor);
  width: 100%;
  @media (max-width: 460px) {
    display: inline;
  }

  @media (min-height: 800px) {
    min-height: auto;
  }
`;
export const DivInput = styled.div`
  @media (max-width: 500px) {
    width: 310px;
  }
`;

export const ButtonDiv = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
  margin-right: 35px;
  width: 100%;
  @media (max-width: 500px) {
    width: 350px;
  }
`;
