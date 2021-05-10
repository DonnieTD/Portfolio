import React from "react";
import { Wrapper, HomeText, Highlight } from "./styles";

export const HomePage = () => {
  return (
    <Wrapper>
      <HomeText>
        <div>
          <h1>
            <Highlight> S</Highlight>oftware is my passion,{" "}
            <Highlight> not</Highlight> my job!
          </h1>
        </div>
      </HomeText>
    </Wrapper>
  );
};
