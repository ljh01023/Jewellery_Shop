import { Route, Routes } from 'react-router-dom';
import Layout from './elements/Layout';
import BolgLayout from './elements/BolgLayout';
import Main from './pages/Main';
import ShopAll from './pages/ShopAll';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="shopList" element={<ShopAll />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="blog" element={<BolgLayout />}>
          <Route path="blog1" element={<>블로그 리스트 1</>} />
          <Route path="blog2" element={<>블로그 리스트 2</>} />
        </Route>
        <Route path="company" element={<>회사소개 페이지 입니다.</>} />
        <Route path="cart" element={<Cart />} />
        <Route path="search" element={<>검색페이지 입니다.</>} />
        <Route path="mypage" element={<>마이페이지 입니다.~~~~</>} />
      </Route>
      <Route path="*" element={<>404 잘못된 접근입니다</>} />
    </Routes>
  );
}

export default App;
