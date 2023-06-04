import styled from "styled-components";

export const NavWrapper = styled.div`
  display: block;
  position: fixed;
  width: 100%;
`
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 20px 15px;
  background-color: #333;
  color: #f9f9f9;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  box-shadow: 0px 8px 8px #b4b5c0;
`
export const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 1440px;
  align-items: center;
`
export const Title = styled.p`
  font-size: 24px;
`
export const NavBar = styled.div`
  font-size: 20px;
`
export const NavLogged = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  list-style-type: none;
  justify-items: center;
`
export const NavCommon = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  list-style-type: none;

  font-size: 22px;
`
export const NavElement = styled.li`
  margin-right: 40px;
  align-self: center;

  button {
    background: none;
    color: inherit;
    border: 1px solid #f9f9f9;
    padding: 8px 14px;
    font: inherit;
    cursor: pointer;

    border-radius: 12px;
    transition: all .4s linear;
  }

  button:hover {
    color: #333;
    background-color: #f9f9f9;
    transition: all .4s linear;
  }
`
