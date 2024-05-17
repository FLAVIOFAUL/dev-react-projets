import styled from "styled-components";
import Background from "../../assest/backgraund1.svg";


export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: FLEX;
  flex-direction: COLUMN;
  align-items: center;
  gap: 40px;
  
`;

export const Image = styled.img`
  margin-top: 30px;
`;



export const InputLabel = styled.p`


font-size: 18px;
font-weight: bold;
line-height: 22px;
font-style: normal;
letter-spacing: -0.408px;

color: #EEEEEE;



`;

export const Input = styled.input`

width: 342px;
height: 58px;
border: none;
outline: none;
top: 193px;
padding-left: 25px;
margin-bottom: 25px;
box-shadow: 0px 4px 4px 0px #00000040;
gap: 0px;
border-radius: 14px 14px 14px 14px;

background: #FFFFFF40;

font-size: 20px;
font-weight: 400;
line-height: 28.13px;
text-align: left;


`;



