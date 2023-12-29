import cssStyle from '../css/Counter.module.css';
export default function Counter() {
  return (
    <div className={cssStyle.counter}>
      <button>-</button>
      <span>1</span>
      <button>+</button>
    </div>
  );
}
