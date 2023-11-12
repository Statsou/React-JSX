import Title, { TitleLevel, TitleSize } from '../title/title';
import { Tabs } from '../tabs/tabs';
import { OptionsList } from '../options-list/options-list';
import { DescriptionTabs } from '../description-tabs/desciptionTabs';
import {Card, Image } from './style';

function ProductCard({ product }) {
  const tabs = [
    {
      title: 'Описание',
      content: <DescriptionTabs product={product} />
    },

    {
      title: 'Характеристики',
      content: <OptionsList list={product.specifications} />
    },

    {
      title: 'Свойства',
      content: <OptionsList list={product.structure} />
    }
  ];

  return (
    <Card>
      <Image src={product.src} alt={product.alt} width={248} height={248}/>
      <Title size={TitleSize.MEDIUM} level={TitleLevel.H2}>{product.name}</Title>
      <Tabs tabs={tabs}/>
    </Card>
  );
}

export { ProductCard };
