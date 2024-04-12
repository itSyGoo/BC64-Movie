import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { userSer } from "../../service/userSer";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/userReducer/userThunk";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formLogin = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      hoTen: "",
    },
    onSubmit: (value) => {
      const navigateCus = () => {
        navigate("/");
      };
      dispatch(registerThunk({ value, navigateCus }));
    },
    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .required("Tài khoản không được để trống")
        .min(4, "Tài khoản ít phải là 4 chữ cái"),
      matKhau: yup
        .string()
        .required("Mật Khẩu không được để trống")
        .min(3, "Mật khẩu ít phải là 3 chữ cái"),
      email: yup
        .string()
        .email("Email không đúng định dạng")
        .required("Email không được để trống"),
      soDt: yup
        .string()
        .matches(/^[0-9]+$/, "Số điện thoại không đúng định dạng")
        .required("Số điện thoại không được để trống"),
      hoTen: yup.string().required("Họ tên không được để trống"),
      maNhom: yup.string().required("Mã nhóm không được để trống"),
    }),
  });
  return (
    <div>
      <form
        onSubmit={formLogin.handleSubmit}
        action=""
        className="border p-3 rounded-md space-y-3"
      >
        <h3 className="text-2xl font-medium">Đăng ký</h3>
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Họ tên
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="hoTen"
            id="hoTen"
            onChange={formLogin.handleChange}
          />
          <p className="text-red-500  h-3">{formLogin.errors.hoTen}</p>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Tài Khoản
          </label>
          <input
            type="text"
            name="taiKhoan"
            id="taiKhoan"
            className="border rounded p-2 w-full"
            onChange={formLogin.handleChange}
          />
          <p className="text-red-500 h-3">{formLogin.errors.taiKhoan}</p>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Mật khẩu
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="matKhau"
            id="matKhau"
            onChange={formLogin.handleChange}
          />
          <p className="text-red-500  h-3">{formLogin.errors.matKhau}</p>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Email
          </label>
          <input
            className="border rounded p-2 w-full"
            type="email"
            name="email"
            id="email"
            onChange={formLogin.handleChange}
          />
          <p className="text-red-500  h-3">{formLogin.errors.email}</p>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Số điện thoại
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="soDt"
            id="soDt"
            onChange={formLogin.handleChange}
          />
          <p className="text-red-500  h-3">{formLogin.errors.soDt}</p>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Mã nhóm
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="maNhom"
            id="maNhom"
            onChange={formLogin.handleChange}
          />
          <p className="text-red-500  h-3">{formLogin.errors.maNhom}</p>
        </div>
        <button className="bg-blue-500 text-white rounded p-2 ">Đăng ký</button>
      </form>
    </div>
  );
};

export default RegisterPage;
