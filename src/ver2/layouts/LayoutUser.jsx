import { useState } from "react";
import { Outlet } from "react-router";
import SideBar from "../components/SideBar";

const LayoutUser = () => {
  const [width, setWidth] = useState("315px");

  const getWidthSideBar = (data) => {
    setWidth(data);
  };

  return (
    <>
      <div className="flex min-h-screen bg-black body-main">
        <SideBar onRecive={getWidthSideBar} />
        <div
          style={{ marginLeft: width }}
          className="future-main flex flex-col mx-8 w-full pb-10"
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutUser;
