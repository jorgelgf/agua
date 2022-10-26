import { useEffect } from "react";
import Button from "../../components/Button";
import { Header } from "../../components/Header";
import Layout from "../../components/Layout";
import { themes } from "../../styles/styles";

export default function SendOrder() {
  useEffect(() => {}, []);
  const total = {
    Nome: `${localStorage.getItem("Nome")}`,
    Contato: `${localStorage.getItem("Contato")}`,
    Rua: `${localStorage.getItem("Rua")}`,
    Bairro: `${localStorage.getItem("Bairro")}`,
    CEP: `${localStorage.getItem("CEP")}`,
    Número: `${localStorage.getItem("Numero")}`,
    Pagamento: `${localStorage.getItem("Pagamento")}`,
    Troco: `${localStorage.getItem("Troco")}`,
  };

  const info = JSON.stringify(total);
  return (
    <Layout>
      <Header />
      <a href={`https://wa.me/5584996222569?text=${info}`}>
        <Button
          backgroundColor={themes.colorButtonGreen}
          color={themes.colorTextButtonGreen}
        >
          enviar
        </Button>
      </a>
    </Layout>
  );
}

//      <a href=`https://wa.me/558491731740?text=${total}`></a>
