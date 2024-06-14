import userData from "../data";
import UserSlice from "./UserSlice";
function Left() {
  return (
    <div className="">
      {userData.map((user) => {
        return <UserSlice key={user.userId} user={user} />;
      })}
    </div>
  );
}

export default Left;
