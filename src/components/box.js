import React from "react";
import styled from "@emotion/styled";
import Context from "./context.js";

const Box = (props) => {
  const Bigbox = styled.div`
    height: 900px;
    background: black;
  `;

  return <Bigbox></Bigbox>;
};

export default Box;
