import * as S from "./styles";

interface InputMoneyProps {
  type: string;
  SX: object;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputMoney = ({ type, SX, onChange }: InputMoneyProps) => {
  return (
    <>
      <S.InputMoney onChange={onChange} style={SX} type={type}></S.InputMoney>
    </>
  );
};
