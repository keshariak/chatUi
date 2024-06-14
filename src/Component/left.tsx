import UserSlice from "./UserSlice"
function left() {
  return (
    <div className="md:h-screen w-[25%] border  hidden md:block  bordre-right-1 ">
      <p className="ml-3">Chats</p>
      <UserSlice></UserSlice>
      <UserSlice></UserSlice>
      <UserSlice></UserSlice>
      

    </div>
  )
}

export default left