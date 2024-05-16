import styled from "styled-components";
import Background from "../../assest/backgraund2.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: FLEX;
  flex-direction: COLUMN;
  align-items: center;
  gap: 40px;
  height:100px;
  min-height: 100vh;
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
    backdrop-filter: blur(45px);
    padding: 50px 36px ; 
    display: FLEX;
    flex-direction: COLUMN;
    height:100%;
    min-height: calc( 100vh - 170px);
`;

export const H1 = styled.h1`


   
   font-size: 34px;
   font-weight: 700;
   line-height: 39.84px;
   text-align: center;
   color: #FFFFFF;
   margin-bottom: 80px;

`;



export const Button = styled.button`

width: 342px;
height: 74px;
border:1px solid #FFFFFF;
border-radius: 14px 14px 14px 14px;
background: transparent;
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
img {
transform: rotateY(180deg)
}
`;

