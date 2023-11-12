import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../../const';
import Button from '../../ui/button/button';
import { StyledButtonMain } from './style';

const buttons = [
  {
    id: 0,
    to: AppRoute.BUY,
    button: (<Button link={AppRoute.BUY} minWidth={'260'}>Купить</Button>)
  },

  {
    id: 1,
    to: AppRoute.MAIN,
    button: (<StyledButtonMain link={AppRoute.MAIN} minWidth={'80'}>Главная</StyledButtonMain>)
  }
];

function Navigation() {
  const pageUrl = useLocation().pathname;

  return (
    <nav>
      <nav>
        {buttons
          .filter((button) => button.to !== pageUrl)
          .map((button) => button.button)
        }
      </nav>
    </nav>
  );
}

export default Navigation;
