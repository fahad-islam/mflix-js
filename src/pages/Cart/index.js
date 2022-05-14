import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { List } from "components/List";
import { Stack } from "components/Stack";
import { Input } from "components/Input";

const CartPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-poppins items-start justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Column className="bg-white_A700 items-center justify-end w-[100%]">
            <Row className="items-center justify-end lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
              <Image
                src="img_group19.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[527px] xl:ml-[603px] 2xl:ml-[678px] 3xl:ml-[814px] ml-[904px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain w-[2%]"
                alt="Group19"
              />
              <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Elliye`}</Text>
              <Image
                src="img_icon_5.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[315px] xl:ml-[360px] 2xl:ml-[406px] 3xl:ml-[487px] ml-[541px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain w-[4%]"
                alt="icon"
              />
              <Button className="bg-gray_800 border-bw font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] 2xl:mr-[108px] 3xl:mr-[129px] mr-[144px] lg:mr-[84px] xl:mr-[96px] lg:px-[16px] xl:px-[19px] 2xl:px-[21px] 3xl:px-[26px] px-[29px] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 w-[6%]">{`Login`}</Button>
            </Row>
            <Line className="bg-gray_100 h-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[85%]" />
          </Column>
        </header>
        <Column className="items-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
          <Row className="items-center justify-start 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] w-[12%]">
            <Text className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Home`}</Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] text-bluegray_100 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`>`}</Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Shopping Cart`}</Text>
          </Row>
        </Column>
        <Text className="font-bold lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[41px] mx-[auto] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left">{`Shopping Cart`}</Text>
        <Row className="items-center justify-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[84%]">
          <Row className="items-center justify-between w-[41%]">
            <Row className="items-center justify-start w-[39%]">
              <Column className="border-2 border-gray_800 border-solid lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] items-center py-[10px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]">
                <Text className="font-medium mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`1`}</Text>
              </Column>
              <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Shopping Cart`}</Text>
            </Row>
            <Line className="bg-gray_800 h-[2px] lg:mb-[15px] xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[58%]" />
          </Row>
          <Row className="items-center justify-center lg:ml-[33px] xl:ml-[38px] 2xl:ml-[42px] 3xl:ml-[51px] ml-[57px] w-[40%]">
            <Row className="items-center justify-start w-[31%]">
              <Column className="border-2 border-bluegray_100 border-solid lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] items-center py-[10px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]">
                <Text className="font-medium mx-[auto] text-bluegray_100 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`2`}</Text>
              </Column>
              <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] text-bluegray_100 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`Checkout`}</Text>
            </Row>
            <Line className="bg-bluegray_100 h-[2px] lg:mb-[15px] xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[60%]" />
          </Row>
          <Row className="items-center justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[14%]">
            <Column className="border-2 border-bluegray_100 border-solid lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] items-center py-[10px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]">
              <Text className="font-medium mx-[auto] text-bluegray_100 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`3`}</Text>
            </Column>
            <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] text-bluegray_100 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`Completed`}</Text>
          </Row>
        </Row>
        <Column className="items-start justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] mx-[auto] w-[85%]">
          <Column className="w-[100%]">
            <Column className="w-[100%]">
              <Column className="w-[100%]">
                <Column className="w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Text className="font-medium xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] mb-[4px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Product`}</Text>
                    <Row className="items-center justify-center lg:mr-[197px] xl:mr-[225px] 2xl:mr-[253px] 3xl:mr-[304px] mr-[338px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] w-[39%]">
                      <Text className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Quantity`}</Text>
                      <Text className="font-medium lg:ml-[134px] xl:ml-[154px] 2xl:ml-[173px] 3xl:ml-[208px] ml-[231px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Price`}</Text>
                      <Text className="font-medium lg:ml-[135px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] ml-[232px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Total`}</Text>
                    </Row>
                  </Row>
                  <Line className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]" />
                </Column>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="items-center justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
                    <Row className="items-center justify-start w-[100%]">
                      <Stack className="border border-bluegray_100 border-solid lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]">
                        <Image
                          src="img_placeholder_59.png"
                          className="absolute lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] inset-[0] justify-center m-[auto] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                          alt="placeholder"
                        />
                      </Stack>
                      <Text className="font-medium lg:ml-[38px] xl:ml-[44px] 2xl:ml-[49px] 3xl:ml-[59px] ml-[66px] lg:my-[47px] xl:my-[54px] 2xl:my-[61px] 3xl:my-[73px] my-[82px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Gray T-shirt`}</Text>
                      <Stack className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[145px] xl:ml-[166px] 2xl:ml-[187px] 3xl:ml-[225px] ml-[250px] lg:my-[44px] xl:my-[50px] 2xl:my-[57px] 3xl:my-[68px] my-[76px] w-[10%]">
                        <Image
                          src="img_increase.svg"
                          className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain right-[0] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                          alt="increase"
                        />
                        <Image
                          src="img_decrease.svg"
                          className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] left-[0] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                          alt="decrease"
                        />
                        <Button className="absolute border border-bluegray_100 border-solid font-medium inset-[0] lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[100%]">{`1`}</Button>
                      </Stack>
                      <Text className="font-medium 2xl:ml-[104px] 3xl:ml-[125px] ml-[139px] lg:ml-[81px] xl:ml-[92px] lg:my-[47px] xl:my-[54px] 2xl:my-[61px] 3xl:my-[73px] my-[82px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`$100.99`}</Text>
                      <Text className="font-medium lg:ml-[108px] xl:ml-[124px] 2xl:ml-[139px] 3xl:ml-[167px] ml-[186px] lg:my-[47px] xl:my-[54px] 2xl:my-[61px] 3xl:my-[73px] my-[82px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`$100.99`}</Text>
                      <Image
                        src="img_.svg"
                        className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.94px] lg:mb-[47px] xl:mb-[54px] 2xl:mb-[61px] 3xl:mb-[73px] mb-[82.06px] lg:ml-[149px] xl:ml-[171px] 2xl:ml-[192px] 3xl:ml-[231px] ml-[257px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] mt-[84px] object-contain rotate-[45deg] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[33.94px]"
                        alt=""
                      />
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]" />
                  </Column>
                  <Column className="items-center justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
                    <Row className="items-center justify-start w-[100%]">
                      <Stack className="border border-bluegray_100 border-solid lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]">
                        <Image
                          src="img_placeholder_60.png"
                          className="absolute lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] inset-[0] justify-center m-[auto] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                          alt="placeholder"
                        />
                      </Stack>
                      <Text className="font-medium lg:ml-[38px] xl:ml-[44px] 2xl:ml-[49px] 3xl:ml-[59px] ml-[66px] lg:my-[47px] xl:my-[54px] 2xl:my-[61px] 3xl:my-[73px] my-[82px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Red Flannel`}</Text>
                      <Stack className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[148px] xl:ml-[170px] 2xl:ml-[191px] 3xl:ml-[229px] ml-[255px] lg:my-[44px] xl:my-[50px] 2xl:my-[57px] 3xl:my-[68px] my-[76px] w-[10%]">
                        <Image
                          src="img_increase.svg"
                          className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain right-[0] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                          alt="increase"
                        />
                        <Image
                          src="img_decrease.svg"
                          className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] left-[0] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                          alt="decrease"
                        />
                        <Button className="absolute border border-bluegray_100 border-solid font-medium inset-[0] lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[100%]">{`1`}</Button>
                      </Stack>
                      <Text className="font-medium 2xl:ml-[104px] 3xl:ml-[125px] ml-[139px] lg:ml-[81px] xl:ml-[92px] lg:my-[47px] xl:my-[54px] 2xl:my-[61px] 3xl:my-[73px] my-[82px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`$100.99`}</Text>
                      <Text className="font-medium lg:ml-[108px] xl:ml-[124px] 2xl:ml-[139px] 3xl:ml-[167px] ml-[186px] lg:my-[47px] xl:my-[54px] 2xl:my-[61px] 3xl:my-[73px] my-[82px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`$100.99`}</Text>
                      <Image
                        src="img_.svg"
                        className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.94px] mb-[83.06px] lg:ml-[149px] xl:ml-[171px] 2xl:ml-[192px] 3xl:ml-[231px] ml-[257px] mt-[83px] lg:my-[48px] xl:my-[55px] 2xl:my-[62px] 3xl:my-[74px] object-contain rotate-[45deg] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[33.94px]"
                        alt=""
                      />
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]" />
                  </Column>
                </List>
              </Column>
              <Row className="items-start justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                <Stack className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[33px] mb-[37px] w-[28%]">
                  <Input
                    className="absolute placeholder:bg-transparent bg-transparent border border-bluegray_100 border-solid font-normal inset-[0] not-italic xl:pb-[12px] 3xl:pb-[16px] pb-[18.545px] xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] pl-[16px] lg:pl-[9px] xl:pt-[11px] 3xl:pt-[15px] pt-[17.545px] lg:py-[10px] 2xl:py-[13px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500_87 text-gray_500_87 text-left tracking-ls1 w-[100%]"
                    name="Enter coupon co"
                    placeholder={`Enter coupon code`}
                  ></Input>
                  <Button className="absolute bg-gray_800 border-bw font-normal not-italic xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] px-[16px] lg:px-[9px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[0] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 w-[30%]">{`Apply Code`}</Button>
                </Stack>
                <Column className="items-start justify-start w-[9%]">
                  <Text className="font-medium lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[87px] ml-[97px] lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Total`}</Text>
                  <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                    <Text className="font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left">{`$202.00`}</Text>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
          <Row className="items-center justify-end ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[25%]">
            <Button className="border border-gray_800 border-solid font-medium xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] px-[16px] lg:px-[9px] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[50%]">{`Continue Shopping`}</Button>
            <Button className="bg-gray_800 border-bw font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 w-[42%]">{`Checkout`}</Button>
          </Row>
        </Column>
        <footer className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Column className="bg-gray_800 items-center justify-end w-[100%]">
            <Row className="items-start justify-evenly lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[100%]">
              <Column className="items-start justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] w-[22%]">
                <Row className="items-center justify-start w-[100%]">
                  <Image
                    src="img_group19_1.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain w-[9%]"
                    alt="Group19"
                  />
                  <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:mr-[177px] xl:mr-[202px] 2xl:mr-[228px] 3xl:mr-[273px] mr-[304px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Elliye`}</Text>
                </Row>
                <Text className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[92%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .`}</Text>
                <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Column className="w-[100%]">
                    <Row className="items-center justify-start w-[100%]">
                      <Image
                        src="img_call_1.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Call"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`+1234567890`}</Text>
                    </Row>
                    <Row className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Image
                        src="img_email.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Email"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`elliye@support.com`}</Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Row className="items-start justify-between w-[56%]">
                <Column className="items-start justify-start lg:mb-[32px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[50px] mb-[56px] w-[23%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Product Links`}</Text>
                  <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[41%]">
                    <Text className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Categories`}</Text>
                    <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`New Arrival`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Features`}</Text>
                    <Text className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Collections`}</Text>
                  </Column>
                </Column>
                <Column className="items-start justify-start w-[23%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Company`}</Text>
                  <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[60%]">
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`About`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Blog`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Careers`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Services`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Privacy Policy`}</Text>
                    <Text className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Terms of service`}</Text>
                  </Column>
                </Column>
                <Column className="items-start justify-start lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] 3xl:mb-[63px] mb-[71px] 2xl:mr-[108px] 3xl:mr-[129px] mr-[144px] lg:mr-[84px] xl:mr-[96px] w-[35%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Join our Newsletter`}</Text>
                  <Text className="font-normal leading-lh lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">{`Drop your email below to get update, promotions, coupons, and more!`}</Text>
                  <Column className="lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] w-[100%]">
                    <Row className="bg-gray_800 border border-solid border-white_A700 items-center justify-between w-[100%]">
                      <Text className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic opacity-op5 text-bluegray_100_87 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 tracking-ls1">{`Enter your email`}</Text>
                      <Image
                        src="img_submit_1.svg"
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                        alt="submit"
                      />
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Row>
            <Text className="font-normal lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] mt-[96px] mx-[auto] not-italic text-bluegray_100 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default CartPage;
