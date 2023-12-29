import cssStyle from '../css/Cart.module.css';
// import Counter from '../components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeAge } from '../store/userList';
import { plusCount, minusCount, delItem } from '../store/cartList';
import { useNavigate } from 'react-router-dom';

let iconTrash = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='16'
    width='14'
    viewBox='0 0 448 512'
  >
    <path d='M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z' />
  </svg>
);

export default function Cart() {
  let userName = useSelector((a) => a.user);
  let cartList = useSelector((a) => a.cartList);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <main className={cssStyle.cartPage}>
      <h2>Shopping cart</h2>
      <button
        onClick={() => {
          dispatch(changeName());
          dispatch(changeAge(20));
        }}
      >
        회원정보 변경
      </button>
      <p>
        <strong>{userName.name}</strong>
        <span>{userName.age} 세</span> have <span>{cartList.length}</span> item
        in your cart
      </p>
      <ul className={cssStyle.cartList}>
        {cartList.map((list) => (
          <li key={list._id}>
            <div
              className={cssStyle.img}
              onClick={() => {
                navigate(`/detail/${list._id}`);
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/img/${list.img}`}
                alt={list.title}
              />
            </div>
            <p className={cssStyle.title}>{list.title}</p>
            <p className={cssStyle.price}>
              {Number(list.price).toLocaleString()}원
            </p>
            <p className={cssStyle.totalPrice}>
              {Number(list.price * list.count).toLocaleString()} 원
            </p>

            <div className={cssStyle.counter}>
              {list.count <= 1 ? (
                <button disabled>-</button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(minusCount(list._id));
                  }}
                >
                  -
                </button>
              )}

              <span>{list.count}</span>
              <button
                onClick={() => {
                  dispatch(plusCount(list._id));
                }}
              >
                +
              </button>
            </div>

            <button
              className={cssStyle.btnDel}
              onClick={() => {
                dispatch(delItem(list._id));
              }}
            >
              {iconTrash}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
