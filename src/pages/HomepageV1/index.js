import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Slider } from "components/Slider";
import { PagerIndicator } from "components/PagerIndicator";
import { Grid } from "components/Grid";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";

const HomepageV1Page = () => {
  const navigate = useNavigate();

  const handleNavigate1 = () => navigate("/homepagev2");

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Stack className="lg:h-[56px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] h-[95px] w-[100%]">
            <Image
              src="img_background.svg"
              className="absolute lg:h-[56px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] h-[95px] inset-[0] object-cover w-[100%]"
              alt="background"
            />
            <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[85%]">
              <Row className="items-center justify-start 3xl:mb-[11px] mb-[13px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[7%]">
                <Image
                  src="img_group19.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain w-[35%]"
                  alt="Group19"
                />
                <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Elliye`}</Text>
              </Row>
              <Row className="items-center justify-center xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[228px] xl:ml-[261px] 2xl:ml-[294px] 3xl:ml-[353px] ml-[392px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] w-[38%]">
                <Text className="cursor-pointer hover:font-medium font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Categories`}</Text>
                <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`New Arrival`}</Text>
                <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Features`}</Text>
                <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Collections`}</Text>
              </Row>
              <Row className="items-center justify-between lg:ml-[151px] xl:ml-[172px] 2xl:ml-[194px] 3xl:ml-[233px] ml-[259px] w-[15%]">
                <Image
                  src="img_icon.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain w-[33%]"
                  alt="icon"
                />
                <Button
                  className="common-pointer bg-gray_800 border-bw font-bold lg:px-[16px] xl:px-[19px] 2xl:px-[21px] 3xl:px-[25px] px-[28.5px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 w-[44%]"
                  onClick={handleNavigate1}
                >{`Login`}</Button>
              </Row>
            </Row>
          </Stack>
        </header>
        <Stack className="lg:h-[409px] xl:h-[468px] 2xl:h-[526px] 3xl:h-[631px] h-[700px] w-[100%]">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            slidesToShow={1}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="absolute inset-[0] w-[100%]"
            items={[
              <Row className="bg-gray_100 items-center justify-end">
                <Stack className="lg:h-[409px] xl:h-[468px] 2xl:h-[526px] 3xl:h-[631px] h-[700px] 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[49%]">
                  <Image
                    src="img_placeholder.png"
                    className="absolute bottom-[0] lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-contain right-[0] w-[41%]"
                    alt="placeholder"
                  />
                  <Image
                    src="img_placeholder_1.png"
                    className="absolute lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-contain right-[0] top-[0] w-[41%]"
                    alt="placeholder"
                  />
                  <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[70%]">
                    <Text className="font-normal font-playfairdisplay not-italic lg:text-fs56 xl:text-fs64 2xl:text-fs72 3xl:text-fs86 text-fs96 text-gray_800 text-left">{`Summer Sale`}</Text>
                    <Text className="font-bold font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs37 xl:text-fs42 2xl:text-fs48 3xl:text-fs57 text-fs64 text-gray_800 text-left">{`50% Off`}</Text>
                    <Text className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[79%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                    <Row className="bg-gray_800 font-poppins items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[37%]">
                      <Text className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Shop Now`}</Text>
                      <Image
                        src="img_arrow.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[24px] 3xl:mr-[29px] mr-[33px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain rotate-[90deg] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="Arrow"
                      />
                    </Row>
                  </Column>
                </Stack>
                <Column className="w-[44%]">
                  <Image
                    src="img_placeholder_2.png"
                    className="lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-cover w-[100%]"
                    alt="placeholder"
                  />
                  <Row className="items-center justify-evenly w-[100%]">
                    <Image
                      src="img_placeholder_3.png"
                      className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-contain w-[46%]"
                      alt="placeholder"
                    />
                    <Stack className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] w-[54%]">
                      <Image
                        src="img_placeholder_4.png"
                        className="absolute lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] inset-[0] object-cover rotate-[-180deg] w-[100%]"
                        alt="placeholder"
                      />
                      <Image
                        src="img_button.svg"
                        className="absolute bottom-[0] lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] inset-x-[0] mx-[auto] object-contain w-[35%]"
                        alt="button"
                      />
                    </Stack>
                  </Row>
                </Column>
              </Row>,

              <Row className="bg-gray_100 items-center justify-end">
                <Stack className="lg:h-[409px] xl:h-[468px] 2xl:h-[526px] 3xl:h-[631px] h-[700px] 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[49%]">
                  <Image
                    src="img_placeholder.png"
                    className="absolute bottom-[0] lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-contain right-[0] w-[41%]"
                    alt="placeholder"
                  />
                  <Image
                    src="img_placeholder_1.png"
                    className="absolute lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-contain right-[0] top-[0] w-[41%]"
                    alt="placeholder"
                  />
                  <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[70%]">
                    <Text className="font-normal font-playfairdisplay not-italic lg:text-fs56 xl:text-fs64 2xl:text-fs72 3xl:text-fs86 text-fs96 text-gray_800 text-left">{`Summer Sale`}</Text>
                    <Text className="font-bold font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs37 xl:text-fs42 2xl:text-fs48 3xl:text-fs57 text-fs64 text-gray_800 text-left">{`50% Off`}</Text>
                    <Text className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[79%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                    <Row className="bg-gray_800 font-poppins items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[37%]">
                      <Text className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Shop Now`}</Text>
                      <Image
                        src="img_arrow.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[24px] 3xl:mr-[29px] mr-[33px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain rotate-[90deg] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="Arrow"
                      />
                    </Row>
                  </Column>
                </Stack>
                <Column className="w-[44%]">
                  <Image
                    src="img_placeholder_2.png"
                    className="lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-cover w-[100%]"
                    alt="placeholder"
                  />
                  <Row className="items-center justify-evenly w-[100%]">
                    <Image
                      src="img_placeholder_3.png"
                      className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-contain w-[46%]"
                      alt="placeholder"
                    />
                    <Stack className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] w-[54%]">
                      <Image
                        src="img_placeholder_4.png"
                        className="absolute lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] inset-[0] object-cover rotate-[-180deg] w-[100%]"
                        alt="placeholder"
                      />
                      <Image
                        src="img_button.svg"
                        className="absolute bottom-[0] lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] inset-x-[0] mx-[auto] object-contain w-[35%]"
                        alt="button"
                      />
                    </Stack>
                  </Row>
                </Column>
              </Row>,

              <Row className="bg-gray_100 items-center justify-end">
                <Stack className="lg:h-[409px] xl:h-[468px] 2xl:h-[526px] 3xl:h-[631px] h-[700px] 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[49%]">
                  <Image
                    src="img_placeholder.png"
                    className="absolute bottom-[0] lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-contain right-[0] w-[41%]"
                    alt="placeholder"
                  />
                  <Image
                    src="img_placeholder_1.png"
                    className="absolute lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-contain right-[0] top-[0] w-[41%]"
                    alt="placeholder"
                  />
                  <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[70%]">
                    <Text className="font-normal font-playfairdisplay not-italic lg:text-fs56 xl:text-fs64 2xl:text-fs72 3xl:text-fs86 text-fs96 text-gray_800 text-left">{`Summer Sale`}</Text>
                    <Text className="font-bold font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs37 xl:text-fs42 2xl:text-fs48 3xl:text-fs57 text-fs64 text-gray_800 text-left">{`50% Off`}</Text>
                    <Text className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[79%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                    <Row className="bg-gray_800 font-poppins items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[37%]">
                      <Text className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Shop Now`}</Text>
                      <Image
                        src="img_arrow.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[24px] 3xl:mr-[29px] mr-[33px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain rotate-[90deg] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="Arrow"
                      />
                    </Row>
                  </Column>
                </Stack>
                <Column className="w-[44%]">
                  <Image
                    src="img_placeholder_2.png"
                    className="lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-cover w-[100%]"
                    alt="placeholder"
                  />
                  <Row className="items-center justify-evenly w-[100%]">
                    <Image
                      src="img_placeholder_3.png"
                      className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-contain w-[46%]"
                      alt="placeholder"
                    />
                    <Stack className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] w-[54%]">
                      <Image
                        src="img_placeholder_4.png"
                        className="absolute lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] inset-[0] object-cover rotate-[-180deg] w-[100%]"
                        alt="placeholder"
                      />
                      <Image
                        src="img_button.svg"
                        className="absolute bottom-[0] lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] inset-x-[0] mx-[auto] object-contain w-[35%]"
                        alt="button"
                      />
                    </Stack>
                  </Row>
                </Column>
              </Row>,

              <Row className="bg-gray_100 items-center justify-end">
                <Stack className="lg:h-[409px] xl:h-[468px] 2xl:h-[526px] 3xl:h-[631px] h-[700px] 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[49%]">
                  <Image
                    src="img_placeholder.png"
                    className="absolute bottom-[0] lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-contain right-[0] w-[41%]"
                    alt="placeholder"
                  />
                  <Image
                    src="img_placeholder_1.png"
                    className="absolute lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-contain right-[0] top-[0] w-[41%]"
                    alt="placeholder"
                  />
                  <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[70%]">
                    <Text className="font-normal font-playfairdisplay not-italic lg:text-fs56 xl:text-fs64 2xl:text-fs72 3xl:text-fs86 text-fs96 text-gray_800 text-left">{`Summer Sale`}</Text>
                    <Text className="font-bold font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs37 xl:text-fs42 2xl:text-fs48 3xl:text-fs57 text-fs64 text-gray_800 text-left">{`50% Off`}</Text>
                    <Text className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[79%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                    <Row className="bg-gray_800 font-poppins items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[37%]">
                      <Text className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Shop Now`}</Text>
                      <Image
                        src="img_arrow.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[24px] 3xl:mr-[29px] mr-[33px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain rotate-[90deg] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="Arrow"
                      />
                    </Row>
                  </Column>
                </Stack>
                <Column className="w-[44%]">
                  <Image
                    src="img_placeholder_2.png"
                    className="lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-cover w-[100%]"
                    alt="placeholder"
                  />
                  <Row className="items-center justify-evenly w-[100%]">
                    <Image
                      src="img_placeholder_3.png"
                      className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-contain w-[46%]"
                      alt="placeholder"
                    />
                    <Stack className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] w-[54%]">
                      <Image
                        src="img_placeholder_4.png"
                        className="absolute lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] inset-[0] object-cover rotate-[-180deg] w-[100%]"
                        alt="placeholder"
                      />
                      <Image
                        src="img_button.svg"
                        className="absolute bottom-[0] lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] inset-x-[0] mx-[auto] object-contain w-[35%]"
                        alt="button"
                      />
                    </Stack>
                  </Row>
                </Column>
              </Row>,

              <Row className="bg-gray_100 items-center justify-end">
                <Stack className="lg:h-[409px] xl:h-[468px] 2xl:h-[526px] 3xl:h-[631px] h-[700px] 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[49%]">
                  <Image
                    src="img_placeholder.png"
                    className="absolute bottom-[0] lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-contain right-[0] w-[41%]"
                    alt="placeholder"
                  />
                  <Image
                    src="img_placeholder_1.png"
                    className="absolute lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-contain right-[0] top-[0] w-[41%]"
                    alt="placeholder"
                  />
                  <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[70%]">
                    <Text className="font-normal font-playfairdisplay not-italic lg:text-fs56 xl:text-fs64 2xl:text-fs72 3xl:text-fs86 text-fs96 text-gray_800 text-left">{`Summer Sale`}</Text>
                    <Text className="font-bold font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs37 xl:text-fs42 2xl:text-fs48 3xl:text-fs57 text-fs64 text-gray_800 text-left">{`50% Off`}</Text>
                    <Text className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[79%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                    <Row className="bg-gray_800 font-poppins items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[37%]">
                      <Text className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Shop Now`}</Text>
                      <Image
                        src="img_arrow.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[24px] 3xl:mr-[29px] mr-[33px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain rotate-[90deg] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="Arrow"
                      />
                    </Row>
                  </Column>
                </Stack>
                <Column className="w-[44%]">
                  <Image
                    src="img_placeholder_2.png"
                    className="lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-cover w-[100%]"
                    alt="placeholder"
                  />
                  <Row className="items-center justify-evenly w-[100%]">
                    <Image
                      src="img_placeholder_3.png"
                      className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-contain w-[46%]"
                      alt="placeholder"
                    />
                    <Stack className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] w-[54%]">
                      <Image
                        src="img_placeholder_4.png"
                        className="absolute lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] inset-[0] object-cover rotate-[-180deg] w-[100%]"
                        alt="placeholder"
                      />
                      <Image
                        src="img_button.svg"
                        className="absolute bottom-[0] lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] inset-x-[0] mx-[auto] object-contain w-[35%]"
                        alt="button"
                      />
                    </Stack>
                  </Row>
                </Column>
              </Row>,

              <Row className="bg-gray_100 items-center justify-end">
                <Stack className="lg:h-[409px] xl:h-[468px] 2xl:h-[526px] 3xl:h-[631px] h-[700px] 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[49%]">
                  <Image
                    src="img_placeholder.png"
                    className="absolute bottom-[0] lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-contain right-[0] w-[41%]"
                    alt="placeholder"
                  />
                  <Image
                    src="img_placeholder_1.png"
                    className="absolute lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-contain right-[0] top-[0] w-[41%]"
                    alt="placeholder"
                  />
                  <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[70%]">
                    <Text className="font-normal font-playfairdisplay not-italic lg:text-fs56 xl:text-fs64 2xl:text-fs72 3xl:text-fs86 text-fs96 text-gray_800 text-left">{`Summer Sale`}</Text>
                    <Text className="font-bold font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs37 xl:text-fs42 2xl:text-fs48 3xl:text-fs57 text-fs64 text-gray_800 text-left">{`50% Off`}</Text>
                    <Text className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[79%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                    <Row className="bg-gray_800 font-poppins items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[37%]">
                      <Text className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Shop Now`}</Text>
                      <Image
                        src="img_arrow.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[24px] 3xl:mr-[29px] mr-[33px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain rotate-[90deg] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="Arrow"
                      />
                    </Row>
                  </Column>
                </Stack>
                <Column className="w-[44%]">
                  <Image
                    src="img_placeholder_2.png"
                    className="lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-cover w-[100%]"
                    alt="placeholder"
                  />
                  <Row className="items-center justify-evenly w-[100%]">
                    <Image
                      src="img_placeholder_3.png"
                      className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-contain w-[46%]"
                      alt="placeholder"
                    />
                    <Stack className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] w-[54%]">
                      <Image
                        src="img_placeholder_4.png"
                        className="absolute lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] inset-[0] object-cover rotate-[-180deg] w-[100%]"
                        alt="placeholder"
                      />
                      <Image
                        src="img_button.svg"
                        className="absolute bottom-[0] lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] inset-x-[0] mx-[auto] object-contain w-[35%]"
                        alt="button"
                      />
                    </Stack>
                  </Row>
                </Column>
              </Row>,
            ]}
          />
          <PagerIndicator
            className="absolute bottom-[5%] h-[12px] inset-x-[0] mx-[auto] w-[auto]"
            count={6}
            activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_800"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700"
            sliderRef={sliderRef}
            selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
            unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
          />
        </Stack>
        <Column className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[85%]">
          <Row className="items-center justify-between w-[100%]">
            <Text className="font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left">{`Categories`}</Text>
            <Row className="items-center justify-between 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[7%]">
              <Text className="font-medium my-[1px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`View all`}</Text>
              <Image
                src="img_arrow_1.svg"
                className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] object-contain rotate-[90deg] w-[29%]"
                alt="Arrow"
              />
            </Row>
          </Row>
          <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
            <Column className="bg-gray_100 items-center w-[15%]">
              <Image
                src="img_sweater.svg"
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] mx-[auto] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                alt="Sweater"
              />
              <Text className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Jacket`}</Text>
            </Column>
            <Column className="bg-gray_100 items-center w-[15%]">
              <Image
                src="img_tshirt.svg"
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] mx-[auto] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                alt="Tshirt"
              />
              <Text className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Shirt`}</Text>
            </Column>
            <Column className="bg-gray_100 items-center w-[15%]">
              <Image
                src="img_pants.svg"
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] mx-[auto] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                alt="Pants"
              />
              <Text className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Pants`}</Text>
            </Column>
            <Column className="bg-gray_800 items-center w-[15%]">
              <Image
                src="img_boot.svg"
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] mx-[auto] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                alt="Boot"
              />
              <Text className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`Shoes`}</Text>
            </Column>
            <Column className="bg-gray_100 items-center w-[15%]">
              <Image
                src="img_dress.svg"
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] mx-[auto] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                alt="Dress"
              />
              <Text className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Dress`}</Text>
            </Column>
            <Column className="bg-gray_100 items-center w-[15%]">
              <Image
                src="img_belt.svg"
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] mx-[auto] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                alt="Belt"
              />
              <Text className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Accesories`}</Text>
            </Column>
          </Row>
        </Column>
        <Column className="items-center justify-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Row className="items-center justify-between mx-[auto] w-[85%]">
            <Text className="font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left">{`New Arrivals`}</Text>
            <Row className="items-center justify-between 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[7%]">
              <Text className="font-medium my-[1px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`View all`}</Text>
              <Image
                src="img_arrow_2.svg"
                className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] object-contain rotate-[90deg] w-[29%]"
                alt="Arrow"
              />
            </Row>
          </Row>
          <Row className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] 2xl:px-[108px] 3xl:px-[129px] px-[144px] lg:px-[84px] xl:px-[96px] w-[100%]">
            <Row className="bg-gray_100 items-center justify-center w-[100%]">
              <Image
                src="img_placeholder_5.png"
                className="lg:h-[369px] xl:h-[421px] 2xl:h-[474px] 3xl:h-[569px] h-[631px] lg:ml-[35px] xl:ml-[41px] 2xl:ml-[46px] 3xl:ml-[55px] ml-[61.5px] lg:my-[16px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[25px] my-[28.5px] object-contain w-[48%]"
                alt="placeholder"
              />
              <Column className="items-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:mr-[35px] xl:mr-[41px] 2xl:mr-[46px] 3xl:mr-[55px] mr-[61.5px] lg:my-[155px] xl:my-[177px] 2xl:my-[200px] 3xl:my-[239px] my-[266.5px] w-[31%]">
                <Column className="items-center justify-start w-[100%]">
                  <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Purple Warm Jacket`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
                <Button className="bg-gray_800 border-bw font-bold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 w-[82%]">{`Add to Cart`}</Button>
              </Column>
            </Row>
            <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 w-[100%]">
              <Column className="bg-gray_100 items-center justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]">
                <Image
                  src="img_placeholder_6.png"
                  className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] h-[177px] mx-[auto] object-contain lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px] w-[177px]"
                  alt="placeholder"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[29px] xl:mx-[33px] 2xl:mx-[37px] 3xl:mx-[45px] mx-[50.5px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Blue Grey Warm Jacket`}</Text>
                <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
              <Column className="bg-gray_100 items-center justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]">
                <Image
                  src="img_placeholder_7.png"
                  className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] h-[177px] mx-[auto] object-contain lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px] w-[177px]"
                  alt="placeholder"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Denim Jacket`}</Text>
                <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
              <Column className="bg-gray_100 items-center justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]">
                <Image
                  src="img_placeholder_8.png"
                  className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] h-[177px] mx-[auto] object-contain lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px] w-[177px]"
                  alt="placeholder"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Black Jacket`}</Text>
                <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
              <Column className="bg-gray_100 items-center justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]">
                <Image
                  src="img_placeholder_9.png"
                  className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] h-[177px] mx-[auto] object-contain lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px] w-[177px]"
                  alt="placeholder"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Green Polar Jacket`}</Text>
                <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
            </Grid>
          </Row>
        </Column>
        <Column className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[85%]">
          <Row className="items-center justify-between w-[100%]">
            <Text className="font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left">{`Featured`}</Text>
            <Row className="items-center justify-between 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[7%]">
              <Text className="font-medium my-[1px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`View all`}</Text>
              <Image
                src="img_arrow_2.svg"
                className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] object-contain rotate-[90deg] w-[29%]"
                alt="Arrow"
              />
            </Row>
          </Row>
          <List
            className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
            orientation="vertical"
          >
            <Row className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
              <Column className="border-2 border-gray_800 border-solid items-center lg:py-[25px] xl:py-[29px] 2xl:py-[32px] 3xl:py-[39px] py-[43.5px] w-[24%]">
                <Image
                  src="img_placeholder_10.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="placeholder"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Black Briefcase`}</Text>
                <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                <Button className="bg-gray_800 border-bw font-bold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 w-[52%]">{`Add to Cart`}</Button>
              </Column>
              <Column className="items-center lg:py-[47px] xl:py-[54px] 2xl:py-[61px] 3xl:py-[73px] py-[81.5px] w-[24%]">
                <Image
                  src="img_placeholder_11.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="placeholder"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[29%]">
                  <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Pink Shirt`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center mb-[1px] lg:py-[47px] xl:py-[54px] 2xl:py-[60px] 3xl:py-[72px] py-[81px] w-[24%]">
                <Image
                  src="img_placeholder_12.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="placeholder"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[38%]">
                  <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Gray T-shirt`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center mt-[1px] lg:py-[47px] xl:py-[54px] 2xl:py-[60px] 3xl:py-[72px] py-[81px] w-[24%]">
                <Image
                  src="img_placeholder_13.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="placeholder"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[36%]">
                  <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Red Flannel`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
              </Column>
            </Row>
            <Row className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
              <Column className="items-center lg:py-[47px] xl:py-[54px] 2xl:py-[61px] 3xl:py-[73px] py-[81.5px] w-[24%]">
                <Image
                  src="img_stylishblacks.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="stylishblacks"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[50%]">
                  <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Black Highheels`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center lg:py-[47px] xl:py-[54px] 2xl:py-[61px] 3xl:py-[73px] py-[81.5px] w-[24%]">
                <Image
                  src="img_casualfabrics.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="casualfabrics"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[59%]">
                  <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Casual Grey Shoes`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center lg:py-[47px] xl:py-[54px] 2xl:py-[61px] 3xl:py-[73px] py-[81.5px] w-[24%]">
                <Image
                  src="img_shoesisolated.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="shoesisolated"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[40%]">
                  <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Brown Shoes`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center mt-[1px] lg:py-[47px] xl:py-[54px] 2xl:py-[60px] 3xl:py-[72px] py-[81px] w-[24%]">
                <Image
                  src="img_businessshirt.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="businessshirt"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[43%]">
                  <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Business Shirt`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
              </Column>
            </Row>
            <Row className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
              <Column className="items-center lg:py-[47px] xl:py-[54px] 2xl:py-[61px] 3xl:py-[73px] py-[81.5px] w-[24%]">
                <Image
                  src="img_warmpantspxl7.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="warmpantsPXL7"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[55%]">
                  <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Grey Warm Pants`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center lg:py-[47px] xl:py-[54px] 2xl:py-[61px] 3xl:py-[73px] py-[81.5px] w-[24%]">
                <Image
                  src="img_sportj9bzxuy.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="sportJ9BZXUY"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[60%]">
                  <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Green Sport Jacket`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center mb-[1px] lg:py-[47px] xl:py-[54px] 2xl:py-[60px] 3xl:py-[72px] py-[81px] w-[24%]">
                <Image
                  src="img_travel8v7cnke.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="travel8V7CNKE"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[64%]">
                  <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Purple Warm Jacket`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center mt-[1px] lg:py-[47px] xl:py-[54px] 2xl:py-[60px] 3xl:py-[72px] py-[81px] w-[24%]">
                <Image
                  src="img_womensdenimsk.png"
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="womensdenimsk"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[63%]">
                  <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Woman Denim Skirt`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
              </Column>
            </Row>
          </List>
        </Column>
        <Stack className="lg:h-[318px] xl:h-[363px] 2xl:h-[409px] 3xl:h-[490px] h-[544px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] mt-[74px] w-[100%]">
          <Column className="absolute bg-gray_800 items-center justify-start top-[0] w-[100%]">
            <Text className="font-bold lg:mb-[190px] xl:mb-[218px] 2xl:mb-[245px] 3xl:mb-[294px] mb-[327px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-white_A700">{`Summer Collections`}</Text>
          </Column>
          <Stack className="absolute bottom-[0] lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-x-[0] mx-[auto] w-[87%]">
            <Row className="absolute lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 inset-y-[0] items-center justify-between left-[0] right-[2%] w-[98%]">
              <Stack className="bg-bluegray_100 lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]">
                <Image
                  src="img_image2.png"
                  className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                  alt="image2"
                />
                <Text className="absolute font-normal h-[max-content] inset-y-[0] leading-lh left-[11%] my-[auto] not-italic lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[36%]">
                  <span className="text-gray_800 text-fs36 font-poppins text-left font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                    <>
                      {`Summer `}
                      <br />
                      {``}
                    </>
                  </span>
                  <span className="text-gray_800 text-fs36 font-poppins text-left font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                    <>{`Collection`}</>
                  </span>
                </Text>
              </Stack>
              <Stack className="bg-bluegray_100 lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]">
                <Image
                  src="img_image3.png"
                  className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                  alt="image3"
                />
                <Text className="absolute font-normal h-[max-content] inset-y-[0] leading-lh left-[10%] my-[auto] not-italic lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-white_A700 w-[36%]">
                  <span className="text-white_A700 text-fs36 font-poppins text-left font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                    <>
                      {`Casual `}
                      <br />
                      {``}
                    </>
                  </span>
                  <span className="text-white_A700 text-fs36 font-poppins text-left font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                    <>{`Collection`}</>
                  </span>
                </Text>
              </Stack>
              <Stack className="bg-bluegray_100 lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]">
                <Image
                  src="img_image4.png"
                  className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                  alt="image4"
                />
                <Text className="absolute font-normal h-[max-content] inset-y-[0] leading-lh left-[10%] my-[auto] not-italic lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-white_A700 w-[36%]">
                  <span className="text-white_A700 text-fs36 font-poppins text-left font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                    <>
                      {`Big Vibe `}
                      <br />
                      {``}
                    </>
                  </span>
                  <span className="text-white_A700 text-fs36 font-poppins text-left font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                    <>{`Collection`}</>
                  </span>
                </Text>
              </Stack>
            </Row>
            <Image
              src="img_next.svg"
              className="absolute lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] inset-y-[0] my-[auto] object-contain right-[0] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
              alt="next"
            />
          </Stack>
        </Stack>
        <Column className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[85%]">
          <Row className="items-center justify-between w-[100%]">
            <Text className="font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left">{`Popular This Week`}</Text>
            <Row className="items-center justify-between 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[7%]">
              <Text className="font-medium my-[1px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`View all`}</Text>
              <Image
                src="img_arrow_3.svg"
                className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] object-contain rotate-[90deg] w-[29%]"
                alt="Arrow"
              />
            </Row>
          </Row>
          <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
            <Row className="items-center justify-start w-[100%]">
              <Image
                src="img_placeholder_14.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mr-[22px] xl:mr-[25px] 2xl:mr-[28px] 3xl:mr-[34px] mr-[38px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[42%]">
                <Column className="w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Checkered Jacket`}</Text>
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Row>
            <Row className="items-center justify-center w-[100%]">
              <Image
                src="img_placeholder_15.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mr-[45px] xl:mr-[52px] 2xl:mr-[58px] 3xl:mr-[70px] mr-[78px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[34%]">
                <Column className="w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Elegant Jacket`}</Text>
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Row>
            <Row className="items-center justify-center w-[100%]">
              <Image
                src="img_placeholder_16.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[13px] 3xl:mr-[16px] mr-[18px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[46%]">
                <Column className="w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Blue Woman Denim`}</Text>
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Row>
            <Row className="items-center justify-start w-[100%]">
              <Image
                src="img_placeholder_17.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mr-[50px] xl:mr-[58px] 2xl:mr-[65px] 3xl:mr-[78px] mr-[87px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[33%]">
                <Column className="w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Orange Jeans`}</Text>
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Row>
            <Row className="items-center justify-center w-[100%]">
              <Image
                src="img_placeholder_18.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] mr-[105px] lg:mr-[61px] xl:mr-[70px] 2xl:mr-[78px] 3xl:mr-[94px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[29%]">
                <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[87%]">
                  <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Blue Jeans`}</Text>
                  <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                </Column>
                <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <RatingBar
                    className="mx-[auto]"
                    selectedStarCount={4}
                    starCount={5}
                    color="var(--gray_100)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                </Column>
              </Column>
            </Row>
            <Row className="items-center justify-center w-[100%]">
              <Image
                src="img_placeholder_19.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] mr-[106px] lg:mr-[61px] xl:mr-[70px] 2xl:mr-[79px] 3xl:mr-[95px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[29%]">
                <Column className="items-start justify-start lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] w-[95%]">
                  <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Gray Watch`}</Text>
                  <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                </Column>
                <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <RatingBar
                    className="mx-[auto]"
                    selectedStarCount={4}
                    starCount={5}
                    color="var(--gray_100)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                </Column>
              </Column>
            </Row>
            <Row className="items-center justify-start w-[100%]">
              <Image
                src="img_placeholder_20.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[25px] 3xl:mr-[30px] mr-[34px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[43%]">
                <Column className="w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Black Sport Jacket`}</Text>
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Row>
            <Row className="items-center justify-center w-[100%]">
              <Image
                src="img_placeholder_21.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] mr-[105px] lg:mr-[61px] xl:mr-[70px] 2xl:mr-[78px] 3xl:mr-[94px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[29%]">
                <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[90%]">
                  <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Wristwatch`}</Text>
                  <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                </Column>
                <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <RatingBar
                    className="mx-[auto]"
                    selectedStarCount={4}
                    starCount={5}
                    color="var(--gray_100)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                </Column>
              </Column>
            </Row>
            <Row className="items-center justify-center w-[100%]">
              <Image
                src="img_placeholder_22.png"
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mr-[49px] xl:mr-[56px] 2xl:mr-[63px] 3xl:mr-[76px] mr-[85px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[33%]">
                <Column className="w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Classic Watch`}</Text>
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Row>
          </Grid>
        </Column>
        <Column className="items-start justify-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Text className="font-bold 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left">{`Why Choose Us`}</Text>
          <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
            <Column className="bg-gray_100 items-center justify-start w-[100%]">
              <List
                className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 min-h-[auto] mx-[auto] w-[85%]"
                orientation="horizontal"
              >
                <Column className="lg:h-[224px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[346px] h-[384px] items-center justify-center lg:py-[36px] xl:py-[42px] 2xl:py-[47px] 3xl:py-[56px] py-[63px] w-[100%]">
                  <Image
                    src="img_icon_1.svg"
                    className="3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] mx-[auto] object-contain 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                    alt="icon"
                  />
                  <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[55%]">
                    <Column className="items-start w-[100%]">
                      <Text className="font-bold lg:mx-[14px] xl:mx-[17px] 2xl:mx-[19px] 3xl:mx-[22px] mx-[25.5px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Free Delivery`}</Text>
                    </Column>
                    <Text className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[100%]">
                      {
                        <>
                          {`This free shipping`}
                          <br />
                          {`only for selected region`}
                        </>
                      }
                    </Text>
                  </Column>
                </Column>
                <Column className="lg:h-[224px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[346px] h-[384px] items-center justify-center lg:py-[36px] xl:py-[42px] 2xl:py-[47px] 3xl:py-[56px] py-[63px] w-[100%]">
                  <Image
                    src="img_icon_2.svg"
                    className="3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] mx-[auto] object-contain 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                    alt="icon"
                  />
                  <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[55%]">
                    <Text className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Payment Method`}</Text>
                    <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Text className="font-normal leading-lh not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[100%]">
                        {
                          <>
                            {`This free shipping`}
                            <br />
                            {`only for selected region`}
                          </>
                        }
                      </Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="lg:h-[224px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[346px] h-[384px] items-center justify-center lg:py-[36px] xl:py-[42px] 2xl:py-[47px] 3xl:py-[56px] py-[63px] w-[100%]">
                  <Image
                    src="img_icon_3.svg"
                    className="3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] mx-[auto] object-contain 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                    alt="icon"
                  />
                  <Column className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[55%]">
                    <Text className="font-bold mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Warranty`}</Text>
                    <Text className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[100%]">
                      {
                        <>
                          {`This free shipping`}
                          <br />
                          {`only for selected region`}
                        </>
                      }
                    </Text>
                  </Column>
                </Column>
                <Column className="lg:h-[224px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[346px] h-[384px] items-center justify-center lg:py-[36px] xl:py-[42px] 2xl:py-[47px] 3xl:py-[56px] py-[63px] w-[100%]">
                  <Image
                    src="img_icon_4.svg"
                    className="3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] mx-[auto] object-contain 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                    alt="icon"
                  />
                  <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[59%]">
                    <Column className="w-[100%]">
                      <Text className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Customer Support`}</Text>
                    </Column>
                    <Text className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[93%]">
                      {
                        <>
                          {`This free shipping`}
                          <br />
                          {`only for selected region`}
                        </>
                      }
                    </Text>
                  </Column>
                </Column>
              </List>
            </Column>
          </Column>
        </Column>
        <Image
          src="img_brand.svg"
          className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] h-[68.29px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] object-contain w-[50%]"
          alt="brand"
        />
        <footer className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Column className="bg-gray_800 items-center justify-end w-[100%]">
            <Row className="items-start justify-evenly lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[100%]">
              <Column className="items-start justify-start lg:mb-[15px] xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] w-[22%]">
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Join our Newsletter`}</Text>
                <Text className="font-normal leading-lh lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 w-[100%]">
                  {
                    <>
                      {`Drop your email below to get update about us, `}
                      <br />
                      {`lastest news, tips, and more!`}
                    </>
                  }
                </Text>
                <div className="2xl:mr-[7px] 2xl:mt-[26px] 3xl:mr-[9px] 3xl:mt-[31px] bg-transparent border-bw lg:mr-[5px] lg:mt-[20px] mr-[10px] mt-[35px] w-[91%] xl:mr-[6px] xl:mt-[23px] input-wrap">
                  <Image
                    src="img_arrow_4.svg"
                    className="absolute top-[17.545px] bottom-[18.545px] right-[16px] border-bw bg-transparent lg:right-[9px] lg:inset-y-[10px] xl:top-[11px] xl:bottom-[12px] xl:right-[10px] 2xl:right-[12px] 2xl:inset-y-[13px] 3xl:top-[15px] 3xl:bottom-[16px] 3xl:right-[14px]"
                    alt="Arrow"
                  />
                  <Button className="bg-white_A700 border-bw font-normal not-italic xl:pb-[12px] 3xl:pb-[16px] pb-[18.545px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[21px] pl-[24px] lg:pr-[33px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[52px] pr-[58px] xl:pt-[11px] 3xl:pt-[15px] pt-[17.545px] lg:py-[10px] 2xl:py-[13px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500_87 text-left tracking-ls1 w-[100%]">{`Enter your email`}</Button>
                </div>
              </Column>
              <Column className="items-start justify-start lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] w-[9%]">
                <Text className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Product Links`}</Text>
                <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[61%]">
                  <Text className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`Categories`}</Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`New Arrival`}</Text>
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`Features`}</Text>
                  <Text className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`Collections`}</Text>
                </Column>
              </Column>
              <Column className="items-start justify-start w-[6%]">
                <Text className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Company`}</Text>
                <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[61%]">
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`About`}</Text>
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`Blog`}</Text>
                  <Text className="font-normal lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`Careers`}</Text>
                  <Text className="font-normal mr-[1px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`Contact`}</Text>
                  <Text className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`Services`}</Text>
                </Column>
              </Column>
              <Column className="items-start justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[33px] mb-[37px] w-[8%]">
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Support`}</Text>
                <Column className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-normal lg:mr-[5px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`Support Center`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`FAQ`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`Privacy Policy`}</Text>
                    <Text className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`Terms of service`}</Text>
                  </Column>
                </Column>
              </Column>
              <Column className="items-start justify-start xl:mb-[100px] 2xl:mb-[113px] 3xl:mb-[135px] mb-[151px] lg:mb-[88px] w-[8%]">
                <Text className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Get In Touch`}</Text>
                <Image
                  src="img_sosmedia.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] object-contain w-[78%]"
                  alt="sosmedia"
                />
              </Column>
            </Row>
            <Text className="font-normal lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[81px] mx-[auto] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left text-white_A700">{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default HomepageV1Page;
