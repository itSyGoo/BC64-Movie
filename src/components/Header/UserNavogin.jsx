import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../../redux/userReducer/userSlice";

const UserNavLogin = () => {
  const dispatch = useDispatch();
  const { infoUser } = useSelector((state) => state.userReducer);
  return (
    <div className="space-x-3 flex ">
      <div className="flex items-center justify-center">
      <img className="w-10 rounded-full mr-2" src="https://i.pravatar.cc/300" alt="" />
      <span className="text-white text-xl">{infoUser.hoTen.slice(0,10)}</span>
      </div>
      
      <button
        onClick={() => {
          dispatch(logOutAction());
        }}
        className="bg-red-400 hover:bg-red-600 duration-300 text-white p-2 rounded"
      >
        Log out
      </button>
    </div>
  );
};

export default UserNavLogin;
