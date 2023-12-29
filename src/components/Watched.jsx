import { useSelector } from 'react-redux';
import cssStyle from '../css/Watched.module.css';
import { useNavigate } from 'react-router-dom';

export default function Watched() {
  let navigate = useNavigate();
  let w_data = useSelector((a) => a.watched);
  let data = useSelector((a) => a.datalist);
  let watchList = data.filter((item) => w_data.includes(item._id));

  return (
    <div className={cssStyle.watched}>
      <h2>최근 본 상품</h2>
      <ul>
        {watchList.map((a, i) => (
          <li
            key={i}
            onClick={() => {
              navigate(`/detail/${a._id}`);
            }}
          >
            <img src={`${process.env.PUBLIC_URL}/img/${a.img}`} alt={a.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
