import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import src from "../assets/default-monochrome-white.svg";
import { Menu } from "@styled-icons/boxicons-regular/Menu";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  height: 10vh;
  background: transparent;
  border-bottom: solid 3px white;
  box-sizing: border-box;
`;

const Logo = styled.img`
  height: 5vh;
  margin-left: 0.5vw;
  @media (max-width: 768px) {
    height: 6vh;
  }
`;

const Nav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  > .active {
    > div {
      color: gold;
    }
  }

  @media (min-width: 769px) {
    .navitemMobile {
      display: none;
      & * {
        display: none;
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .navitemd {
      display: none;
      & * {
        display: none;
      }
    }
    .navitemMobile {
      height: 7vh;
      color:white;
      margin-right: 3.5vw;
    }
  }
`;

const NavItemWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  > div {
    color: white;
    font-size: 1vw;
    text-decoration: none;
  }
`;

const LogoWrapper = styled.div`
 
  margin:0px;
  padding: 0px;
  margin-left: 1.5vw;

  > span{
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 2.5vw;
    position:relative;
    top:2px;
    color:white;
    font-family: festive!important;
  }
  @media (max-width: 768px) {
    width: 40vw;
    > span{      
      font-size: 5vw;      
    }
  }
  @media (max-width: 425px) {
    width: 40vw;
    > span{      
      font-size: 11vw;      
    }
  }
  @media (max-width: 375px) {
    width: 40vw;
    > span{      
      font-size: 11vw;      
    }
  }
`;

export const Header: React.FC<{ setShowMobileNav: any }> = ({
  setShowMobileNav,
}) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <span>Donnie TD</span>
      </LogoWrapper>
      <div></div>
      <Nav>
        <NavItemWrapper
          exact
          to="/"
          activeClassName="active"
          className="navitemd"
        >
          <div>Home</div>
        </NavItemWrapper>
        <NavItemWrapper
          exact
          to="/skills"
          activeClassName="active"
          className="navitemd"
        >
          <div>Skills</div>
        </NavItemWrapper>
        <NavItemWrapper
          exact
          to="/experience"
          activeClassName="active"
          className="navitemd"
        >
          <div>Experience</div>
        </NavItemWrapper>
        <NavItemWrapper
          exact
          to="/contact"
          activeClassName="active"
          className="navitemd"
        >
          <div>Contact</div>
        </NavItemWrapper>
        <Menu className="navitemMobile" onClick={() => setShowMobileNav()} />
      </Nav>
    </Wrapper>
  );
};
