import styled from "styled-components";
import { corPrimaria } from "../UI/variaveis";

  //button tema
export const BtnTema = styled.button`
  position: absolute;
  top: 4vh;
  right: 30px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

  // Header
export const ContainerHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

export const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  background: ${(props) => (props.primary ? "white" : corPrimaria)};
  color: ${(props) => (props.primary ? corPrimaria : "white")};
`;


  //Container
export const ContainerMain = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

export const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Titulo = styled.h1`
  color: ${({ theme }) => theme.text};
  padding: 25px 0;
`;

  //Account
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.inside};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

export const BoxBalance = styled.div`
  fontSize:26px,
  padding: 20px 0;
`;

export const Icone = styled.img`
  height: 25px;
  width: 25px;
`;

export const IconeTema = styled(Icone)`
  filter: ${({ theme }) => theme.filter};
`;

export const Balance = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const Detail = styled.span`
  color: #41d3be;
  font-size: 24px;
`;

export const Button = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: #41d3be;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;

export const IconeMargin = styled(Icone)`
  margin-top: 2px;
`;

  //Items
export const Items = styled.div`
box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
border-radius: 10px;
margin: 2px 0;
display: flex;
align-items: center;
justify-content: space-around;
padding: 10px;
font-size: 12px;
`;

  //Item
export const Item = styled.div`
display: flex;
flex-direction: column;

.text {
  font-weight: bold;
}
`;






