import React from "react";
import * as S from '../Container/styles'

import Account from "../Account";


const Container = () => {
  return (
    <S.Container>
      <S.Titulo>Olá Fulano!</S.Titulo>
      <S.Conteudo>
        <Account />
      </S.Conteudo>
    </S.Container>
  );
};

export default Container;