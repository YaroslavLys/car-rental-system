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

  p {
    color: #797979;
  }

  p .p-wrapper {
    color: #333;
    font-size: 18px;
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

//Styling for orders in profile page
//Start

export const OrdersInfoWrapper = styled.div`
  padding: 30px;
  background-color: rgba(238, 238, 238, 0.8);
  box-shadow: inset 2px 2px 10px #f9f9f9, inset -2px -2px 10px #f9f9f9, 2px 2px 10px #d3d3d3, -2px -2px 10px #d3d3d3;
  border-radius: 16px;
  border: 1px solid #f3f3f3;

  p {
    text-align: center; 
    font-size: 24px;
    color: #333;
    font-weight: bold;
    margin-bottom: 20px;
  }
`
export const OrderList = styled.ul`
  display: grid; // замінити на grid
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: center; // Center the cards
`
export const OrderListItem = styled.li`
  list-style: none; // додаємо цей рядок
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #f3f3f3;
  box-shadow: 2px 2px 10px #f9f9f9, -2px -2px 10px #f9f9f9, inset 1px 1px 10px #ccc, inset -1px -1px 10px #ccc;
  display: flex; // add this line to make content and image sit next to each other
  object-fit: cover;

  ul {
    list-style: none; // додаємо цей рядок
    padding: 10px;
  }
`
export const OrderImage = styled.div`
  flex: 1; // makes the image take all available space
  img {
    border-radius: 10px;
    box-shadow: 2px 2px 8px #797979, -2px -2px 8px #797979;
    transition: .3s;
    object-fit: cover; // makes the image cover all available space
    width: 80%;
    height: 100%;
  }
`
export const OrderButton = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border: 1px solid #333;
  border-radius: 12px;
  background-color: inherit;
  margin-top: 10px;
  transition: .4s linear;
  align-self: flex-end; // Align the button to the end

  &:hover {
    cursor: pointer;
    color: #f9f9f9;
    background-color: #494949;
    box-shadow: 2px 2px 4px #e0e0e0, -2px -2px 4px #e0e0e0;
    transition: .4s linear;
  }
`
export const OrderCard = styled.div`
  //display: flex;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: space-between;
  //align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0;
  background-color: rgba(243, 243, 243, 0.8);
  box-shadow: 2px 2px 6px #ececec, -2px -2px 6px #ececec;
`





//End
