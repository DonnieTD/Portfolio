import styled from "styled-components";

export const Wrapper = styled.div`
  height: 88vh;
`;
export const HomeText = styled.div`
  height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    border: solid 2px gold;
    border-left: 0px;
    border-right: 0px;
    padding: 4vh 10vw;
    > h1 {
      text-align: center;
      color: white;
    }
  }
`;

export const Highlight = styled.span`
  color: gold;
`;
