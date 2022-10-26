import { useEffect } from "react";
import { Header } from "../../components/Header";
import Layout from "../../components/Layout";

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
      <a href={`https://wa.me/558491731740?text=${info}`}>enviar</a>
    </Layout>
  );
}

//      <a href=`https://wa.me/558491731740?text=${total}`></a>
