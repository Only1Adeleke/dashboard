import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Line, List, Text } from "components";
import CameleonDashboardTable from "components/CameleonDashboardTable";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const CameleonDashboardPage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_iconlybulkcategory.svg"
          alt="iconlybulkcateg"
        />
      ),
      label: "Dashboard",
      href: "/cameleondashboard",
      active: window.location.pathname === "/cameleondashboard",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_iconlybulkmessage.svg"
          alt="iconlybulkmessa"
        />
      ),
      label: "Messages",
      suffix: (
        <Text className="bg-blue_gray-900 font-medium justify-center px-1.5 rounded-[10px] text-[13px] text-light_blue-A200 tracking-[-0.52px] w-12">
          3 new
        </Text>
      ),
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_iconlybulkpaper.svg"
          alt="iconlybulkpaper"
        />
      ),
      label: "Reports",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_iconlybulknotification.svg"
          alt="iconlybulknotif"
        />
      ),
      label: "Notifications",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_iconlybulkwallet.svg"
          alt="iconlybulkwalle"
        />
      ),
      label: "Invoices",
      suffix: (
        <Text className="bg-red-600 font-medium justify-center px-1.5 rounded-[10px] text-[13px] text-white-A700 tracking-[-0.52px] w-[35px]">
          10+
        </Text>
      ),
    },
  ];

  return (
    <>
      <div className="bg-gray-900 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[290px] bg-gray-900_01 border-indigo-50_14 border-r border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]"
        >
          <Img
            className="h-16 mt-10 mx-auto"
            src="images/img_logo.svg"
            alt="logo"
          />
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                gap: "12px",
                color: "#adb2cc",
                fontWeight: 500,
                fontSize: "14px",
                paddingLeft: "28px",
                paddingRight: "28px",
                [`&:hover, &.ps-active`]: { color: "#41baff" },
              },
            }}
            className="flex flex-col items-center justify-start mb-7 mt-[47px] md:pr-10 sm:pr-5 pr-[54px] w-[82%]"
          >
            <div className="flex flex-col gap-[15px] items-center justify-start w-full">
              <Text
                className="text-[10px] text-blue_gray-600 uppercase"
                size="txtInterRegular10"
              >
                Main Menu
              </Text>
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
            </div>
            <Line className="bg-blue_gray-600_87 h-px mt-10 w-full" />
            <div className="flex flex-col gap-3.5 items-center justify-start mt-[35px] w-full">
              <Text
                className="text-[10px] text-blue_gray-600 uppercase"
                size="txtInterRegular10"
              >
                WORKS
              </Text>
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-full w-5"
                      src="images/img_iconlybulkbookmark.svg"
                      alt="iconlybulkbookm"
                    />
                  }
                >
                  <Text className="tracking-[-0.14px] w-auto">Bookmarks</Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-5 w-5"
                      src="images/img_iconlybulkvideo.svg"
                      alt="iconlybulkvideo"
                    />
                  }
                >
                  <Text className="tracking-[-0.14px] w-auto">Conferences</Text>
                </MenuItem>
              </div>
            </div>
            <Line className="bg-blue_gray-600_87 h-px mt-10 w-full" />
            <div className="flex flex-col gap-[15px] items-center justify-start mt-[35px] w-full">
              <Text
                className="text-[10px] text-blue_gray-600 uppercase"
                size="txtInterRegular10"
              >
                OPTIONS
              </Text>
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-5 w-5"
                      src="images/img_iconlybulksetting.svg"
                      alt="iconlybulksetti"
                    />
                  }
                >
                  <Text className="mt-[3px] tracking-[-0.14px] w-auto">
                    Settings
                  </Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-5 w-5"
                      src="images/img_iconlybulkinfo.svg"
                      alt="iconlybulkinfo"
                    />
                  }
                >
                  <Text className="tracking-[-0.14px] w-auto">About</Text>
                </MenuItem>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[562px] w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-5 w-5"
                    src="images/img_lucidesunmoon.svg"
                    alt="lucidesunmoon"
                  />
                }
              >
                <Text className="text-[10px] text-blue_gray-600 uppercase w-auto">
                  Light Mode
                </Text>
              </MenuItem>
            </div>
          </Menu>
        </Sidebar>
        <div
          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[1321px] items-center justify-start p-5 md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group1.svg')" }}
        >
          <div className="flex flex-col md:gap-10 gap-16 items-start justify-start mb-3 w-[99%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <div className="bg-gray-900_02 flex sm:flex-1 flex-row gap-[275px] items-start justify-start mb-1 px-3 py-[11px] rounded-lg w-auto sm:w-full">
                  <Text
                    className="text-blue_gray-700 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Search...
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_iconlylightsearch.svg"
                    alt="iconlylightsear"
                  />
                </div>
                <ul className="flex flex-row gap-10 sm:hidden items-start justify-start mb-3.5 md:ml-[0] ml-[41px] md:mt-0 mt-[11px] w-auto common-row-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-blue_gray-600 text-sm tracking-[-0.28px]"
                    >
                      <Text size="txtInterRegular14Bluegray600">Analytics</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-blue_gray-600 text-sm tracking-[-0.28px]"
                    >
                      <Text size="txtInterRegular14Bluegray600">Earnings</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-blue_gray-600 text-sm tracking-[-0.28px]"
                    >
                      <Text size="txtInterRegular14Bluegray600">
                        Ads Experiments
                      </Text>
                    </a>
                  </li>
                </ul>
                <Img
                  className="h-5 mb-2.5 md:ml-[0] ml-[134px] md:mt-0 mt-[13px] w-5"
                  src="images/img_iconlybulknotification.svg"
                  alt="notif"
                />
                <div className="flex md:flex-1 flex-col items-center justify-start ml-5 md:ml-[0] md:mt-0 mt-0.5 w-[19%] md:w-full">
                  <div className="flex flex-row gap-4 items-start justify-between w-full">
                    <div className="bg-light_blue-A200 flex flex-col h-10 items-center justify-start pt-[5px] rounded-[50%] w-10">
                      <div className="h-[35px] relative w-full">
                        <Img
                          className="h-[35px] m-auto rounded-[50%] w-full"
                          src="images/img_7309690.png"
                          alt="7309690"
                        />
                        <div className="absolute bg-green-A400 bottom-[11%] h-2 right-[0] rounded-[50%] w-2"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[73%]">
                      <Text
                        className="text-[10px] text-blue_gray-600 uppercase"
                        size="txtInterRegular10"
                      >
                        Welcome
                      </Text>
                      <div className="flex flex-row items-start justify-evenly mt-0.5 w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-base text-blue_gray-200"
                            size="txtInterSemiBold16"
                          >
                            Daniel Estasmos
                          </Text>
                        </div>
                        <div className="flex flex-col h-4 items-center justify-start mt-[3px] w-4">
                          <Img
                            className="h-4 w-4"
                            src="images/img_iconlyboldarrow.svg"
                            alt="iconlyboldarrow"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <Text
                className="mt-10 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-200 tracking-[-0.64px]"
                size="txtInterSemiBold32"
              >
                Dashboard
              </Text>
              <List
                className="flex flex-col gap-[62px] items-center mt-[49px] w-[99%]"
                orientation="vertical"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-200 text-xl tracking-[-0.40px]"
                      size="txtInterSemiBold20"
                    >
                      Site performance
                    </Text>
                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-1 w-[92%] md:w-full">
                      <Text
                        className="text-blue_gray-600_01 text-sm tracking-[-0.28px]"
                        size="txtInterRegular14Bluegray60001"
                      >
                        Today vs 7 days ago
                      </Text>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_iconlybulkcalendar.svg"
                          alt="iconlybulkcalen"
                        />
                        <Text
                          className="text-[10px] text-blue_gray-600 uppercase w-auto"
                          size="txtInterRegular10"
                        >
                          June 03, 22 to July 02, 22
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-6 w-full">
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
                        <div className="bg-indigo-A700 flex flex-col items-center justify-start p-[23px] sm:px-5 rounded-[12px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-blue-50 text-xl tracking-[-0.40px]"
                                size="txtInterRegular20"
                              >
                                Visitors
                              </Text>
                              <Img
                                className="h-7 w-7"
                                src="images/img_iconlylightoutline3.svg"
                                alt="iconlylightoutl"
                              />
                            </div>
                            <Text
                              className="mt-[18px] sm:text-[44px] md:text-[50px] text-[58px] text-blue-50_01 tracking-[-1.16px]"
                              size="txtInterSemiBold58"
                            >
                              92,680
                            </Text>
                            <div className="flex flex-row items-start justify-between mt-[7px] w-full">
                              <Text
                                className="mt-1 text-base text-gray-100 tracking-[-0.32px]"
                                size="txtInterRegular16"
                              >
                                +3,840 (26,80%)
                              </Text>
                              <Img
                                className="h-6 w-6"
                                src="images/img_iconlylightoutlineswap.svg"
                                alt="iconlylightoutl_One"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-900_03 flex flex-col items-center justify-end p-[23px] sm:px-5 rounded-[12px] w-full">
                          <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="text-blue_gray-200 text-xl tracking-[-0.40px]"
                                size="txtInterRegular20Bluegray200"
                              >
                                Page views
                              </Text>
                              <Img
                                className="h-7 w-7"
                                src="images/img_iconlylightoutlineshow.svg"
                                alt="iconlylightoutl_Two"
                              />
                            </div>
                            <Text
                              className="sm:text-[44px] md:text-[50px] text-[58px] text-light_blue-400 tracking-[-1.16px]"
                              size="txtInterSemiBold58Lightblue400"
                            >
                              580.5K
                            </Text>
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="mt-1 text-base text-green-A400_01 tracking-[-0.32px]"
                                size="txtInterRegular16GreenA40001"
                              >
                                +210K (16,20%)
                              </Text>
                              <Img
                                className="h-6 w-6"
                                src="images/img_iconlylightoutlineswap_green_a400_01.svg"
                                alt="iconlylightoutl_Three"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-900_03 flex flex-col items-center justify-start p-[23px] sm:px-5 rounded-[12px] w-full">
                          <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-blue_gray-200 text-xl tracking-[-0.40px]"
                                size="txtInterRegular20Bluegray200"
                              >
                                Bounce rates
                              </Text>
                              <Img
                                className="h-7 w-7"
                                src="images/img_iconlylightoutlinechart.svg"
                                alt="iconlylightoutl_Four"
                              />
                            </div>
                            <Text
                              className="sm:text-[44px] md:text-[50px] text-[58px] text-light_blue-400 tracking-[-1.16px]"
                              size="txtInterSemiBold58Lightblue400"
                            >
                              15.43%
                            </Text>
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="mt-1 text-base text-red-600_01 tracking-[-0.32px]"
                                size="txtInterRegular16Red60001"
                              >
                                -0.74 (0.74%)
                              </Text>
                              <Img
                                className="h-6 w-6"
                                src="images/img_iconlylightoutlineswap_red_600_01.svg"
                                alt="iconlylightoutl_Five"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                        <Text
                          className="text-light_blue-A200 text-sm tracking-[-0.28px] w-auto"
                          size="txtInterRegular14LightblueA200"
                        >
                          View all
                        </Text>
                        <div className="flex flex-col h-3 items-center justify-start w-3">
                          <Img
                            className="h-3 w-3"
                            src="images/img_arrowright.svg"
                            alt="arrowright"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-200 text-xl tracking-[-0.40px]"
                      size="txtInterSemiBold20"
                    >
                      Users statistics
                    </Text>
                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-[7px] w-[92%] md:w-full">
                      <Text
                        className="text-blue_gray-600_01 text-sm tracking-[-0.28px]"
                        size="txtInterRegular14Bluegray60001"
                      >
                        Today’s statistics
                      </Text>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_iconlybulkcalendar.svg"
                          alt="iconlybulkcalen"
                        />
                        <Text
                          className="text-[10px] text-blue_gray-600 uppercase w-auto"
                          size="txtInterRegular10"
                        >
                          June 03, 22 to July 02, 22
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-6 w-full">
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
                        <div className="bg-gray-900_04 flex flex-col justify-end pt-[25px] rounded-[12px] w-full">
                          <Text
                            className="ml-6 md:ml-[0] mr-[153px] text-blue_gray-200 text-center text-xl"
                            size="txtInterRegular20Bluegray200"
                          >
                            Unique visitors
                          </Text>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[145px] items-center justify-start p-[30px] sm:px-5 rounded-[12px] w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_maskgroup.png')",
                            }}
                          >
                            <div className="bg-white-A700_3f border border-solid border-white-A700 flex flex-col gap-0.5 items-center justify-center mb-[38px] px-[15px] py-2 rounded-[12px] w-auto">
                              <Text
                                className="text-center text-sm text-white-A700 tracking-[-0.28px] w-auto"
                                size="txtInterMedium14WhiteA700"
                              >
                                84,150
                              </Text>
                              <Text
                                className="text-[10px] text-center text-white-A700 tracking-[-0.20px] w-auto"
                                size="txtInterMedium10"
                              >
                                +4.5%
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-900_04 flex flex-col items-center justify-end p-[23px] sm:px-5 rounded-[12px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-blue_gray-200 text-center text-xl"
                                size="txtInterRegular20Bluegray200"
                              >
                                New users
                              </Text>
                              <Img
                                className="h-7 w-7"
                                src="images/img_iconlylightadd.svg"
                                alt="iconlylightadd"
                              />
                            </div>
                            <Text
                              className="mt-[18px] sm:text-[44px] md:text-[50px] text-[58px] text-blue_gray-200 tracking-[-1.16px]"
                              size="txtInterSemiBold58Bluegray200"
                            >
                              17,805
                            </Text>
                            <Text
                              className="mt-3 text-base text-green-A400_01 tracking-[-0.32px]"
                              size="txtInterRegular16GreenA40001"
                            >
                              +1,500 (4,17%)
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-900_04 flex flex-col items-center justify-start p-[23px] sm:px-5 rounded-[12px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-blue_gray-200 text-center text-xl"
                                size="txtInterRegular20Bluegray200"
                              >
                                Online users
                              </Text>
                              <Img
                                className="h-7 w-7"
                                src="images/img_iconlylightactivity.svg"
                                alt="iconlylightacti"
                              />
                            </div>
                            <Text
                              className="mt-[18px] sm:text-[44px] md:text-[50px] text-[58px] text-blue_gray-200 tracking-[-1.16px]"
                              size="txtInterSemiBold58Bluegray200"
                            >
                              1,846
                            </Text>
                            <Text
                              className="mt-3 text-base text-green-A400_01 tracking-[-0.32px]"
                              size="txtInterRegular16GreenA40001"
                            >
                              +530 (8,38%)
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                        <Text
                          className="text-light_blue-A200 text-sm tracking-[-0.28px] w-auto"
                          size="txtInterRegular14LightblueA200"
                        >
                          View all
                        </Text>
                        <div className="flex flex-col h-3 items-center justify-start w-3">
                          <Img
                            className="h-3 w-3"
                            src="images/img_arrowright.svg"
                            alt="arrowright"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-7 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-200 text-xl tracking-[-0.40px] w-auto"
                  size="txtInterSemiBold20"
                >
                  Top referring sites
                </Text>
                <Text
                  className="text-blue_gray-600_01 text-sm tracking-[-0.28px] w-auto"
                  size="txtInterRegular14Bluegray60001"
                >
                  Outbond links that come to your site
                </Text>
              </div>
              <CameleonDashboardTable
                className="flex flex-col items-center w-full"
                httpsstackov={
                  <Text className="text-blue-A700 text-sm tracking-[-0.28px] w-auto">
                    <span className="text-blue-A700 font-inter text-left font-normal">
                      https://stackoverflow.com/ques
                    </span>
                    <span className="text-blue-A700 font-inter text-left font-normal">
                      tion/..
                    </span>
                  </Text>
                }
                httpswwwyou={
                  <Text className="text-blue-A700 text-sm tracking-[-0.28px] w-auto">
                    <span className="text-blue-A700 font-inter text-left font-normal">
                      https://www.youtube.com/
                    </span>
                    <span className="text-blue-A700 font-inter text-left font-normal">
                      ?v=7wB1j..
                    </span>
                  </Text>
                }
                httpsgithub={
                  <Text className="text-blue-A700 text-sm tracking-[-0.28px] w-auto">
                    <span className="text-blue-A700 font-inter text-left font-normal">
                      https://github.com/a
                    </span>
                    <span className="text-blue-A700 font-inter text-left font-normal">
                      ndrew/tabler-x..
                    </span>
                  </Text>
                }
                httpsgwillia={
                  <Text className="text-blue-A700 text-sm tracking-[-0.28px] w-auto">
                    <span className="text-blue-A700 font-inter text-left font-normal">
                      https://gwilliam.co/b
                    </span>
                    <span className="text-blue-A700 font-inter text-left font-normal">
                      log/capture-fro..
                    </span>
                  </Text>
                }
                httpsstackov1={
                  <Text className="text-blue-A700 text-sm tracking-[-0.28px] w-auto">
                    <span className="text-blue-A700 font-inter text-left font-normal">
                      https://stackoverflow.com/ques
                    </span>
                    <span className="text-blue-A700 font-inter text-left font-normal">
                      tion/..
                    </span>
                  </Text>
                }
                httpsstackov2={
                  <Text className="text-blue-A700 text-sm tracking-[-0.28px] w-auto">
                    <span className="text-blue-A700 font-inter text-left font-normal">
                      https://stackoverflow.com/ques
                    </span>
                    <span className="text-blue-A700 font-inter text-left font-normal">
                      tion/..
                    </span>
                  </Text>
                }
                httpsstackov3={
                  <Text className="text-blue-A700 text-sm tracking-[-0.28px] w-auto">
                    <span className="text-blue-A700 font-inter text-left font-normal">
                      https://stackoverflow.com/ques
                    </span>
                    <span className="text-blue-A700 font-inter text-left font-normal">
                      tion/..
                    </span>
                  </Text>
                }
                httpsstackov4={
                  <Text className="text-blue-A700 text-sm tracking-[-0.28px] w-auto">
                    <span className="text-blue-A700 font-inter text-left font-normal">
                      https://stackoverflow.com/ques
                    </span>
                    <span className="text-blue-A700 font-inter text-left font-normal">
                      tion/..
                    </span>
                  </Text>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CameleonDashboardPage;
