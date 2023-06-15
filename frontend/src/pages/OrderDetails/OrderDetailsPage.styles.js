import styled from "styled-components";

export const OrderDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    gap: 20px;
    
    background-color: #f8f7f7;
    box-shadow: inset 2px 2px 10px #f9f9f9, inset -2px -2px 10px #f9f9f9, 2px 2px 10px #d3d3d3, -2px -2px 10px #d3d3d3;
    border-radius: 16px;
    border: 1px solid #f3f3f3;
    padding: 20px;

    h1 {
    text-align: center; 
    font-size: 32px;
    color: #333;
    font-weight: bold;
    margin-bottom: 20px;
  }
`

export const OrderDetailsBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: center;
`

export const OrderDetailsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 20px;
    
    li {
        list-style: none;
        color: #797979;
        font-size: 18px;
    }
`

export const OrderImage = styled.div`
  flex: 1; // makes the image take all available space
  img {
    border-radius: 10px;
    box-shadow: 2px 2px 8px #797979, -2px -2px 8px #797979;
    transition: .3s;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export const OrderDetailsRow = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    
    li {
        color: #797979;
        font-size: 18px;
    }
`

export const OrderDetailsButton = styled.button`
    font-size: 16px;
    padding: 10px 20px;
    border: 1px solid #333;
    border-radius: 12px;
    background-color: inherit;
    transition: .4s linear;
    margin: 10px 0;

    &:hover {
        cursor: pointer;
        color: #f9f9f9;
        background-color: #494949;
        box-shadow: 2px 2px 4px #e0e0e0, -2px -2px 4px #e0e0e0;
        transition: .4s linear;
    }
`
export const OrderButtons = styled.ul`
  display: grid; // замінити на grid
  grid-template-columns: repeat(2, 1fr); // вказує, що ви хочете мати 2 колонки з однаковою шириною
  gap: 20px;
  align-items: center; // Center the cards
`