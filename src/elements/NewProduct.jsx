import { useNavigate } from 'react-router-dom';
import cssStyles from '../css/NewListCon.module.css';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

export default function NewProduct() {
  let data = useSelector((a) => a.datalist);
  let newData = data.filter((data) => data.category === 'new');
  let navigate = useNavigate();
  return (
    <section className={cssStyles.newProduct}>
      <h2>최신상품 리스트</h2>
      <button
        onClick={() => {
          navigate('/shopList');
        }}
      >
        view all
      </button>
      <ul>
        {newData.map((data) => {
          return (
            <li className={cssStyles.pCard} key={data._id}>
              <ProductCard data={data} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
