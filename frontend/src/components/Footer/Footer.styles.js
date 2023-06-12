import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  
  background-color: #343434;
  padding: 40px 0 50px 15px;
`
export const FooterInner = styled.div`
  width: 1440px;
  margin: auto;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 260px;
  max-width: 400px;
`
export const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: #f9f9f9;
  margin-bottom: 16px;
  margin-top: 16px;
`
export const Description = styled.p`
  margin-bottom: 10px;
  display: flex;
  text-align: justify;

  font-size: 20px;
  color: #8f8f8f;

  div {
    display: flex;
    flex-direction: column;
  }

  a {
    cursor: pointer;
    margin-left: 6px;
    color: #f9f9f9;
    transition: .3s;
  }

  a:hover {
    color: #5b5b5b;
    transition: .3s;
  }
`
export const SocialIcons = styled.ul`
  list-style: none;

  li {
    display: inline-block;
  }

  a {
    display: inline-block;
    text-align: center;
    
    background-color: #dedede;
    color: #818a91;
    font-size: 20px;
    line-height: 50px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    cursor: pointer;
    
    -webkit-transition: all .2s linear;
    -o-transition: all .2s linear;
    transition: all .4s linear
  }
  
  a.facebook, a.twitter, a.instagram {
    margin-right: 14px;
  }

  a.facebook:hover {
    color: #fff;
    background-color: #3b5998
  }

  a.twitter:hover {
    color: #fff;
    background-color: #00aced
  }
  
  a.instagram:hover {
    color: #fff;
    background-color: #cd486b
  }
  
  a.linkedin:hover {
    color: #fff;
    background-color: #007bb6
  }
`