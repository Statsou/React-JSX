import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../../ui/title/title';
import Button from '../../ui/button/button';
import { TextInput } from '../../styled/text-input/text-input';

export const StyledSection = styled.section `
  display: flex;
  padding: 40px 90px 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colorForGrey};
`;

export const Panel = styled.div `
  min-width: 353px;
  height: fit-content;
  margin: 0 20px 0 0;
`;

export const TitleForm = styled(Title) `
  margin: 0 0 12px;
`;

export const FormItem = styled.div `
  padding: 23px 20px 11px;
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid #0000001A;
  box-shadow: 0px 0px 1px 0px #0000000A;
  box-shadow: 0px 2px 6px 0px #0000000A;
  box-shadow: 0px 10px 20px 0px #0000000A;

  &:not(:last-child) {
    margin-bottom: 18px;
  }
`;

export const StyledSwiper = styled(Swiper) `
  height: 728px;
  margin: 0;
`;

export const StyledSlide = styled(SwiperSlide) `
  background-color: ${(props) => props.theme.colorWhite};
  height: 288px;
  border: 1px solid #0000001A;
  box-shadow: 0px 0px 1px 0px #0000000A;
  box-shadow: 0px 2px 6px 0px #0000000A;
  box-shadow: 0px 10px 20px 0px #0000000A;

  &:last-child {
    margin: 0 0 40px;
  }
`;

export const CheckboxLabelProduct = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    transition: color 0.2s ease-out, background-color 0.2s ease-out;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url('/src/assets/is-checked.svg');
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${(props) => props.theme.colorForGrey};;
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;

export const StyledTextInput = styled(TextInput) `
  margin: 12px 0 21px;
`;

export const Price = styled.p `
  font-size: 14px;
  line-height: 21px;

  margin: 0 0 33px;
  padding: 0;
`;

export const FullPrice = styled.span `
  font-size: 24px;
  line-height: 31px;
  font-weight: 700;

  display: block;
  margin: 7px 0;
`;

export const StyledButton = styled(Button) `
  margin: 0 0 9px;
`;
