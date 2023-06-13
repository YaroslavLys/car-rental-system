import styled from "styled-components";

export const ProfileInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  gap: 100px;
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 440px;
  
  background-color: #f8f7f7;
  box-shadow: inset 2px 2px 10px #f9f9f9, inset -2px -2px 10px #f9f9f9, 2px 2px 10px #d3d3d3, -2px -2px 10px #d3d3d3;
  border-radius: 16px;
  border: 1px solid #f3f3f3;
`
export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  align-items: center;
  padding: 30px 30px;
  
  img {
    min-width: 240px;
    width: 80%;
    height: 80%;
    border: 1px solid #a2a2a2;
    border-radius: 18px;
    box-shadow: 2px 2px 10px #a2a2a2, -2px -2px 10px #a2a2a2;
  }
`
export const PersonalDetails = styled.div`
  padding: 30px 30px 0 0 ;
  display: flex;
  flex-direction: column;
  width: 65%;
  position: relative;
`
export const Details = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  gap: 16px;
  z-index: 0;
  flex-direction: column;

  p .p-wrapper {
    font-size: 18px;
    font-weight: 500;
  }
`
export const DetailsName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`

export const DetailsBio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  transition: .3s linear;

  button {
    margin-right: auto;
    padding: 8px 18px;
    background-color: inherit;
    border: 1px solid #333;
    border-radius: 12px;
    font-size: 16px;
    transition: .4s linear;

    &:hover {
      cursor: pointer;
      color: #f9f9f9;
      background-color: #494949;
      transition: .5s linear;
    }
  }
`
export const BalanceInfo = styled.div`
  position: absolute;
  top: 85%;
  width: 80%;
  left: 15%;
  z-index: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 30px 30px;
  background-color: #f3f3f3;
  box-shadow: inset 2px 2px 10px #f9f9f9, inset -2px -2px 10px #f9f9f9, 2px 2px 10px #d3d3d3, -2px -2px 10px #d3d3d3;
  border-radius: 16px;
  border: 1px solid #f3f3f3;

  font-size: 18px;
  text-align: center;

  button {
    font-size: 16px;
    padding: 10px 20px;
    border: 1px solid #333;
    border-radius: 12px;
    background-color: inherit;
    
    transition: .4s linear;

    &:hover {
      cursor: pointer;
      color: #f9f9f9;
      background-color: #494949;
      box-shadow: 2px 2px 4px #e0e0e0, -2px -2px 4px #e0e0e0;
      transition: .4s linear;
      
    }
  }

  p {
    width: 30%;
  }
`
export const OrdersInfo = styled.div`
  padding: 30px 30px;
  background-color: rgba(238, 238, 238, 0.8);
  box-shadow: inset 2px 2px 10px #f9f9f9, inset -2px -2px 10px #f9f9f9, 2px 2px 10px #d3d3d3, -2px -2px 10px #d3d3d3;
  border-radius: 16px;
  border: 1px solid #f3f3f3;
`
