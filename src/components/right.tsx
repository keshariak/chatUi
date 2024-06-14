import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import userData from "../data";
import ActiveUserSlice from "./ActiveUserSlice";
import MessegeReceive from "./MessegeReceive";
import MessegeSend from "./MessegeSend";
import TypingArea from "./TypingArea";

function Right() {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { userId } = useParams<{ userId: string }>();
  const user = userData.find((user) => user.userId === userId);

  if (!user) {
    return <p>User not found</p>;
  }
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [userId]);

  return (
    <div className="flex flex-col h-screen">
      <ActiveUserSlice user={user} />
      <div
        ref={chatContainerRef}
        className="w-11/12 my-2 m-auto h-[75%] p-3 overflow-y-auto scrollbar-hide"
      >
        {user.chat.map((chat, index) => (
          <div key={index}>
            {chat.you && <MessegeSend chat={chat.you} />}
            {chat.otherUser && <MessegeReceive chat={chat.otherUser} />}
          </div>
        ))}
      </div>
      <TypingArea />
    </div>
  );
}

export default Right;
