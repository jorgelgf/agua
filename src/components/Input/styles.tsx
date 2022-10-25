import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  @media (max-width: 300px) {
    width: 70%;
  }
  label {
    color: var(--colorFontForm);
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    margin-top: 17px;

    span {
      color: var(--colorIconRed);
      margin-left: 0.5rem;
    }
  }

  input {
    margin-top: 11px;
    width: 363px;
    height: 57px;
    padding: 0 0.5rem;
    border-radius: 5px;
    font-size: 20px;
    color: var(--colorFontDark);
    text-decoration: none;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;

    font-size: 23px;
    line-height: 23px;
    @media (max-width: 300px) {
      width: 300px;
    }
  }
`;

export const InputMoney = styled.input`
  padding: 0 0.5rem;
  border-radius: 5px;
  font-size: 20px;
  color: var(--colorFontDark);
  text-decoration: none;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  height: 57px;
  font-size: 23px;
  line-height: 23px;
  margin: 100px;
  text-align: center;
`;
