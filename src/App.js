import React from "react";

import People from "./assest/people.svg";
import Arrow from "./assest/arrow.svg";
import Trash from "./assest/trash.svg";
import {
  Container,
  Image,
  H1,
  ContainerItens,
  Input,
  InputLabel,
  Button,
  User,
} from "./styles";

function App() {
  const users = [
    { id: Math.random(), name: "Flavio", age: "42" },
    { id: Math.random(), name: "Nathan", age: "22" },
  ];

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />

      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" />

        <Button>
          Cadastrar
          <img alt="seta" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button><img src={Trash} alt="lata-de-lixo"/><button>
            
            </User>
          ))
          }
        </ul>
      </ContainerItens>
    </Container>
  ); 
}

export default App;
