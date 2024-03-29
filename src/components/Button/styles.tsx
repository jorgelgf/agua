import styled from "styled-components";

export const Button = styled.button`
  width: auto;
  padding: 1rem 2rem;

  font-family: "Roboto", sans-serif;
  text-decoration: none;
  font-style: normal;
  font-weight: 900;
  font-size: 26px;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.3s ease all;
  &:hover {
    filter: brightness(1.08);
  }
  @media (max-width: 460px) {
    font-size: 1rem;
    padding: 1rem 2rem;
  }
`;
