import React from "react";
import * as S from '../Container/styles'

import Account from "../Account";


const Container = () => {
  return (
    <S.Container>
      <h1>Olá Fulano!</h1>
      <S.Conteudo>
        <Account />
      </S.Conteudo>
    </S.Container>
  );
};

export default Container;