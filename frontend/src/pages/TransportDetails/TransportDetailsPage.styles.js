import styled from "styled-components";

export const CarDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  img {
     align-self: center;
   }
`
export const CarName = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`

export const TechnicalInfo = styled.ul`
   
  width: 50%;
  margin: auto;
  list-style-type: none;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: #f3f3f3;
  padding: 20px;
  box-shadow: inset 1px 1px 4px #f9f9f9, inset -1px -1px 4px #f9f9f9, 2px 2px 4px #a29e9e, -2px -2px 4px #a29e9e;

  p {
    font-size: 24px;
    margin:15px;
    font-weight: 600;
  }
  li {
  font-size: 20px
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
  font-size: 16px;
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
  width: 200px;
  height: 80px;

  background-color: transparent;
  border: 1px solid #333;
  border-radius: 15px;
  margin-top: 60px;
  font-weight: 700;
  font-size: 24px;
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


export const Review = styled.ul`
  ul{ 
  list-style: none;
  }
  width: 35%;
  margin: 15px;
  list-style-type: none;

  border-radius: 8px;
  background-color: #f3f3f3;
  padding: 20px;
 

  p {
    font-size: 24px;
    margin:15px;
  }
  li {
  font-size: 18px
  }
`