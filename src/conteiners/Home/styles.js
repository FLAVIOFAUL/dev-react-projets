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

export const ContainerItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%

    
  );

    border-radius: 61px 61px 0px 0px ;
    padding: 50px 36px ; 
    display: FLEX;
    flex-direction: COLUMN;
`;

export const H1 = styled.h1`


   
   font-size: 34px;
   font-weight: 700;
   line-height: 39.84px;
   text-align: center;
   color: #FFFFFF;
   margin-bottom: 80px;

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

export const Button = styled.button`

width: 342px;
height: 74px;
border:none;
border-radius: 14px 14px 14px 14px;
background: #000000CC;
margin-top: 130px;

font-size: 17px;
font-weight: bold;
font-style:normal;
line-height: 28px;
color: #FFFFFF;
cursor:pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover{

opacity: 0.8;

}
&:active{
opacity: 0.5;
}
`;

