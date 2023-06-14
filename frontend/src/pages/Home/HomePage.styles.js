import styled from "styled-components";

export const HomePage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap : 60px;
`

export const Greeting = styled.section`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  
  img {
    border: 1px solid #333;
    border-radius: 14px;
    box-shadow: 2px 2px 20px #797979, 2px 2px 20px #797979;
  }
`

export const GreetingText = styled.div`
  max-width: 620px;
  display: flex;
  flex-direction: column;
  font-size: 36px;
  gap: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;

`
export const PersonalGreeting = styled.div`
  p {
    font-size: 28px;
  }
`
export const Main = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 540px;
  
  img {
    border-radius: 16px;
  }
  
  .first_img {
    max-width: 100%;
    position: absolute;
    z-index: -1;
    left: 140px;
    top: 180px;
    box-shadow: 2px 2px 8px #333, -2px -2px 8px #797979;
  }
  
  .second_img {
    max-width: 100%;
    z-index: 0;
    position: absolute;
    box-shadow: 2px 2px 6px #f9f9f9, -2px -2px 8px #797979;
  }
`

export const Images = styled.div`
  width: 40%;
  position: relative;
`
export const MainUser = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  text-align: center;

  button {
    margin-top: 20px;
    padding: 14px 8px;
    width: 26%;
    min-width: 160px;

    color: #333;
    border: 1px solid #333;
    border-radius: 14px;
    background-color: inherit;
    font-size: 20px;

    transition: .4s;

    &:hover {
      color: #f3f3f3;
      background-color: #333;
      transition: .4s;
    }
  }
`
export const MainNoUser = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  button {
    margin-top: 20px;
    padding: 14px 8px;
    width: 26%;
    min-width: 160px;
    
    color: #333;
    border: 1px solid #333;
    border-radius: 14px;
    background-color: inherit;
    font-size: 20px;
    
    transition: .4s;
    
    &:hover {
      color: #f3f3f3;
      background-color: #333;
      transition: .4s;
    }
  }
`