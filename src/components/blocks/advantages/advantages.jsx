import { TitleSize, TitleLevel } from '../../ui/title/title';
import AdvantagesCard from '../../ui/advantages-card/advantages-card';
import Button from '../../ui/button/button';
import { AdvantagesSection, AdvantagesTitle, Ul, Li } from './style';
import { AppRoute } from '../../../const';

function Advantages({ advantages }) {
  return (
    <AdvantagesSection>
      {advantages?.length ? (
        <>
          <AdvantagesTitle size={TitleSize.BIG} level={TitleLevel.H2}>Почему фермерские продукты лучше?</AdvantagesTitle>
          <Ul className='advantages__list'>
            {advantages.map((advantage) => (
              <Li className='advantages__item' key={advantage.id}>
                <AdvantagesCard {...advantage}/>
              </Li>
            ))}
          </Ul>
          <Button link={AppRoute.BUY} minWidth={'260'}>Купить</Button>
        </>
      ) : null}
    </AdvantagesSection>
  );
}


export default Advantages;
