import styled from "styled-components";


export const Wrapper = styled.div`
  width: 100%;
  height: 700px;
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
  gap: 80px 60px;
  list-style-type: none;
`

export const Item = styled.li`
  position: relative;
  text-decoration: none;
  border: 1px solid #ccc;
  border-radius: 14px;
  background-color: #f3f3f3;
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
    top: 42%;
    left: 13%;

    transition: .3s;
  }
  &:hover {
    box-shadow: 2px 2px 8px #989898, -2px 2px 8px #989898;
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

export const ItemDetails = styled.ul`
  list-style-type: none;
  padding: 40px 40px;
`
export const ItemContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15%;
`
export const Image = styled.div`
    img {
      border-radius: 10px;
      transition: .3s;
    }
`
export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

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
  padding: 6px 20px;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 1px 1px 4px #ccc, -1px -1px 4px #ccc;
`
export const NavButton = styled.button`
  font-size: 18px;
  padding: 4px 8px;
  border: 1px solid #333;
  background-color: inherit;
  color: #333;
  border-radius: 40%;

  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 2px #ccc, -1px -1px 2px #ccc;
  }

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #f6f6f6;
    color: #666666;
  }

  &[disabled]:hover {
    cursor: unset;
    box-shadow: none;
  }
`
