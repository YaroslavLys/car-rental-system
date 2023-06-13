import styled from "styled-components";

export const FormWrapper = styled.div`
  position: relative;
  width: 100%;
`
export const GoBack = styled.i`
  position: absolute;
  z-index: 0;
  font-size: 20px;
  font-style: normal;
  top: -26%;
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

export const FormContainer = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 11%;
`
export const Form = styled.form`
  position: relative;
  padding: 120px 50px 40px;
  margin: auto;
  border: 1px solid #f9f9f9;
  background-color: #f3f3f3;
  border-radius: 16px;
  box-shadow: inset 2px 2px 8px #f3f3f3, inset -2px -2px 8px #f3f3f3, 1px 1px 8px #ccc, -1px -1px 8px #ccc;

  display: flex;
  flex-direction: column;
  gap: 40px;

  button {
    width: 45%;
    margin: auto;
    padding: 12px;

    font-size: 16px;
    color: #f9f9f9;
    border: 1px solid #f3f3f3;
    background-color: rgba(51, 51, 51, 0.75);
    border-radius: 12px;
    transition: .3s linear;

    &:hover {
      cursor: pointer;
      border: 1px solid #333;
      background-color: #333;
      transition: .3s linear;
      box-shadow: 2px 2px 4px #e0e0e0, -2px -2px 4px #e0e0e0;
    }

  }
`
export const FormGroup = styled.div`
  color: #333;
  position: relative;

  select {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid rgb(204, 204, 204);
    -webkit-appearance: listbox;
  }

  .form-amount {
    width: 70%;
    margin: auto;
  }

  .form-amount label {
    text-align: center;
  }

  .form-amount p {
    position: absolute;
    color: #ff0000;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  select:focus {
    outline: rgba(51, 51, 51, 0.6) auto 1px;
  }
  
`
export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
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
export const ErrorText = styled.p`
  position: absolute;
  color: #ff0000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`
export const FormSecurityDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    margin-bottom: 5px;
  }
`
export const ExpirationDate = styled.div`
  display: flex;
  flex-direction: column;
`
export const ExpirationDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`
export const CVC = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
`
export const Card = styled.div`
  position: absolute;
  top: -28%;
  width: 66%;
  height: 43%;
  left: 17.5%;
  z-index: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-family: "Share Tech Mono", monospace;
  color: #000;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 18px;
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
  padding: 20px;

  opacity: 0.8;
  transition: .4s linear;

  .provider {
    font-size: 26px;
  }

  .number {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #575757;

    p {
      text-align-last:justify;
      color: #333;
      font-size: 24px;
      @media screen and (max-width: 1260px) {
        & {
          font-size: 22px;
        }
      }
      @media screen and (max-width: 1160px) {
        & {
          font-size: 18px;
        }
      }
    }
  }

  .card-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .good-through-label {
    font-family: "Lato", sans-serif;
    text-transform: uppercase;
    font-size: 0.65rem;
    color: #575757;
  }

  .good-through-value {
    font-size: 16px;
    color: #333;
  }

  .holder {
    color: #575757;

    p {
      color: #333;
      font-size: 22px;

      @media screen and (max-width: 1260px) {
        & {
          font-size: 20px;
        }
      }
      @media screen and (max-width: 1160px) {
        & {
          font-size: 16px;
        }
      }
    }
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
    transition: .4s linear;
    border: 1px solid rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(4px);
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.6);
  }
`