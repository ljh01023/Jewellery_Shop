import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Count from '../components/Count';
import ProductCard from '../components/ProductCard';

import cssStyle from '../css/Detail.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/cartList';
import Modal from '../components/Modal';

export default function Detail() {
  let data = useSelector((a) => a.datalist);
  let [count, setCount] = useState(1);
  let [open, setOpen] = useState(true);
  let [modal, setModal] = useState(false);

  let { id } = useParams();
  let item = data.find((a) => String(a._id) === id);
  let reData = data.filter((a) => a.category === item.category);

  let dispatch = useDispatch();

  useEffect(() => {
    const watched = JSON.parse(localStorage.getItem('watched') || '[]');
    const updatedWatched = [...new Set([...watched, item._id])];
    localStorage.setItem('watched', JSON.stringify(updatedWatched));
  }, [item]);

  return (
    <main>
      {modal && <Modal setModal={setModal} />}

      <div className={cssStyle.detailCon}>
        <div className={cssStyle.img}>
          <img
            src={`${process.env.PUBLIC_URL}/img/${item.img}`}
            alt={item.title}
          />
        </div>
        <div className={cssStyle.desc}>
          <strong>{item.title}</strong>
          <span>{Number(item.price).toLocaleString()}원</span>
          <em>할인률 : {item.discount}%</em>
          <div className={cssStyle.count}>
            {count <= 1 ? (
              <button disabled>-</button>
            ) : (
              <button
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                -
              </button>
            )}

            <b>{count}</b>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                dispatch(
                  addItem({
                    _id: item._id,
                    title: item.title,
                    img: item.img,
                    price: item.price,
                    count: count,
                  })
                );
                setModal(true);
              }}
              className={cssStyle.btnAdd}
            >
              add cart
            </button>
          </div>
        </div>
      </div>
      <div style={{ paddingBottom: '50px' }}>
        <Tabs
          defaultActiveKey='Description'
          id='fill-tab-example'
          className='mb-3'
          fill
        >
          <Tab eventKey='Description' title='Description'>
            <div>11상품설명 컨포넌트가 들어가는 곳</div>
          </Tab>
          <Tab eventKey='information' title='Aditional information'>
            <div>22상품설명 컨포넌트가 들어가는 곳</div>
          </Tab>
          <Tab eventKey='Reviews' title='Reviews'>
            <div>리뷰 컨포넌트가 들어가는 곳</div>
          </Tab>
        </Tabs>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={20}
        className={cssStyle.slide1}
      >
        {reData.map((data) => (
          <SwiperSlide key={data._id}>
            <ProductCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
