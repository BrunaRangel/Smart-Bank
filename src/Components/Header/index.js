import React from "react";
import * as S from '../Header/styles'
import bank_logo from "../../assets/images/bank_logo.svg";

const Header = () => {
  return (
    <S.ContainerHeader>
      <S.Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <S.Btn primary href="https://google.com">
          Ajuda
        </S.Btn>
        <S.Btn href="https://google.com">Sair</S.Btn>
      </div>
    </S.ContainerHeader>
  );
};

export default Header;