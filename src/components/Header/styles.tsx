import styled from "styled-components";
export const Container = styled.div`
  min-width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  margin-top: 27px;
  background-color: var(--colorFontDark);
  @media (max-width: 460px) {
    width: auto;
  }
`;
