import styled from "styled-components";

export const CarDetails = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;

  img {
    align-self: center;
  }
`
export const GoBack = styled.i`
  position: absolute;
  z-index: 0;
  font-size: 20px;
  font-style: normal;
  color: #a1a0a0;
  left: 1%;

  transition: .3s;

  &:hover {
    cursor: pointer;
    color: #333;
    transition: .3s;
  }
`
export const Back = styled.i`
  font-size: 30px;

  &:hover {
    cursor: pointer;
  }
`
export const CarPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  align-items: center;
  width: 40%;
`
export const CarName = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`
export const TechnicalInfo = styled.ul`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 40px auto;
  list-style-type: none;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: #f3f3f3;
  padding: 20px;
  box-shadow: inset 1px 1px 12px #f9f9f9, inset -1px -1px 12px #f9f9f9, 1px 1px 10px #b9b6b6, -1px -1px 10px #b9b6b6;

  p {
    font-size: 24px;
    font-weight: 600;
  }
`
export const Button = styled.button`
  width: 160px;
  height: 50px;

  background-color: transparent;
  border: 1px solid #333;
  border-radius: 15px;
  margin-top: 60px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1.15px;
  cursor: pointer;

  box-shadow: inset 1px 1px 4px #bfc2c4,
    inset -1px -1px 4px #a0a5a8;

  transition: .45s;

  &:hover {
    background-color: #333;
    color: #f9f9f9;
    transform: scale(1.1);
    transition: .45s;
    box-shadow: none;
  }
`

export const CreateOrderButton = styled.button`
  width: 50%;
  padding: 16px 0;
  background-color: transparent;
  border: 1px solid #333;
  border-radius: 15px;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 1.15px;
  cursor: pointer;

  box-shadow: inset 1px 1px 4px #bfc2c4,
    inset -1px -1px 4px #a0a5a8;

  transition: .45s;

  &:hover {
    background-color: #333;
    color: #f9f9f9;
    transform: scale(1.05);
    transition: .45s;
    box-shadow: none;
  }
`
export const Review = styled.ul`
  width: 35%;
  margin: 15px;
  list-style-type: none;

  border-radius: 8px;
  background-color: #f3f3f3;
  padding: 20px;

  ul {
    list-style: none;
  }

  p {
    font-size: 24px;
    margin: 15px;
  }

  li {
    font-size: 18px
  }
`
export const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 10px;
  gap: 10px;

  li {
    font-size: 20px;
  }
`