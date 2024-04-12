import ListGhe from './ListGhe/ListGhe';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { message } from 'antd';
import InfoGhe from './ListGhe/InfoGhe';

const ScreenPage = () => {
  const { maLichChieu } = useParams();
  const navigate = useNavigate();
  const {infoUser} = useSelector((state) => state.userReducer);

  useEffect(()=>{
    if (!infoUser) {
      message.error("Vui lòng đăng nhập để được đặt vé");
      navigate('/auth/login')
    }
  },[])

  return (
    <div className="flex">
      <ListGhe maLichChieu={maLichChieu} />
      <InfoGhe/>
    </div>
  );
};

export default ScreenPage;
