import React from "react";
import * as S from '../Container/styles'

import Account from "../Account";
import Extract from "../Extract";


const Container = () => {
  return (
    <S.Container>
      <S.Titulo>Olá Fulano!</S.Titulo>
      <S.Conteudo>
        <Account />
        <Extract />
      </S.Conteudo>
    </S.Container>
  );
};

export default Container;