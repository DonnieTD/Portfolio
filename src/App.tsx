import React, { useState } from "react";
import styled from "styled-components";
import src from "./assets/background.jpg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Header } from "./components/Header";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { ContactPage, ExperiencePage, HomePage, SkillsPage } from "./pages";

const Wrapper = styled.div`
  min-height: 100%;
  height: 100%;
  width: 100%;
  background-image: url(https://images.unsplash.com/photo-1472120435266-53107fd0c44a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
  background-size: cover;
  background-position: 100% 60%;
  position: relative;
  margin: 0;
  * {
    :focus {
      outline: none;
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
    font-size: 1.75em;
    padding: 4vh 0;
    text-decoration: none;
  }
`;

const MobileNavOverlay = styled.div`
  position: absolute;
  top: 12vh;
  background: rgba(0, 0, 0, 0.75);
  height: 88vh;
  width: 100%;
  z-index: 100;
  > ul {
    padding: 0px;
    list-style-type: none;
    > li {
      padding: 1.5vh;
      color: white;
      text-align: center;
    }
  }
  & .active {
    > div {
      color: gold !important;
    }
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

function App() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleNav = () => setShowMobileNav(!showMobileNav);
  return (
    <Wrapper>
      <Router>
        <Header setShowMobileNav={toggleNav} />
        {showMobileNav && (
          <MobileNavOverlay>
            <NavItemWrapper
              exact
              to="/"
              activeClassName="active"
              className="navitemd"
              onClick={() => setShowMobileNav(false)}
            >
              <div>Home</div>
            </NavItemWrapper>
            <NavItemWrapper
              exact
              to="/skills"
              activeClassName="active"
              className="navitemd"
              onClick={() => setShowMobileNav(false)}
            >
              <div>Skills</div>
            </NavItemWrapper>
            <NavItemWrapper
              exact
              to="/experience"
              activeClassName="active"
              className="navitemd"
              onClick={() => setShowMobileNav(false)}
            >
              <div>Experience</div>
            </NavItemWrapper>
            <NavItemWrapper
              exact
              to="/contact"
              activeClassName="active"
              className="navitemd"
              onClick={() => setShowMobileNav(false)}
            >
              <div>Contact</div>
            </NavItemWrapper>
          </MobileNavOverlay>
        )}

        <PerfectScrollbar style={{ height: "90vh" }}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/skills">
              <SkillsPage />
            </Route>
            <Route exact path="/experience">
              <ExperiencePage />
            </Route>
            <Route exact path="/contact">
              <ContactPage />
            </Route>
          </Switch>
        </PerfectScrollbar>
      </Router>
    </Wrapper>
  );
}

export default App;
