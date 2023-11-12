import PageWrapper from '../layout/page-wrapper/page-wrapper';
import { GlobalStyle } from './styles';
import AdvantagesList from '../../mocks/advantagesList';
import ProductList from '../../mocks/productList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../pages/main-page/main-page';
import BuyPage from '../pages/buy-page/buy-page';
import ScrollTop from '../ui/scroll-top/scroll-top';

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={ <PageWrapper /> }>
            <Route index element={<MainPage advantages={AdvantagesList} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, '')}
              element={<BuyPage products={ProductList} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
