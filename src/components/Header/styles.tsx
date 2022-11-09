import styled from "styled-components";
export const Container = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 27px;
  margin-bottom: 0;
  padding: 0;
  background-color: var(--colorFontDark);
  img {
    width: 250px;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 460px) {
    width: auto;
  }
`;
