import { Link, Outlet } from 'react-router-dom';
export default function BolgLayout() {
  return (
    <>
      <p>블로그 상단 고정영역의 컨포넌트가 들어감</p>
      <p>
        <Link to="/blog/blog1">리스트1</Link>
        <Link to="/blog/blog2">리스트2</Link>
      </p>
      <Outlet></Outlet>
    </>
  );
}
