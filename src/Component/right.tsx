import  { useEffect, useRef } from "react";
import ActiveUserSlice from "./ActiveUserSlice";
import MessegeReceive from "./MessegeReceive";
import MessegeSend from "./MessegeSend";
import TypingArea from "./TypingArea";

function Right() {
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className="h-screen md:w-[75%] w-[100%]">
      <ActiveUserSlice />
      <div
        ref={chatContainerRef}
        className="w-11/12 my-0  m-auto h-[75%] p-3 overflow-y-auto scrollbar-hide">
                   <MessegeSend></MessegeSend>
                   <MessegeReceive></MessegeReceive><MessegeSend></MessegeSend>
                   <MessegeReceive></MessegeReceive><MessegeSend></MessegeSend>
                   <MessegeReceive></MessegeReceive><MessegeSend></MessegeSend><MessegeSend></MessegeSend><MessegeSend></MessegeSend>
                   <MessegeReceive></MessegeReceive><MessegeSend></MessegeSend>
                   <MessegeReceive></MessegeReceive>
      </div>
      <TypingArea />
    </div>
  );
}

export default Right;
