import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SidebarLink({
  path,
  icon,
  iconActive,
  name,
  isActive,
  sideBarHidden,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      className={`flex ${
        sideBarHidden ? "justify-center" : "pr-14 xl:pr-20"
      } gap-4 cursor-pointer py-4`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(path)}
    >
      <img
        loading="lazy"
        src={isActive || isHovered ? iconActive : icon}
        alt={name}
        className={sideBarHidden ? `min-w-[30px]` : `w-[36px] h-[36px]`}
      />
      {!sideBarHidden && (
        <div
          className={`flex items-center whitespace-nowrap text-2xl xl:text-3xl font-semibold grow ${
            isActive || isHovered ? "text-green-400" : "text-white"
          }`}
        >
          {name}
        </div>
      )}
    </div>
  );
}

export default SidebarLink;
