import styled from "styled-components";

export const Upload = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-top: 20px;
  gap: 10px;
  
  button {
    padding: 8px;
    border: 1px solid #333;
    border-radius: 14px;
    background-color: inherit;
    transition: .4s linear;
    font-size: 16px;
    
    &:hover {
      cursor: pointer;
      background-color: #494949;
      color: #f9f9f9 ;
      
      transition: .4s linear;
    }
  }
`