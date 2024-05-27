import styled from "styled-components";




export const Button = styled.button`
  width: 342px;
  height: 74px;
  border: ${props => props.isBack ? "1px solid #ffffff" : "none"};
  border-radius: 14px;
  background: ${props => props.isBack ? "transparent" : "rgba( 0, 0, 0, 0.8)"};
  margin-top: 130px;
  font-size: 17px;
  font-weight: bold;
  font-style: normal;
  line-height: 28px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: ${props => props.isBack ? "rotateY(180deg)" : "none"};
  }
`;