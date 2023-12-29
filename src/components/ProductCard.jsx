import cssStyle from '../css/ProductCard.module.css';
import { useNavigate } from 'react-router-dom';
export default function ProductCard({ data }) {
  let navigate = useNavigate();
  return (
    <div
      className={cssStyle.productCard}
      onClick={() => {
        navigate(`/detail/${data._id}`);
      }}
    >
      {data.discount === '0' ? '' : <p>{data.discount}%</p>}

      <div>
        <img
          src={`${process.env.PUBLIC_URL}/img/${data.img}`}
          alt={data.title}
        />
      </div>
      <div>
        <strong>{data.title}</strong>
        <span>{Number(data.price).toLocaleString()}원</span>
      </div>
    </div>
  );
}
