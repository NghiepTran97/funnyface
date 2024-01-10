import { Outlet } from "react-router";
import SideBar from "../components/SideBar/SideBar";

const LayoutUser = () => {
  return (
    <div className="flex justify-center w-screen min-h-screen bg-black gap-4 p-8">
      <SideBar />
      <div className="flex flex-col flex-grow-1 pb-10">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutUser;
