import { useState, useEffect } from "react";
import Button from "../../components/Button/index";
import { themes } from "../../styles/styles";
import Layout from "../../components/Layout/index";
import { useNavigate } from "react-router";
import * as S from "./styles";
import { Header } from "../../components/Header";
import { toast } from "react-toastify";
export default function Index() {
  const navigation = useNavigate();

  const [permission, setPermission] = useState(false);
  const handleClick = () => {
    setPermission(true);
    navigation("/order");
  };

  const handleClickRegister = () =>
    toast.warning("Cadastro ainda está em desenvolvimento");
  useEffect(() => {
    localStorage.setItem("validation", `${permission}`);
  }, [permission]);

  return (
    <>
      <title>Sua água</title>
      <Layout>
        <Header />

        <S.DivButton1>
          <div style={{ marginTop: "120px" }}>
            <Button
              backgroundColor={themes.colorButtonGreen}
              color={themes.colorTextButtonGreen}
              onClick={handleClick}
            >
              FAÇA SEU PEDIDO AQUI
            </Button>
          </div>
        </S.DivButton1>

        <S.Link onClick={handleClickRegister}>FAÇA SEU CADASTRO AQUI</S.Link>
      </Layout>
    </>
  );
}
