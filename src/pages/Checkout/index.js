import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { Input } from "components/Input";

const CheckoutPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-poppins mx-[auto] w-[100%]">
        <Column className="items-start justify-start w-[100%]">
          <Column className="w-[100%]">
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
          </Column>
          <Row className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] w-[19%]">
            <Text className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Home`}</Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] text-bluegray_100 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`>`}</Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Shopping Cart`}</Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] text-bluegray_100 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`>`}</Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Checkout`}</Text>
          </Row>
          <Column className="items-center lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[41px] w-[100%]">
            <Text className="font-bold mx-[auto] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left">{`Checkout`}</Text>
            <Row className="items-center justify-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[84%]">
              <Row className="items-center justify-start w-[16%]">
                <Column className="border-2 border-gray_800 border-solid lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] items-center py-[10px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]">
                  <Text className="font-medium mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`1`}</Text>
                </Column>
                <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Shopping Cart`}</Text>
              </Row>
              <Row className="items-center justify-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] w-[67%]">
                <Line className="bg-gray_800 h-[2px] lg:mb-[15px] xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[36%]" />
                <Row className="items-center justify-center lg:ml-[33px] xl:ml-[38px] 2xl:ml-[42px] 3xl:ml-[51px] ml-[57px] w-[18%]">
                  <Column className="border-2 border-gray_800 border-solid lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] items-center py-[10px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]">
                    <Text className="font-medium mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`2`}</Text>
                  </Column>
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Checkout`}</Text>
                </Row>
                <Line className="bg-bluegray_100 h-[2px] lg:mb-[15px] xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[36%]" />
              </Row>
              <Row className="items-center justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[14%]">
                <Column className="border-2 border-bluegray_100 border-solid lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] items-center py-[10px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]">
                  <Text className="font-medium mx-[auto] text-bluegray_100 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`3`}</Text>
                </Column>
                <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] text-bluegray_100 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`Completed`}</Text>
              </Row>
            </Row>
            <Row className="items-center justify-between lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]">
              <Column className="items-start 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[34%]">
                <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Buyer Info`}</Text>
                <Column className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                  <Column className="items-start justify-start lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[100%]">
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Full Name`}</Text>
                    <Input
                      className="placeholder:bg-transparent bg-transparent border border-bluegray_100 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] placeholder:text-gray_500 w-[100%]"
                      name="Full Name"
                      placeholder={`Full Name`}
                    ></Input>
                  </Column>
                  <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500">{`Address`}</Text>
                    <Input
                      className="placeholder:bg-transparent bg-transparent border border-bluegray_100 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] placeholder:text-gray_500 w-[100%]"
                      name="Address"
                      placeholder={`Address`}
                    ></Input>
                  </Column>
                  <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500">{`Contact`}</Text>
                    <Input
                      className="placeholder:bg-transparent bg-transparent border border-bluegray_100 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] placeholder:text-gray_500 w-[100%]"
                      name="Contact"
                      placeholder={`Contact`}
                    ></Input>
                  </Column>
                  <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500">{`City`}</Text>
                    <Input
                      className="placeholder:bg-transparent bg-transparent border border-bluegray_100 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] placeholder:text-gray_500 w-[100%]"
                      name="City"
                      placeholder={`City`}
                    ></Input>
                  </Column>
                  <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <Column className="items-start w-[58%]">
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500">{`State`}</Text>
                      <div className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border-bw lg:mt-[9px] mt-[16px] w-[100%] xl:mt-[10px] input-wrap">
                        <Image
                          src="img_chevrondown.svg"
                          className="absolute h-[24px] top-[17.545px] bottom-[18.545px] right-[32px] border-bw bg-transparent lg:h-[14px] lg:right-[18px] lg:inset-y-[10px] xl:h-[17px] xl:top-[11px] xl:bottom-[12px] xl:right-[21px] 2xl:h-[19px] 2xl:right-[24px] 2xl:inset-y-[13px] 3xl:h-[22px] 3xl:top-[15px] 3xl:bottom-[16px] 3xl:right-[28px]"
                          alt="chevron-down"
                        />
                        <Button className="border border-bluegray_100 border-solid font-normal not-italic xl:pb-[12px] 3xl:pb-[16px] pb-[18.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pr-[38px] xl:pr-[44px] 2xl:pr-[49px] 3xl:pr-[59px] pr-[66px] xl:pt-[11px] 3xl:pt-[15px] pt-[17.545px] lg:py-[10px] 2xl:py-[13px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">{`Select State`}</Button>
                      </div>
                    </Column>
                    <Column className="items-start mr-[1px] w-[37%]">
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500">{`Zip Code`}</Text>
                      <Input
                        className="placeholder:bg-transparent bg-transparent border border-bluegray_100 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] placeholder:text-gray_500 w-[100%]"
                        name="Zip Code"
                        placeholder={`Zip Code`}
                      ></Input>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Column className="items-start 2xl:mr-[108px] 3xl:mr-[129px] mr-[144px] lg:mr-[84px] xl:mr-[96px] w-[42%]">
                <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Payment Method`}</Text>
                <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                  <Row className="lg:gap-[19px] xl:gap-[22px] 2xl:gap-[24px] 3xl:gap-[29px] gap-[33px] grid grid-cols-3 items-center justify-between lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[100%]">
                    <Row className="border border-bluegray_100 border-solid items-center justify-center w-[100%]">
                      <Image
                        src="img_card_2.svg"
                        className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] mb-[31px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:my-[18px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                        alt="Card"
                      />
                      <Text className="font-normal lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[33px] mb-[37px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mr-[24px] xl:mr-[28px] 2xl:mr-[31px] 3xl:mr-[37px] mr-[42px] lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] mt-[39px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Credit Card`}</Text>
                    </Row>
                    <div className="bg-transparent border-0 w-[100%] input-wrap">
                      <Image
                        src="img_transfer.svg"
                        className="absolute h-[40px] top-[33.545px] bottom-[32.545px] left-[33px] bg-transparent border-0 lg:h-[24px] lg:top-[19px] lg:bottom-[18px] lg:left-[19px] xl:h-[27px] xl:top-[22px] xl:bottom-[21px] xl:left-[22px] 2xl:h-[31px] 2xl:top-[25px] 2xl:bottom-[24px] 2xl:left-[24px] 3xl:h-[37px] 3xl:top-[30px] 3xl:bottom-[29px] 3xl:left-[29px]"
                        alt="transfer"
                      />
                      <Input
                        className="bg-gray_800 placeholder:bg-transparent border border-bluegray_100 border-solid font-normal not-italic lg:pb-[18px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[29px] pb-[32.545px] lg:pl-[48px] xl:pl-[55px] 2xl:pl-[62px] 3xl:pl-[74px] pl-[83px] lg:pt-[19px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] pt-[33.545px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                        name="Bank Transfer"
                        placeholder={`Bank Transfer`}
                      ></Input>
                    </div>
                    <div className="bg-transparent border-bw w-[100%] input-wrap">
                      <Image
                        src="img_paypal.svg"
                        className="absolute h-[40px] top-[33.545px] bottom-[32.545px] left-[64px] border-bw bg-transparent lg:h-[24px] lg:top-[19px] lg:bottom-[18px] lg:left-[37px] xl:h-[27px] xl:top-[22px] xl:bottom-[21px] xl:left-[42px] 2xl:h-[31px] 2xl:top-[25px] 2xl:bottom-[24px] 2xl:left-[48px] 3xl:h-[37px] 3xl:top-[30px] 3xl:bottom-[29px] 3xl:left-[57px]"
                        alt="paypal"
                      />
                      <Button className="border border-bluegray_100 border-solid font-normal not-italic lg:pb-[18px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[29px] pb-[32.545px] 3xl:pl-[102px] pl-[114px] lg:pl-[66px] xl:pl-[76px] 2xl:pl-[85px] lg:pt-[19px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] pt-[33.545px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]">{`Paypal`}</Button>
                    </div>
                  </Row>
                  <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Name on Card`}</Text>
                    <Input
                      className="placeholder:bg-transparent bg-transparent border border-bluegray_100 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] placeholder:text-gray_500 w-[100%]"
                      name="Name on Card"
                      placeholder={`Name on Card`}
                    ></Input>
                  </Column>
                  <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <Column className="items-start w-[65%]">
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Card Number`}</Text>
                      <Input
                        className="placeholder:bg-transparent bg-transparent border border-bluegray_100 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] placeholder:text-gray_500 w-[100%]"
                        name="Card Number"
                        placeholder={`Card Number`}
                      ></Input>
                    </Column>
                    <Column className="items-start w-[31%]">
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`CVV`}</Text>
                      <Input
                        className="placeholder:bg-transparent bg-transparent border border-bluegray_100 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] placeholder:text-gray_500 w-[100%]"
                        name="CVV"
                        placeholder={`CVV`}
                      ></Input>
                    </Column>
                  </Row>
                  <Row className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <Column className="items-start w-[100%]">
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Month`}</Text>
                      <div className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border-bw lg:mt-[9px] mt-[16px] w-[100%] xl:mt-[10px] input-wrap">
                        <Image
                          src="img_chevrondown.svg"
                          className="absolute h-[24px] top-[17.545px] bottom-[18.545px] right-[32px] border-bw bg-transparent lg:h-[14px] lg:right-[18px] lg:inset-y-[10px] xl:h-[17px] xl:top-[11px] xl:bottom-[12px] xl:right-[21px] 2xl:h-[19px] 2xl:right-[24px] 2xl:inset-y-[13px] 3xl:h-[22px] 3xl:top-[15px] 3xl:bottom-[16px] 3xl:right-[28px]"
                          alt="chevron-down"
                        />
                        <Button className="border border-bluegray_100 border-solid font-normal not-italic xl:pb-[12px] 3xl:pb-[16px] pb-[18.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pr-[38px] xl:pr-[44px] 2xl:pr-[49px] 3xl:pr-[59px] pr-[66px] xl:pt-[11px] 3xl:pt-[15px] pt-[17.545px] lg:py-[10px] 2xl:py-[13px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">{`Select Month`}</Button>
                      </div>
                    </Column>
                    <Column className="items-start w-[100%]">
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Year`}</Text>
                      <div className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border-bw lg:mt-[9px] mt-[16px] w-[100%] xl:mt-[10px] input-wrap">
                        <Image
                          src="img_chevrondown.svg"
                          className="absolute h-[24px] top-[18.545px] bottom-[17.545px] right-[32px] border-bw bg-transparent lg:h-[14px] lg:right-[18px] lg:inset-y-[10px] xl:h-[17px] xl:top-[12px] xl:bottom-[11px] xl:right-[21px] 2xl:h-[19px] 2xl:right-[24px] 2xl:inset-y-[13px] 3xl:h-[22px] 3xl:top-[16px] 3xl:bottom-[15px] 3xl:right-[28px]"
                          alt="chevron-down"
                        />
                        <Button className="border border-bluegray_100 border-solid font-normal not-italic xl:pb-[11px] 3xl:pb-[15px] pb-[17.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pr-[38px] xl:pr-[44px] 2xl:pr-[49px] 3xl:pr-[59px] pr-[66px] xl:pt-[12px] 3xl:pt-[16px] pt-[18.545px] lg:py-[10px] 2xl:py-[13px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">{`Select Year`}</Button>
                      </div>
                    </Column>
                  </Row>
                </Column>
                <Column className="items-end lg:mt-[43px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] mt-[75px] w-[100%]">
                  <Button className="bg-gray_800 border-bw font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 w-[31%]">{`Checkout`}</Button>
                </Column>
              </Column>
            </Row>
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
                  <Row className="items-start justify-center w-[56%]">
                    <Column className="items-start justify-start lg:mb-[32px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[50px] mb-[56px] w-[23%]">
                      <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Product Links`}</Text>
                      <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[41%]">
                        <Text className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Categories`}</Text>
                        <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`New Arrival`}</Text>
                        <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Features`}</Text>
                        <Text className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Collections`}</Text>
                      </Column>
                    </Column>
                    <Column className="items-start justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[23%]">
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
                    <Column className="items-start justify-start lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] 3xl:mb-[63px] mb-[71px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] 2xl:mr-[108px] 3xl:mr-[129px] mr-[144px] lg:mr-[84px] xl:mr-[96px] w-[35%]">
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
        </Column>
      </Column>
    </>
  );
};

export default CheckoutPage;
