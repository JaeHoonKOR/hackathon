import { Outlet } from "react-router-dom";
import Header from "./Header";
import { styled } from "styled-components";

const LayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayOut;
