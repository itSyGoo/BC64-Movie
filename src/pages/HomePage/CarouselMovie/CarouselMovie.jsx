import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import { movieSer } from "../../../service/movieSer";
import { IonIcon } from "@ionic/react";

import { chevronBack, chevronForward } from "ionicons/icons";
const CarouselMovie = () => {
  const [dataBan, setDataBan] = useState([]);
  const carouRef = useRef();
  const fetchBannerMovie = async () => {
    try {
      const dataBanner = await movieSer.getBannerMovie();
      let newDataBanner = dataBanner.data.content;
      setDataBan(newDataBanner);
    } catch (error) {}
  };

  useEffect(() => {
    fetchBannerMovie();
  }, []);

  return (
    <div className="relative">
      <Carousel ref={carouRef}>
        {/* Map  */}

        {dataBan.map((banner) => {
          return (
            <div key={banner.maBanner} className=" w-full ">
              <img
                style={{
                  height: "600px",
                }}
                className="object-cover object-center w-full "
                src={banner.hinhAnh}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
      <button
        onClick={() => {
          carouRef.current.next();
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-blue-500 duration-300"
      >
        <IonIcon icon={chevronForward}></IonIcon>
      </button>
      <button className="absolute left-3 top-1/2 -translate-y-1/2  text-white text-5xl hover:text-blue-500 duration-300">
        <IonIcon icon={chevronBack}></IonIcon>
      </button>
    </div>
  );
};

export default CarouselMovie;
