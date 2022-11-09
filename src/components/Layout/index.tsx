import * as S from "./styles";
import * as React from "react";

interface LayoutProp {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProp) {
  return (
    <>
      <S.Container>{children}</S.Container>

      <S.FooterDiv>
        Desenvolvido por:{" "}
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://github.com/jorgelgf"
        >
          Jorge Gurgel
        </a>
      </S.FooterDiv>
    </>
  );
}
