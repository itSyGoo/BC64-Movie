import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { movieSer } from "../../../service/movieSer";
import { removeChairAction } from "../../../redux/movieReducer/movieSlice";
import Swal from "sweetalert2";
const InfoGhe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { infoMovie, listGheDangDat } = useSelector(
    (state) => state.movieSlice
  );
  const infoUser = useSelector((state) => state.userReducer.infoUser);
  // console.log('infoUser: ', infoUser);
  // let isLoading = useSelector((state) => state.loadingSlice.isLoading);
  const renderGheDangDat = () => {
    return listGheDangDat?.map((ghe) => {
      return <span key={ghe.maGhe}>{ghe.tenGhe} , </span>;
    });
  };
  const submitBuyTicket = () => {
    if (listGheDangDat.length > 0) {
      alert("Đặt vé thành công");
      dispatch(removeChairAction());
      navigate("/");
    } else {
      alert("Đặt thất bại, vui lòng chọn ghế");
    }
  };
  return (
    <div className="w-2/5 space-y-8 mt-5 ml-4 justify-center items-center">
      <div className="bg-gray-300 text-center border rounded-lg ">
        <div className="items-center">
          <h1 className="text-2xl font-medium mb-2">Vé xem phim</h1>
          {/* Top */}
          <div>
            <div className="text-xl font-bold">Phim : {infoMovie.tenPhim}</div>
            {/* //Ngày chiếu giờ chiếu */}
            <div className="flex items-center justify-between">
              {/* // Ngày Chiếu  */}
              <div>
                <span>Ngày chiếu:</span> <br />
                <span>{infoMovie.ngayChieu}</span>
              </div>
              {/* // Giờ chiếu  */}
              <div>
                <span>Giờ chiếu:</span>
                <br />
                <span>{infoMovie.gioChieu}</span>
              </div>
            </div>
            {/* //Tên cụm rạp */}
            <div>
              <h1>Tên cụm rạp :</h1>
              <p>{infoMovie.tenCumRap}</p>
            </div>
            {/* // Địa chỉ */}
            <div>
              <h1>Địa chỉ rạp:</h1>
              <p>{infoMovie.diaChi}</p>
            </div>
            {/* //Ghế Chọn */}
            <div>
              <h1>Ghế chọn:</h1>
              <p>{renderGheDangDat()}</p>
            </div>
          </div>
        </div>
        
      </div>
      {/* Xac nhan */}
      <div className="h-1/6 flex items-center  px-5 bg-gray-300 rounded-xl">
        {/* // THÔNG TIN THANH TOÁN  */}
        <div className="w-3/5 space-y-2 border-r-2">
          <div>
            <span>Tên:</span>
            <span>{infoUser?.hoTen}</span>
          </div>
          <div>
            <h1>TỔNG TIỀN:</h1>
            <p>
              {listGheDangDat
                ?.reduce((tongTien, ghe) => {
                  return (tongTien += ghe.giaVe);
                }, 0)
                .toLocaleString()}{" "}
              đồng
            </p>
          </div>
        </div>
        {/* Xac nhan */}
        <div className="flex items-center justify-center  w-2/5">
          <button
            onClick={submitBuyTicket}
            className="py-3 px-5 hover:bg-red-600  bg-gray-700 rounded text-white duration-150"
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoGhe;
