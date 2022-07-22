import React from "react";

//Components
import Account from "../Account";
import Extract from "../Extract";

//UI
import {ContainerMain, Titulo, Conteudo} from "../../Components/UI";

const Container = () => {
  return (
    <ContainerMain>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Account />
        <Extract />
      </Conteudo>
    </ContainerMain>
  );
};

export default Container;