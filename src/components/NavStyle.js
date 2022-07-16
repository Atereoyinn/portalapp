import styled from "styled-components";

export const NavbarResponsive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const WrapperResponsive = styled.div`
 display: flex;
 flex-direction: column;
 height:100vh ;
 justify-content: space-between;
 align-items: center;
 font-size: medium;
 
`;

export const Nav = styled.nav`
  background: black;
  height: ${(props) => (props.isResponsive ? "100vh" : "80px")};
  padding: 25px;
  font-size: x-large;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  opacity: 0.9;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Left = styled.div`
  flex: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Right = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 20px;
  margin-right: 10px;
`;

export const HamburgerMenu = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: x-large;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
  
`;
