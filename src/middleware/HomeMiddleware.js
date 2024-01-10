import React from "react";
import { Outlet } from "react-router-dom";
import { Auth } from "../utils/Auth";
import OnBoard from "../ver2/page/OnBoard/OnBoard";

const HomeMiddleware = () => {
  const isLogin = new Auth().isLogin();
  return isLogin ? <Outlet /> : <OnBoard />;
};

export default HomeMiddleware;
