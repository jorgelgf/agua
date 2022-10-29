import Button from "../../components/Button";
import { Header } from "../../components/Header";
import Layout from "../../components/Layout";
import { themes } from "../../styles/styles";
import * as S from "./styles";

export default function SendOrder() {
  const text = `Olá! Estou entrando em contato para realizar um pedido.\n
  Segue abaixo as informações necessárias...\n
  *Nome*: ${localStorage.getItem("Nome")},
  *Contato*: ${localStorage.getItem("Contato")},
  *Rua*: ${localStorage.getItem("Rua")},
  *Bairro*: ${localStorage.getItem("Bairro")},
  *CEP*: ${localStorage.getItem("CEP")},
  *Número*: ${localStorage.getItem("Numero")},
  *Pagamento*: ${localStorage.getItem("Pagamento")},
  *Troco*: ${localStorage.getItem("Troco")},
  ` as string;
  const info = window.encodeURIComponent(text) as string;
  return (
    <Layout>
      <Header />
      <S.Link href={`https://wa.me/5584996222569?text=${info}`}>
        <Button
          backgroundColor={themes.colorButtonGreen}
          color={themes.colorTextButtonGreen}
        >
          ENVIAR
        </Button>
      </S.Link>
    </Layout>
  );
}

//      <a href=`https://wa.me/558491731740?text=${total}`></a>
