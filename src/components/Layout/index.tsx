import * as S from "./styles";
import * as React from "react";

interface LayoutProp {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProp) {
  return (
    <>
      <S.Container>{children}</S.Container>
    </>
  );
}
