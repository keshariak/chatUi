import { Outlet, useLocation } from "react-router-dom";
import Left from "../components/left";

const ChatLayout = () => {
  const location = useLocation();
  console.log(location.pathname);
  const isChatPath = location.pathname.includes("/chat");
  const isHomePath = location.pathname === "/";
  return (
    <div className="h-screen w-full flex">
      <section
        className={`md:h-screen  border-r  ${
          isChatPath ? "hidden md:block" : ""
        }`}
      >
        <Left />
      </section>
      <section
        className={`h-screen
                ${isHomePath ? " md:w-[100%]" : ""}
            ${isChatPath ? " md:w-[75%]" : ""}`}
      >
        <Outlet />
      </section>
    </div>
  );
};

export default ChatLayout;
