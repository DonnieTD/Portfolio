import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import src from "../assets/default-monochrome-white.svg";
import { Menu } from "@styled-icons/boxicons-regular/Menu";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  height: 12vh;
  background: white;
`;

const Logo = styled.img`
  height: 7vh;
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
    color: black;
    font-size: 1.25vw;
    text-decoration: none;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5vw;
`;

export const Header: React.FC<{ setShowMobileNav: any }> = ({
  setShowMobileNav,
}) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src={src} />
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
