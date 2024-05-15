import React from "react";
import spinner from "./components/loading.png";
import { LoadingContainer } from "./styles";

const Loading = () => {
  return (
    <LoadingContainer>
      <img src={spinner} alt="loading" />
    </LoadingContainer>
  );
};

export default Loading;