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