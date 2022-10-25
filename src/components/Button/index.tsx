import * as S from "./styles";
interface ButtonProps {
  children: string;
  backgroundColor: string;
  color: string;
  onClick?: () => void;
}

const Button = ({ children, backgroundColor, color, onClick }: ButtonProps) => {
  return (
    <>
      <S.Button
        style={{ backgroundColor, color }}
        onClick={onClick}
        type="submit"
      >
        {children}
      </S.Button>
    </>
  );
};

export default Button;
