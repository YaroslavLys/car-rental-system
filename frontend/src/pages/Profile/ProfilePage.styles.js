import styled from "styled-components";

export const ProfileInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: auto;
  gap: 100px;
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  
  background-color: rgba(238, 238, 238, 0.8);
  box-shadow: inset 2px 2px 10px #f9f9f9, inset -2px -2px 10px #f9f9f9, 2px 2px 10px #d3d3d3, -2px -2px 10px #d3d3d3;
  border-radius: 16px;
  border: 1px solid #f3f3f3;
`
export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  padding: 30px 30px;
  
  img {
    width: 90%;
    height: 90%;
    border: 1px solid #a2a2a2;
    border-radius: 18px;
    box-shadow: 2px 2px 10px #a2a2a2, -2px -2px 10px #a2a2a2;
  }
`
export const PersonalDetails = styled.div`
  padding: 30px 30px 0 0 ;
  display: flex;
  flex-direction: column;
  width: 70%;
  position: relative;
`
export const Details = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  gap: 10px;
  z-index: 0;
  flex-direction: column;
  
  button {
    width: 35%;
    margin-right: auto;
    padding: 8px 10px;
    background-color: inherit;
    border: 1px solid #333;
    border-radius: 14px;
  }

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
  background-color: rgba(238, 238, 238);
  box-shadow: inset 2px 2px 10px #f9f9f9, inset -2px -2px 10px #f9f9f9, 2px 2px 10px #d3d3d3, -2px -2px 10px #d3d3d3;
  border-radius: 16px;
  border: 1px solid #f3f3f3;

  font-size: 18px;
  text-align: center;

  button {
    font-size: 16px;
    padding: 10px 14px;
    border: 1px solid #333;
    border-radius: 18px;
    background-color: inherit;

    &:hover {
      cursor: pointer;
    }
  }
  
  p {
    width:30%;
  }
`
export const OrdersInfo = styled.div`
  padding: 30px 30px;
  background-color: rgba(238, 238, 238, 0.8);
  box-shadow: inset 2px 2px 10px #f9f9f9, inset -2px -2px 10px #f9f9f9, 2px 2px 10px #d3d3d3, -2px -2px 10px #d3d3d3;
  border-radius: 16px;
  border: 1px solid #f3f3f3;
`
