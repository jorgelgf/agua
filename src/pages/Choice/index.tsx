import { Header } from "../../components/Header";
import Layout from "../../components/Layout";
import * as S from "./styles";
import { product } from "../../services/product/product";
import { useEffect, useState } from "react";
import Button from "../../components/Button/";
import { themes } from "../../styles/styles";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Choice() {
  const navigation = useNavigate();

  const [santaC, setSantaC] = useState(0);
  const [natal, setNatal] = useState(0);
  const [fonteP, setFontP] = useState(0);

  const [total, setTotal] = useState(0.0);
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    localStorage.setItem("total", `${total}`);

    total > 0 && setValidation(true);
  }, [total]);

  useEffect(() => {
    validation && toast.success("Pedido salvo!");
  }, [validation]);

  const handleClickPlusS = () => {
    return setSantaC(santaC + 1);
  };
  const handleClickLessS = () => {
    if (santaC > 0) setSantaC(santaC - 1);
  };

  const handleClickPlusN = () => {
    return setNatal(natal + 1);
  };
  const handleClickLessN = () => {
    if (natal > 0) setNatal(natal - 1);
  };
  const handleClickPlusF = () => {
    return setFontP(fonteP + 1);
  };
  const handleClickLessF = () => {
    if (fonteP > 0) setFontP(fonteP - 1);
  };

  const handleClickSave = async () => {
    try {
      setTotal(
        +product[0].value * santaC +
          +product[1].value * natal +
          +product[2].value * fonteP
      );
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  return (
    <S.Container>
      <title>Escolha sua água</title>

      <S.ContainerCenter>
        <Layout>
          <Header />
          <S.QuestionContainer>
            <S.ItemHeader>QUAL ÁGUA</S.ItemHeader>
            <S.ItemHeader>DESEJA ESCOLHER?</S.ItemHeader>
          </S.QuestionContainer>
          <S.ContainerInformation>
            {" "}
            <span>MARCA</span> <span>QUANT.</span>{" "}
          </S.ContainerInformation>
          <S.ItemProduct>
            <S.DivName>{product[0].name}</S.DivName>
            <S.PlusButton onClick={handleClickPlusS}>+</S.PlusButton>
            <S.LessSpan onClick={handleClickLessS}>-</S.LessSpan>
            <span>{santaC}</span>
          </S.ItemProduct>
          <S.ItemProduct>
            <S.DivName>{product[1].name}</S.DivName>
            <S.PlusButton onClick={handleClickPlusN}>+</S.PlusButton>
            <S.LessSpan onClick={handleClickLessN}>-</S.LessSpan>
            <span>{natal}</span>
          </S.ItemProduct>
          <S.ItemProduct>
            <S.DivName>{product[2].name}</S.DivName>
            <S.PlusButton onClick={handleClickPlusF}>+</S.PlusButton>
            <S.LessSpan onClick={handleClickLessF}>-</S.LessSpan>
            <span>{fonteP}</span>
          </S.ItemProduct>

          <S.ContainerInformationTotal>
            <span>TOTAL</span>{" "}
            <span>
              R$:
              <S.TotalInput
                type="number"
                onChange={() =>
                  setTotal(
                    +product[0].value * santaC +
                      +product[1].value * natal +
                      +product[2].value * fonteP
                  )
                }
                value={
                  +product[0].value * santaC +
                  +product[1].value * natal +
                  +product[2].value * fonteP
                }
                readOnly
              />
            </span>
          </S.ContainerInformationTotal>
          <S.DivButton>
            {validation === false ? (
              <Button
                backgroundColor={themes.colorButtonBlue}
                color={themes.colorTextButtonBlue}
                onClick={handleClickSave}
              >
                SALVAR
              </Button>
            ) : (
              <S.ButtonDecision>
                <Button
                  backgroundColor={themes.colorButtonYellow}
                  color={"#0c243a"}
                  onClick={() => {
                    setTotal(0);
                    setValidation(false);
                  }}
                >
                  VOLTAR
                </Button>
                <Button
                  backgroundColor={themes.colorButtonGreen}
                  color={themes.colorTextButtonGreen}
                  onClick={() => {
                    navigation("/Payment");
                  }}
                >
                  AVANÇAR
                </Button>
              </S.ButtonDecision>
            )}
          </S.DivButton>
        </Layout>
      </S.ContainerCenter>
    </S.Container>
  );
}
