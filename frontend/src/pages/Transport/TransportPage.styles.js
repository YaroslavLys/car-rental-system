import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 780px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
`
export const ListWrapper = styled.div`
  margin: 0 auto;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 660px 660px;
  grid-template-rows: 300px 300px;
  gap: 80px 80px;
  list-style-type: none;
`
export const Item = styled.li`
  position: relative;
  text-decoration: none;
  border: 1px solid #ccc;
  border-radius: 14px;
  background-color: #f6f6f6;
  box-shadow: 2px 2px 8px #ccc, -2px -2px 8px #ccc, inset 2px 2px 6px #f9f9f9, inset -2px -2px 6px #f9f9f9;
  transition: .4s;

  p {
    position: absolute;
    font-family: 'Rubik Mono One', sans-serif;
    z-index: 1;
    color: #252525;
    opacity: 0;
    font-size: 26px;
    font-weight: 800;
    top: 44%;
    left: 14%;

    transition: .3s;
  }

  &:hover {
    box-shadow: 1px 1px 6px #656565, -1px -1px 6px #656565;
    transition: .4s;

    img {
      opacity: 35%;
      transition: .3s;
    }

    p {
      transition: .3s;
      opacity: 100%;
    }
  }
`
export const ItemDetails = styled.div`
  width: 90%;
  height: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  
  margin: auto;
  gap: 10%;
  align-items: center;
`
export const Image = styled.div`
  img {
    border-radius: 10px;
    box-shadow: 2px 2px 8px #797979, -2px -2px 8px #797979;
    transition: .3s;
  }
`
export const Information = styled.ul`
  display: flex;
  flex-direction: column;
  height: 200px;
  font-size: 18px;
  gap: 10px;
  list-style-type: none;

  .price {
    margin-top: auto;
  }
`
export const Navigation = styled.div`
  width: 30%;
  margin: 0 auto;
  justify-content: space-between;

  display: flex;
  flex-direction: row;
  gap: 6px;

  font-size: 18px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 1px 1px 4px #ccc, -1px -1px 4px #ccc;

  p {
    align-self: center;
  }
`
export const NavButtonPrevious = styled.button`
  width: 55px;
  font-size: 22px;
  border: none;
  border-right: 1px solid #797979;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  background-color: inherit;

  transition: .4s linear;

  &:hover {
    cursor: pointer;
    box-shadow: inset 1px 1px 2px #f3f3f3, inset -1px -1px 2px #f3f3f3;
    border-right-color: #797979;

    transition: .4s linear;
  }

  &:disabled,
  &[disabled] {
    border-right-color: #ccc;
    color: #ccc;
  }

  &[disabled]:hover {
    cursor: unset;
    box-shadow: none;
  }
`
export const NavButtonNext = styled.button`
  width: 55px;
  font-size: 22px;
  border: none;
  border-left: 1px solid #797979;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  background-color: inherit;

  transition: .4s linear;

  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 2px #ccc, -1px -1px 2px #ccc;
    border-left-color: #797979;

    transition: .4s linear;
  }

  &:disabled,
  &[disabled] {
    border-left-color: #ccc;
    color: #ccc;
  }

  &[disabled]:hover {
    cursor: unset;
    box-shadow: none;
  }
`
