import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.div`
  height: 100%;
  box-sizing: border-box;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
`;

interface SidebarProps {
  show: boolean;
  click: () => void;
}

const Sidebar = styled.nav<SidebarProps>`
  max-width: 300px;
  width: 70%;
  height: 100%;
  position: fixed;
  background-color: #303030;
  box-shadow: 8px 0px 5px rgba(0, 0, 0, 0.7);
  top: 0;
  left: ${(props) => (props.show ? '0' : '-100%')};
  z-index: 200;
  transition: left ease 0.8s;
`;
 
const SidebarUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
  margin-left: 3rem;
  color:white;
`;

const SidebarLi = styled.li`
  margin: 2rem 0;
  font-size: 1.4rem;
  cursor: pointer;
`;

const CloseBtn = styled.button`
  width: 30px;
  height: 40px;
  float: right;
  margin: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: #fff;
`;

const Toolbar = styled.header`
  width: 100%;
  height: 60px;
  background-color: #303030;
  position: fixed;
  top: 0;
  left: 0;
`;

const ToolbarNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;


const Logo = styled.div`
  font-size: 2rem;
  margin-bottom: 0.3rem;
  margin-left: 0.6rem;
`;

const Spacer = styled.div`
  display: flex;
  flex: 1;
`;

const ToggleBtn = styled.button`
  width: 40px;
  height: 30px;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 1.2rem 0 1rem;
  border: none;
  cursor: pointer;
`;

const BtnLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: #fff;
`;
const LogoText = styled.a`
color:white;
text-decoration:none;
`;


// const SideDraw: React.FC<SidebarProps> = ({ show, click }) => (
  <></>
  // <Sidebar show={show}>
  //   <CloseBtn onClick={click}>X</CloseBtn>
  //   <SidebarUl>
  //     <SidebarLi>Link 1</SidebarLi>
  //     <SidebarLi>Link 2</SidebarLi>
  //     <SidebarLi>Link 3</SidebarLi>
  //     <SidebarLi>Link 4</SidebarLi>
  //     <SidebarLi>Link 5</SidebarLi>
  //   </SidebarUl>
  // </Sidebar>
// );

const SideDrawBtn: React.FC<{ click: () => void }> = ({ click }) => (
  <ToggleBtn onClick={click}>
    <BtnLine></BtnLine>
    <BtnLine></BtnLine>
    <BtnLine></BtnLine>
  </ToggleBtn>
);

const RoleAdmin = () => {
  const [sideDrawOpen, setSideDrawOpen] = useState(false);

  const drawToggleHandler = () => {
    setSideDrawOpen(!sideDrawOpen);
  };

  const backDropClickHandler = () => {
    setSideDrawOpen(false);
  };

  return (
    <Container>
      <Toolbar>
        <ToolbarNav>
          <SideDrawBtn click={drawToggleHandler} />
          <Logo>
          <LogoText href="/">ADMIN</LogoText>
            
          </Logo>
          <Spacer />
          <ul>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Users</a>
            </li>
          </ul>
        </ToolbarNav>
      </Toolbar>
      {/* <SideDraw show={sideDrawOpen} click={backDropClickHandler} /> */}
      {sideDrawOpen && <Backdrop />}
      <main>
        <h2>This is the main area</h2>
      </main>
    </Container>
  );
};

export default RoleAdmin;
