
import styled from "styled-components";
import Background from "../../assest/backgraund2.svg";

export const Container = styled.div`
  background: url("${Background}") no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`;


export const Image = styled.img`
  margin-top: 30px;
`;

export const User= styled.li`

display: flex;
align-items: center;
margin-top: 20px;
justify-content: space-around;
 background: rgba(255,255,255,0.25);
box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
width: 342px;
height:58px;
border: none;
outline:none;
border-radius: 14px 14px 14px 14px;
gap:20px;

p {
  font-size: 20px;
font-weight: normal;
line-height: 28px;
font-style: normal;


color: #ffffff;

}

button {

  background: none;
  border: none;
  cursor: pointer;

}


 

`;