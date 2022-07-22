import React from "react";

//icon
import bank_logo from "../../assets/images/bank_logo.svg";

//UI
import {ContainerHeader, Logo, BtnHeader} from "../../Components/UI";

const Header = () => {
  return (
    <ContainerHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader primary href="https://google.com">
          Ajuda
        </BtnHeader>
        <BtnHeader href="https://google.com">Sair</BtnHeader>
      </div>
    </ContainerHeader>
  );
};

export default Header;