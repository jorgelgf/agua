import { Header } from "../../components/Header";
import Layout from "../../components/Layout";
import { useState } from "react";
import * as S from "./styles";
import Button from "../../components/Button";
import { themes } from "../../styles/styles";
//import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { InputMoney } from "../../components/Input/InputMoney";

export const SX = {
  backgroundColor: `${themes.colorButtonGreen}`,
  color: `${themes.colorTextButtonGreen}`,
};

export const SXDivButton = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "30px",
  padding: "0",
};

export default function Payment() {
  const [stateBoolean, setStateBoolean] = useState(false);
  const [modal, setModal] = useState(false);
  const [money, setMoney] = useState(false);
  const [card, setCard] = useState(false);
  const [pix, setPix] = useState(false);
  const [value, setValue] = useState("");

  //const navigation = useNavigate();

  const handleClickBack = () => {
    setStateBoolean(false);
    setMoney(false);
    setCard(false);
    setPix(false);
    toast.warning("Escolha novamente!");
    setModal(false);
  };

  const handleClickMoney = () => {
    localStorage.setItem("Pagamento", "Em dinheiro");
    toast.success("Pagamento em DINHEIRO!");
    setMoney(true);
    setCard(false);
    setPix(false);
    setStateBoolean(true);
  };
  const handleClickCard = () => {
    localStorage.setItem("Pagamento", "Em cartão");
    toast.success("Pagamento no CARTÃO!");
    setMoney(false);
    setCard(true);
    setPix(false);
    setStateBoolean(true);
  };
  const handleClickPix = () => {
    localStorage.setItem("Pagamento", "Em PIX");
    toast.success("Pagamento via PIX!");
    setMoney(false);
    setCard(false);
    setPix(true);
    setStateBoolean(true);
  };
  const handleClickNext = () => {
    money && setModal(true);
  };

  const Total = (): React.ReactNode => {
    return (
      <>
        <S.ContainerCenter>
          <Header />
          <Layout>
            <S.QuestionContainer>
              <S.ItemHeader>ESCOLHA UMA DAS</S.ItemHeader>
              <S.ItemHeader>FORMAS DE PAGAMENTO?</S.ItemHeader>
            </S.QuestionContainer>
            {money ? (
              <>
                <S.ContainerInformation style={SX}>
                  <span>DINHEIRO</span>
                </S.ContainerInformation>
              </>
            ) : (
              <>
                <S.ContainerInformation onClick={handleClickMoney}>
                  <span>DINHEIRO</span>
                </S.ContainerInformation>
              </>
            )}
            {card ? (
              <>
                <S.ContainerInformation style={SX}>
                  <span>CARTÃO DE CRÉDITO/DÉBITO</span>
                </S.ContainerInformation>
              </>
            ) : (
              <>
                <S.ContainerInformation onClick={handleClickCard}>
                  <span>CARTÃO DE CRÉDITO/DÉBITO</span>
                </S.ContainerInformation>
              </>
            )}
            {pix ? (
              <>
                <S.ContainerInformation style={SX}>
                  <span>PIX</span>
                </S.ContainerInformation>
              </>
            ) : (
              <>
                <S.ContainerInformation onClick={handleClickPix}>
                  <span>PIX</span>
                </S.ContainerInformation>
              </>
            )}

            <S.DivButton>
              {stateBoolean && (
                <div style={SXDivButton}>
                  <Button
                    backgroundColor={themes.colorButtonYellow}
                    color="#0c243a"
                    onClick={handleClickBack}
                  >
                    VOLTAR
                  </Button>
                  <div style={{ margin: "0 0 0 10px" }}>
                    <Button
                      backgroundColor={themes.colorButtonGreen}
                      color={themes.colorTextButtonGreen}
                      onClick={handleClickNext}
                    >
                      FINALIZAR
                    </Button>
                  </div>
                </div>
              )}
            </S.DivButton>
          </Layout>
        </S.ContainerCenter>
      </>
    );
  };

  if (modal)
    return (
      <>
        {" "}
        <S.DivModal>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {" "}
            <p>INSIRA O VALOR</p>
            <p> PARA O TROCO</p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <span> R$:</span>
            <InputMoney
              type={"number"}
              SX={{ width: "80px", marginLeft: "30px", margin: "10px" }}
              onChange={(event) => setValue(event.target.value)}
            />
            {value && (
              <div style={SXDivButton}>
                <Button
                  backgroundColor={themes.colorButtonYellow}
                  color="#0c243a"
                  onClick={handleClickBack}
                >
                  VOLTAR
                </Button>
                <div style={{ margin: "0 0 0 10px" }}>
                  {" "}
                  <Button
                    backgroundColor={themes.colorButtonGreen}
                    color={themes.colorTextButtonGreen}
                    onClick={handleClickNext}
                  >
                    PROSSEGUIR
                  </Button>
                </div>
              </div>
            )}
          </div>
        </S.DivModal>
        <S.Modal onClick={handleClickBack}>{Total()}</S.Modal>
      </>
    );
  return <>{Total()}</>;
}
