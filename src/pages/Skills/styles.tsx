import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 88vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    & .xAxis {
      display: none;
    }
    & .mobile {
      display: block !important;
    }
    & .mobileHeading {
      display: block !important;
    }
  }
  & .mobile {
    display: none;
    color: white;

    background: rgba(0, 0, 0, 0.5);
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
      & ul {
        list-style-type: none;
      }
    }
  }
  & .mobileHeading {
    display: none;
  }
`;

export const OverViewWrapper = styled.div`
  height: 70vh;
  position: relative;
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    display: block;
    height: auto;
  }
  > :nth-child(1) {
    display: grid;
    width: 100%;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    > div {
      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 12vh;
    margin-top: 12vh;
  }
`;

export const DetailsWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  display: grid;
  height: 70vh;
  grid-template-columns: 1fr;

  > :nth-child(1) {
    background: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 90%;
    height: 6vh;
    border-bottom: solid 1px gray;
    border-radius: 10px;
    @media (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
    }
  }
  > :nth-child(2) {
    width: 90%;
    height: 58vh;
    border-radius: 10px;
    border: solid 3px white;
    @media (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
    }
  }
  & .scrollbarwrapper {
    height: 58vh;
  }

  & .header {
    text-align: center;
    padding: 1.5vh 0;
    background: white;
    color: "black";
  }

  & .itemWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  & .itemUl {
    list-style-type: none;
    padding: 0px;
    text-align: center;
    & li {
      color: white;
    }
  }
`;

export const Tab = styled.div<{
  active?: boolean;
  isLeft?: boolean;
  isRight?: boolean;
}>`
  background: ${(props: any) => (props.active ? "gray" : "transparent")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: ${(props: any) => (props.isLeft ? "10px" : "")};
  border-bottom-left-radius: ${(props: any) => (props.isLeft ? "10px" : "")};
  border-top-right-radius: ${(props: any) => (props.isRight ? "10px" : "")};
  border-bottom-right-radius: ${(props: any) => (props.isRight ? "10px" : "")};
  border-right: ${(props: any) => (props.active ? "" : "1px solid gray")};
  :hover {
    cursor: pointer;
  }
`;
