import { Badge } from './style';

export const AdvantageType = {
  FARMER: 'farmer',
  MARKET: 'market'
};

function AdvantagesBadge({ type }) {
  let options;

  switch (type) {
    case AdvantageType.FARMER:
      options = {
        text: 'Фермерские продукты',
        bgColor: '#88AA4D',
        padding: '2px 10px'
      };
      break;
    case AdvantageType.MARKET:
      options = {
        text: 'Магазинные продукты',
        bgColor: '#F75531',
        padding: '5px 10px'
      };
      break;
  }

  return options.text ? (
    <Badge
      style={{ backgroundColor: options.bgColor, padding: options.padding }}
    >
      {options.text}
    </Badge>
  ) : null;
}

export default AdvantagesBadge;
