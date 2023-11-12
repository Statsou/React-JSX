import { Price, Content } from './style';

function DescriptionTabs ({ product }) {
  return (
    <>
      <Content>{product.description}</Content>
      <Price>{product.price} руб. / {product.grams} гр.</Price>
    </>
  );
}

export { DescriptionTabs };
