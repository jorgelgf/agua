import logo from "../../_img/suaAgua1.png";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Container>
      <img src={logo} alt="Sua Água" />
    </S.Container>
  );
};

export { Header };
