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

