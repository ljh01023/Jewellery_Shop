import { useNavigate } from 'react-router-dom';
import cssStyle from '../css/Modal.module.css';
export default function Modal({ setModal }) {
  let navigate = useNavigate();
  return (
    <div className={cssStyle.modal}>
      <div className={cssStyle._inner}>
        <div>장바구니에 등록되었습니다.</div>
        <button
          onClick={() => {
            setModal(false);
          }}
        >
          계속 쇼핑하기
        </button>
        <button
          onClick={() => {
            navigate('/cart');
          }}
        >
          장바구니 확인하기
        </button>
      </div>
    </div>
  );
}
