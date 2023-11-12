import { TitleSize, TitleLevel } from '../../ui/title/title';
import AdvantagesBadge, {AdvantageType} from '../advantage-badge/advantage-badge';
import { Article, Icon, CardTitle, Text } from './style';

function AdvantagesCard({title, description, type, image, alt}) {
  let options;

  switch (type) {
    case AdvantageType.FARMER:
      options = {
        row: '25px 27px 1fr',
        bgColor: '#E1EDCE'
      };
      break;
    case AdvantageType.MARKET:
      options = {
        row: '29px 23px 1fr',
        bgColor: '#F8DDD7'
      };
      break;
  }

  return (
    <Article style={{ backgroundColor: options.bgColor, gridTemplateRows: options.row }}>
      <Icon>
        <img
        src={image}
        width={56}
        height={56}
        alt={alt}/>
      </Icon>
      <AdvantagesBadge type={type}/>
      <CardTitle size={TitleSize.SMALL} level={TitleLevel.H3}>{title}</CardTitle>
      <Text>
        {description}
      </Text>
    </Article>
  );
}

export default AdvantagesCard;
