import { IconContext } from "react-icons";
import { BsCameraFill } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import Input from "./Input";
import Messages from "./Messages";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
          <div className="chatIcons">
            <BsCameraFill />
            <BiUserPlus></BiUserPlus>
            <FiMoreHorizontal />
          </div>
        </IconContext.Provider>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
