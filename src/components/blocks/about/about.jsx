import { TitleLevel } from '../../ui/title/title';
import { AboutSection, AboutTitle, Text } from './style';

function About() {
  return (
  <AboutSection>
    <AboutTitle level={TitleLevel.H1}>Магазин фермерских продуктов с доставкой</AboutTitle>
    <Text>
      Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам.
      Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
    </Text>
  </AboutSection>
  );
}

export default About;
