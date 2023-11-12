import { useState } from 'react';
import { ProductCard } from '../../ui/product-card/product-card';
import { TitleSize, TitleLevel } from '../../ui/title/title';
import CheckboxList from '../../ui/checkbox-list/checkbox-list';
import { Form } from '../../styled/form/form';
import { Fieldset } from '../../styled/fieldset/fieldset';

import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import {
  StyledSection,
  Panel,
  StyledSwiper,
  StyledSlide,
  TitleForm,
  CheckboxLabelProduct,
  StyledTextInput,
  Price,
  FullPrice,
  StyledButton,
  FormItem } from './style';


function BuyPage({ products }) {
  const [swiperRef, setSwiperRef] = useState (null);
  const [selectProductIds, setSelectProductIds] = useState([0, 1, 2]);
  const [address, setAddress] = useState('');

  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );

  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += Number(product.price)),
    0
  );

  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const handleBuyClick = () => {
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.name} - ${product.price} руб.`)
    .join('\n')}\n
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  return (
    <StyledSection>
      <Panel>
        <Form action='https://echo.htmlacademy.ru/' method='post'>
          <FormItem>
          <TitleForm size={TitleSize.SMALL} level={TitleLevel.H2}>Выберите продукты</TitleForm>
            <Fieldset>
              <CheckboxList
                name={'select-name'}
                options={products.map((product) => ({
                  value: product.id,
                  title: product.name
                }))}
                labelComponent={CheckboxLabelProduct}
                selectValues={selectProductIds}
                onChange={setSelectProductIds}
                onClickLabel={handleOnClickProduct}
              />
              </Fieldset>
            </FormItem>

            <FormItem>
            <TitleForm size={TitleSize.SMALL} level={TitleLevel.H2}>Сделать заказ</TitleForm>
            <StyledTextInput
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='Введите адрес доставки'
            />
            <Price>Цена <FullPrice>{fullPrice} руб.</FullPrice></Price>
            <StyledButton
              minWidth={'314'}
              onClick={handleBuyClick}
              disabled={!(selectProductIds.length && address)}
            >
              Купить
            </StyledButton>
            </FormItem>
        </Form>
      </Panel>
      <StyledSwiper
        onSwiper={setSwiperRef}
        spaceBetween={10}
        direction="vertical"
        slidesPerView="auto"
        freeMode={true}
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: 'fanction'
        }}
        modules={[FreeMode, Scrollbar, Mousewheel]}
      >
        {products?.map((product) => (
          <StyledSlide key={product.id}>
            <ProductCard product={product} />
          </StyledSlide>
        ))}
      </StyledSwiper>
    </StyledSection>
  );
}

export default BuyPage;
