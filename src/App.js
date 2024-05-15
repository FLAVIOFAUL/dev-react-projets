import React, { useState, useRef, useEffect } from "react";

import Axios from "axios";
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
import axios from "axios";


function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()


  async function addNewUser() {

  const {data: newUser } = await axios.post("http://localhost:3001/users",{
  name:inputName.current.value, 
  age: inputAge.current.value,
   } );
    setUsers([ ...users, newUser ]),
        
  
  useEffect (() => {
     async function fetchUsers(){
    const {data: newUsers} = await axios.get("http://localhost:3001/users");

    setUsers(newUsers);
     }

     fetchUsers()
  },[])
  
  function deleteUser(userId){
    await axios.delet("http://localhost:3001/users/${userId}")
  const newUsers =
   users.filter
  ( user => userId !== userId)
  setUsers (newUsers);
  }
}
  return (
    <Container>
      <Image alt="logo-imagem" src={People} />

      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar
          <img alt="seta" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
                </button>

            </User>
          ))
          }
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;
