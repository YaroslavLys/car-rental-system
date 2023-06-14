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
  font-size: 24px;
  font-weight: bold;
`

export const TechnicalInfo = styled.ul`
  width: 70%;
  margin: auto;
  list-style-type: none;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: #f3f3f3;
  padding: 20px;
  box-shadow: inset 1px 1px 4px #f9f9f9, inset -1px -1px 4px #f9f9f9, 2px 2px 4px #a29e9e, -2px -2px 4px #a29e9e;

  p {
    font-size: 18px;
  }
`