import Header from '../header/header';
import Footer from '../footer/footer';
import { Outlet } from 'react-router-dom';

function PageWrapper() {
  return (
    <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  );
}

export default PageWrapper;
