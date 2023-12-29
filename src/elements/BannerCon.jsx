import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { bannerList } from '../productData';

import cssStyles from '../css/BannerCon.module.css';

export default function BannerCon() {
  let [bannerData] = useState(bannerList);
  let navigate = useNavigate();

  return (
    <section className={cssStyles.bannerCon}>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className={cssStyles.bannerList}
      >
        {bannerData.map((data) => {
          return (
            <SwiperSlide key={data._id}>
              <div className={cssStyles.BCard}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/${data.bannerImg}`}
                  alt={data.title}
                />
                <div>
                  <p>{data.title}</p>
                  <p>{data.price}</p>
                  <button
                    onClick={() => {
                      navigate('/detail');
                    }}
                  >
                    View Product
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
