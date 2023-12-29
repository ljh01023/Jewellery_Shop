import cssStyle from '../css/Count.module.css';
export default function Count() {
  return (
    <div className={cssStyle.count}>
      <button>-</button>
      <b>0</b>
      <button>+</button>
      <button className={cssStyle.btnAdd}>add cart</button>
    </div>
  );
}
