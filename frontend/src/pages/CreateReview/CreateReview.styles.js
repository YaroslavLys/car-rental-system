import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 12px;
`
export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
`
export const ErrorText = styled.p`
  position: absolute;
  color: #ff0000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;


  &:focus {
    outline: rgba(51, 51, 51, 0.6) auto 1px;
  }
`
export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`
export const FormGroup = styled.div`
  color: #333;
  position: relative;
`

export const Button = styled.button`
  width: 100px;
  height: 40px;

  background-color: transparent;
  border: 1px solid #333;
  border-radius: 15px;
  margin-top: 60px;
  font-weight: 200;
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