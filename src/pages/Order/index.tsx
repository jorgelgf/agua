import { Header } from "../../components/Header/index";
import Input from "../../components/Input/index";
import { orderList } from "./OrderList";
import Button from "../../components/Button/index";
import { themes } from "../../styles/styles";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import * as S from "./styles";
import Layout from "../../components/Layout";

export default function Order() {
  const { name, contact, cep, address, number, district, complement } =
    orderList;
  const [validation, setValidation] = useState(false);
  const [user, setUser] = useState("");
  const [contactUser, setContactUser] = useState("");
  const [cepUser, setCepUser] = useState("");
  const [addressUser, setAddressUser] = useState("");
  const [numberUser, setNumberUSer] = useState("");
  const [districtUser, setDistrictUSer] = useState("");
  const [complementUser, setComplementUser] = useState("");

  const navigation = useNavigate();

  const handleClick = () => {
    if (
      user === "" ||
      contactUser === "" ||
      addressUser === "" ||
      numberUser === "" ||
      districtUser === ""
    ) {
      toast.warn("Preencha todos os campos");
      return setValidation(false);
    }
    localStorage.setItem(name, user);
    localStorage.setItem(contact, contactUser);
    localStorage.setItem(cep, cepUser);
    localStorage.setItem(address, addressUser);
    localStorage.setItem(number, numberUser);
    localStorage.setItem(district, districtUser);
    localStorage.setItem(complement, complementUser);
    setValidation(true);
    toast.success("Clique em avançar para prosseguir!");
    navigation("/choice");
  };

  return (
    <>
      <title>Seu pedido</title>
      <S.ContainerCenter>
        <Layout>
          <Header />
          <Input
            label={name}
            type={"text"}
            mandatory={true}
            onChange={(event) => setUser(event.target.value)}
          />
          <Input
            label={contact}
            type={"text"}
            mandatory={true}
            onChange={(event) => setContactUser(event.target.value)}
          />
          <Input
            label={cep}
            type={"text"}
            mandatory={false}
            onChange={(event) => setCepUser(event.target.value)}
          />
          <Input
            label={address}
            type={"text"}
            mandatory={true}
            onChange={(event) => setAddressUser(event.target.value)}
          />
          <Input
            label={number}
            type={"text"}
            mandatory={true}
            onChange={(event) => setNumberUSer(event.target.value)}
          />
          <Input
            label={district}
            type={"text"}
            mandatory={true}
            onChange={(event) => setDistrictUSer(event.target.value)}
          />
          <Input
            label={complement}
            type={"text"}
            mandatory={false}
            onChange={(event) => setComplementUser(event.target.value)}
          />
          <S.ButtonDiv>
            {validation ? (
              <>
                <Button
                  backgroundColor={themes.colorButtonGreen}
                  color={themes.colorTextButtonGreen}
                  onClick={() => console.log("next ok")}
                >
                  AVANÇAR
                </Button>
              </>
            ) : (
              <Button
                backgroundColor={themes.colorButtonBlue}
                color={themes.colorTextButtonBlue}
                onClick={handleClick}
              >
                SALVAR
              </Button>
            )}
          </S.ButtonDiv>
        </Layout>
      </S.ContainerCenter>
    </>
  );
}
