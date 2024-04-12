import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieSer } from "../../service/movieSer";
import DetailPageSchedule from "./DetailPageSchedule";
import { useDispatch } from "react-redux";
import {
  turnOffLoading,
  turnOnLoading,
} from "../../redux/loadingReducer/loadingSlice";

const DetailPage = () => {
  // Lấy param idMovie trên url xuống
  const [dataMovie, setDataMovie] = useState();
  const { idMovie } = useParams();
  const dispatch = useDispatch();
  const fetchDetailMovie = async () => {
    try {
      let data = await movieSer.getDetailMovie(idMovie);
      setDataMovie(data.data.content);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    // call api
    fetchDetailMovie();
  }, []);

  return (
    <div>
      {/* Chi tiết phim */}
      <div className="bg-gray-700 px-3 py-4">
        <div className="flex  space-x-4 md:flex-col md:space-x-0">
          <div className="flex w-1/5 md:w-full md:justify-center">
            <img
              src={dataMovie?.hinhAnh}
              className="w-64 h-96 object-contain"
              alt=""
            />
          </div>
          <div className="w-4/5 text-white ml-0  space-y-4">
            <p className="text-xl font-medium ">{dataMovie?.tenPhim}</p>
            <p className="text-sm">{dataMovie?.moTa}</p>
            <button className="bg-blue-500 hover:bg-blue-700 duration-300 text-white p-2 rounded">
              Mua vé
            </button>
          </div>
        </div>
      </div>
      {/* Lịch chiếu phim */}
      <DetailPageSchedule idMovie={idMovie} />
    </div>
  );
};

export default DetailPage;
