import styled from "styled-components";
export const Section = styled.section`
  width: 1100px;
  height: 700px;
  margin: auto;
  display: flex;
  background-color: #f3f3f3;
  box-shadow: 10px 10px 10px #dadada,-10px -10px 10px #f9f9f9;
  border-radius: 12px;
`
export const RightPart = styled.div`
  width: 60%;
  padding: 25px;
  background-color: #f8f7f7;
  border-radius: 12px;
  box-shadow: inset 0px 0px 10px #d3d3d5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const LeftPart = styled.div`
  width: 40%;
  padding: 25px;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const Title = styled.h1`
  font-size: 30px;
  color: #333;
`
export const Description = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: #a0a5a8;
`
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    width: 350px;
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

  box-shadow: inset 1px 1px 2px #bfc2c4,
    inset -1px -1px 2px #a0a5a8;

  transition: .45s;

  &:hover {
    background-color: #333;
    color: #f9f9f9;
    transform: scale(1.1);
    transition: .45s;
    box-shadow: none;
  }
`