import { FormEvent } from "react";
import * as S from "./styles";

interface InputProps {
  label?: string;
  type: string;
  mandatory?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  SX?: object;
}

const Input = ({ label, type, mandatory, onChange, SX = {} }: InputProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <S.ContainerForm onSubmit={handleSubmit}>
        <label>
          {label}
          {mandatory && <span>*</span>}
        </label>
        <input type={type} onChange={onChange} />
      </S.ContainerForm>
    </>
  );
};

export default Input;
