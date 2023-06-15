import styled from "styled-components";

export const Button = styled.button`
  width: 160px;
  height: 50px;

  background-color: transparent;
  border: 1px solid #333;
  border-radius: 15px;
  margin-top: 60px;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 1.15px;
  cursor: pointer;
  box-shadow: inset 1px 1px 4px #f9f9f9, inset -1px -1px 4px #f9f9f9, 2px 2px 4px #a29e9e, -2px -2px 4px #a29e9e;
  transition: .45s;

  &:hover {
    background-color: #333;
    color: #f9f9f9;
    transform: scale(1.1);
    transition: .45s;
    box-shadow: none;
  }
`

export const FormCont = styled.div`
  width: 40%;
  margin: 60px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  background-color: #f3f3f3;
  padding: 20px;
  box-shadow: inset 1px 1px 4px #f9f9f9, inset -1px -1px 4px #f9f9f9, 2px 2px 4px #a29e9e, -2px -2px 4px #a29e9e;

  input, select {
    width: 400px;
    height: 50px;
    margin: 6px 0 10px;

    padding-left: 25px;
    font-size: 18px;
    letter-spacing: .15px;
    border: none;
    outline: none;

    font-family: 'Montserrat', sans-serif;
    background-color: #f7f4f3;
    transition: .25s ease;
    border-radius: 8px;

    box-shadow: inset 2px 2px 4px #d2d5da,
      inset -2px -2px 4px #ececec;

    label {
      font-size: 20px;
    }

    &:focus {
      box-shadow: inset 4px 4px 6px #a0a5a8,
        inset -4px -4px 6px #e3e2e2;
    }
  }
`
