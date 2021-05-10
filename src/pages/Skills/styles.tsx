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
  }
`;

export const OverViewWrapper = styled.div`
  height: 70vh;
  position: relative;
  > :nth-child(1) {
    position: absolute;
    color: white;
    width: 40vw;
    font-size: 1.5em;
    left: 2.25vw;
    text-align: center;
    @media (max-width: 768px) {
      position: static;
      color: white;
      font-size: 1.5em;
      text-align: center;
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 12vh;
    margin-top: 6vh;
  }
`;

export const DetailsWrapper = styled.div`
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
