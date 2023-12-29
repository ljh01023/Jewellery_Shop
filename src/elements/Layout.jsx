import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Watched from '../components/Watched';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Layout() {
  let w_data = useSelector((a) => a.watched);
  let [isWatch, setIsWatch] = useState(true);

  useEffect(() => {
    if (w_data === null || w_data.length === 0) {
      setIsWatch(false);
    } else {
      setIsWatch(true);
    }
  }, [w_data]);

  return (
    <div className="mw">
      {isWatch && <Watched />}
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
