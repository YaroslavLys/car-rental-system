import styled from "styled-components";

export const NavWrapper = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  z-index: 1;
`
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 20px 15px;
  background-color: #333;
  color: #f9f9f9;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  box-shadow: 0 8px 8px #b4b5c0;
`
export const NavInner = styled.div`
  display: flex;
  margin: auto;
  width: 1440px;
  align-items: center;
`
export const Title = styled.p`
  font-size: 24px;
`
export const NavBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  
  font-size: 22px;
`
export const NavLogged = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: row;
  list-style-type: none;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
`
export const NavCommon = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: row;
  list-style-type: none;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
`
export const NavLinkElement = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`
export const NavUserElement = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`
export const NavCommonElement = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`
export const NavElement = styled.li`
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

  .fa-user {
    display: inline-block;

    color: #333;
    background-color: #f9f9f9;

    width: 40.72px;
    height: 39.24px;
    font-size: 20px;
    border: 1px solid #f3f3f3;
    padding: 9px 11px;
    border-radius: 100%;

    transition: .5s linear;

    &:hover {
      background-color: #333;
      color: #f9f9f9;
      transition: .5s linear;
    }
  }

  #protected, #home {
    padding-bottom: 7px;
    border-bottom: 1px solid transparent;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  #protected:hover, #home:hover {
    color: inherit;
    padding-bottom: 4px;
    border-bottom: 2px solid #f9f9f9;
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    
    transition: border-bottom-color .4s linear, padding-bottom .6s linear;
  }

  #protected.selected, #home.selected {
    color: #7a7a7a;
    padding-bottom: 4px;
    border-bottom: 1.7px solid #7a7a7a;
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
  }
`
