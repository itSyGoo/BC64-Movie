import React from "react";
import { useNavigate } from "react-router-dom";

const UserNavLogOut = () => {
  const navigate = useNavigate();
  return (
    <div className="space-x-3">
      <button
        onClick={() => {
          navigate("/auth/login");
        }}
        className="bg-blue-600 hover:bg-blue-800 duration-300 text-white p-2 rounded"
      >
        Đăng Nhập
      </button>
      <button
        onClick={() => {
          navigate("/auth/register");
        }}
        className="bg-green-600 hover:bg-green-800 duration-300 text-white p-2 rounded"
      >
        Đăng Ký
      </button>
    </div>
  );
};

export default UserNavLogOut;
