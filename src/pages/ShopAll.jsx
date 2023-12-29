import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import cssStyle from '../css/ShopAll.module.css';
import { useSelector } from 'react-redux';
export default function ShopAll() {
  let data = useSelector((a) => a.datalist);

  let [dataList, setDataList] = useState(data);
  return (
    <main className={cssStyle.mainCon}>
      <div className={cssStyle.btns}>
        <button
          onClick={() => {
            setDataList(data);
          }}
        >
          상품등록순
        </button>
        <button
          onClick={() => {
            setDataList([...dataList].sort((a, b) => a.price - b.price));
          }}
        >
          낮은가격순
        </button>
        <button
          onClick={() => {
            setDataList([...dataList].sort((a, b) => b.price - a.price));
          }}
        >
          높은가격순
        </button>
        <button
          onClick={() => {
            setDataList([...dataList].sort((a, b) => b.discount - a.discount));
          }}
        >
          높은할인률
        </button>
        <button
          onClick={() => {
            setDataList([...data].filter((data) => data.category === 'new'));
          }}
        >
          신상품(new)
        </button>
        <button
          onClick={() => {
            setDataList([...data].filter((data) => data.category === 'top'));
          }}
        >
          인기상품(top)
        </button>
      </div>

      <ul className={cssStyle.listCon}>
        {dataList.map((data) => {
          return (
            <li key={data._id}>
              <ProductCard data={data} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
