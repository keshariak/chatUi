import { Link } from "react-router-dom";
import threedot from "../assets/Icon.png";

function UserSlice({ user }: any) {
  console.log(user.profilePictureURL)
  return (
    <Link
      to={`/chat/${user.userId}`}
      className="max-w-[360px] h-16 m-auto flex items-center  hover:bg-gray-200 p-2 mt-2 transition-all rounded-sm"
    >
      <div className="w-12 h-12 rounded-full bg-amber-700 overflow-hidden ">
        <img
          className="object-cover w-full h-full"
          src={user.profilePictureURL}
          alt="userimage"
        />
      </div>
      <div className="ml-3  w-4/6">
        <h2 className="font-bold ">{user.name}</h2>

        <div className="">
        <p className="text-sm truncate">
          {user.chat[user.chat.length - 1].you.message}
        </p>


        </div>
        
      </div>
      <img className="flex ml-auto mr-2" src={threedot} alt="" />
    </Link>
  );
}

export default UserSlice;
