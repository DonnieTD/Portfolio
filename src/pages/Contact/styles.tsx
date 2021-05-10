import styled from "styled-components";

export const Wrapper = styled.div`
  height: 88vh;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;

  .errorToast {
    position: absolute;
    top: 20px;
    color: white;
    width: 40vw;
    border-radius: 10px;
    height: 7vh;
    display: flex;
    border: solid 3px red;
    align-items: center;
    justify-content: center;
  }
  .successToast {
    position: absolute;
    top: 20px;
    color: white;
    width: 40vw;
    border-radius: 10px;
    height: 7vh;
    display: flex;
    border: solid 3px gold;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .successToast,
    .errorToast {
      width: 80vw;
      top: 8px;
      margin-bottom: 20px;
    }
  }
  & form {
    text-align: center;
    border: solid 3px white;
    border-radius: 10px;
    width: 40vw;
    top: 3vh;
    position: relative;
    @media (max-width: 768px) {
      width: 80vw;
    }
    > h1 {
      color: white;
    }
    > input {
      width: 90%;
      height: 6vh;
      margin-bottom: 1vh;
    }
    > textarea {
      height: 30vh;
      width: 90%;
    }
    > button {
      background: gold;
      color: white;
      border-radius: 12px;
      border: none;
      padding: 1.35vh 3.5vw;
      margin: 2vh 0;
      :hover {
        cursor: pointer;
      }
    }
  }
`;
