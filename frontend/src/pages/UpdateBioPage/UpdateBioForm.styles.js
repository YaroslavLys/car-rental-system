import styled from "styled-components";


export const FormContainer = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 10%;
`

export const Form = styled.form`
  padding: 50px 50px 40px;
  margin: auto;
  border: 1px solid #f9f9f9;
  background-color: #f6f6f6;
  border-radius: 16px;
  box-shadow: inset 2px 2px 8px #f3f3f3, inset -2px -2px 8px #f3f3f3, 1px 1px 8px #ccc, -1px -1px 8px #ccc;`

export const ErrorText = styled.p`
  color: #ff0000;
  font-size: 16px;
`
export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 18px;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  
  &:focus {
    outline: rgba(51, 51, 51, 0.6) auto 1px;
  }
`
export const Button = styled.button`
  display: flex;
  margin: auto;
  padding: 10px 24px;
  font-size: 16px;
  color: #f9f9f9;
  border: 1px solid #f3f3f3;
  background-color: rgba(51, 51, 51, 0.75);
  border-radius: 12px;
  transition: .3s linear;
  margin-top: 20px;
  
  &:hover {
      cursor: pointer;
      border: 1px solid #333;
      background-color: #333;
      transition: .3s linear;
      box-shadow: 2px 2px 4px #e0e0e0, -2px -2px 4px #e0e0e0;
  }

`