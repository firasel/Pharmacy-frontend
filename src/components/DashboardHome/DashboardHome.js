import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsMinecart, BsMinecartLoaded } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { RiArrowUpSFill, RiCoinLine, RiCoinsLine } from "react-icons/ri";
import { TiCancelOutline } from "react-icons/ti";
import { VscGraph } from "react-icons/vsc";

const DashboardHome = () => {
  return (
    <div className="pageStyle">
      <div className="flex justify-between items-end">
        <div>
          <span className="text-2xl font-[Poppins] text-[#102538]">
            Dashboard
          </span>
          <br />
          <span className="text-base font-[Lato] text-[#969FA8]">
            Here’s your sales analytics today
          </span>
        </div>
        <div className="flex gap-4">
          <button className="py-3 px-4 rounded-lg border-[1px] border-[#CDD0D3] text-[#102538] flex items-center gap-2">
            This Year <BiChevronDown />
          </button>
          <button className="py-3 px-4 rounded-lg bg-[#102538] text-white flex items-center gap-2">
            <HiOutlineLogout className="rotate-[270deg]" />
            Export as pdf
          </button>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex gap-4">
          <div className="w-1/3 bg-[#FFFFFF] py-5 px-4 rounded-2xl shadow-lg shadow-[#D9FFFD] ">
            <div className="flex justify-between items-start">
              <span className="text-lg text-[#102538]">Total Sales</span>
              <span className="text-3xl text-[#102538] font-[Poppins]">
                23695
              </span>
            </div>
            <div className="w-full overflow-hidden mt-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 340.339 166.252"
              >
                <g
                  id="Group_2"
                  data-name="Group 2"
                  transform="translate(-21.16 -100.748)"
                >
                  <g
                    id="Group_9461"
                    data-name="Group 9461"
                    transform="translate(24 102)"
                  >
                    <path
                      id="Vector"
                      d="M-1.073-2.376l14.391-13.4c3.5-1.182.682-22.4,7.682-24.23s14-3.131,21-15.064,14-34.5,21-38.23S77-81.928,84-69.4s14,22.481,21,21.414,14-13.152,21-18.86,14-5.037,21-5.9,14-3.26,21,2.687,2.664,31.677,13.218,38.393,16.986-29.8,23.986-23.4,3.3,43.448,10.3,52.692,28-11.321,35-13.4S266-4.409,273-6.577s8-43.112,15.674-48.492S301.146-23.99,315-23.945s14,9.78,21,8.17"
                      transform="translate(0 93.876)"
                      fill="none"
                      stroke="#4a8998"
                      stroke-linecap="round"
                      stroke-width="2.5"
                      stroke-dasharray="0 0"
                    />
                  </g>
                  <g
                    id="Group_9462"
                    data-name="Group 9462"
                    transform="translate(31 250)"
                  >
                    <text
                      id="S"
                      transform="translate(0 13)"
                      fill="rgba(18,18,18,0.31)"
                      font-size="12"
                      font-family="Poppins-Regular, Poppins"
                    >
                      <tspan x="0" y="0">
                        S
                      </tspan>
                    </text>
                    <text
                      id="M"
                      transform="translate(40 13)"
                      fill="rgba(18,18,18,0.31)"
                      font-size="12"
                      font-family="Poppins-Regular, Poppins"
                    >
                      <tspan x="0" y="0">
                        M
                      </tspan>
                    </text>
                    <text
                      id="T"
                      transform="translate(169 13)"
                      fill="rgba(18,18,18,0.31)"
                      font-size="12"
                      font-family="Poppins-Regular, Poppins"
                    >
                      <tspan x="0" y="0">
                        T
                      </tspan>
                    </text>
                    <text
                      id="T-2"
                      data-name="T"
                      transform="translate(84 13)"
                      fill="rgba(18,18,18,0.31)"
                      font-size="12"
                      font-family="Poppins-Regular, Poppins"
                    >
                      <tspan x="0" y="0">
                        T
                      </tspan>
                    </text>
                    <text
                      id="F"
                      transform="translate(204 13)"
                      fill="rgba(18,18,18,0.31)"
                      font-size="12"
                      font-family="Poppins-Regular, Poppins"
                    >
                      <tspan x="0" y="0">
                        F
                      </tspan>
                    </text>
                    <text
                      id="W"
                      transform="translate(124 13)"
                      fill="rgba(18,18,18,0.31)"
                      font-size="12"
                      font-family="Poppins-Regular, Poppins"
                    >
                      <tspan x="0" y="0">
                        W
                      </tspan>
                    </text>
                    <text
                      id="S-2"
                      data-name="S"
                      transform="translate(238 13)"
                      fill="rgba(18,18,18,0.31)"
                      font-size="12"
                      font-family="Poppins-Regular, Poppins"
                    >
                      <tspan x="0" y="0">
                        S
                      </tspan>
                    </text>
                    <text
                      id="M-2"
                      data-name="M"
                      transform="translate(312 13)"
                      fill="rgba(18,18,18,0.31)"
                      font-size="12"
                      font-family="Poppins-Regular, Poppins"
                    >
                      <tspan x="0" y="0">
                        M
                      </tspan>
                    </text>
                    <text
                      id="S-3"
                      data-name="S"
                      transform="translate(276 13)"
                      fill="rgba(18,18,18,0.31)"
                      font-size="12"
                      font-family="Poppins-Regular, Poppins"
                    >
                      <tspan x="0" y="0">
                        S
                      </tspan>
                    </text>
                  </g>
                  <g
                    id="Group_8897"
                    data-name="Group 8897"
                    transform="translate(232 66)"
                  >
                    <g
                      id="Group_8893"
                      data-name="Group 8893"
                      transform="translate(32 55)"
                    >
                      <path
                        id="Vector_108"
                        data-name="Vector 108"
                        d="M0,52V0"
                        transform="translate(8 61)"
                        fill="none"
                        stroke="rgba(24,29,32,0.3)"
                        stroke-linecap="round"
                        stroke-width="1"
                        stroke-dasharray="6 6"
                      />
                      <circle
                        id="Ellipse_96"
                        data-name="Ellipse 96"
                        cx="8"
                        cy="8"
                        r="8"
                        transform="translate(0 53)"
                        fill="#4a8998"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-dasharray="0 0"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 gap-4">
            <div className="w-full bg-[#FFFFFF] py-5 px-4 rounded-2xl shadow-lg shadow-[#D9FFFD] flex items-start justify-between">
              <div>
                <span className="font-[Lato] text-lg font-bold text-[#0C0A3D]">
                  Sales
                </span>
                <br />
                <span className="font-[Lato] text-5xl text-[#37C3E9]">365</span>
                <br />
                <span className="font-[Poppins] text-sm text-[#0C0A3D] font-light">
                  This Month
                </span>
              </div>
              <div className="w-1/5">
                <VscGraph className="w-full h-full text-[#37C3E9]" />
              </div>
            </div>
            <div className="w-full bg-[#FFFFFF] py-5 px-4 rounded-2xl shadow-lg shadow-[#D9FFFD] flex items-start justify-between">
              <div>
                <span className="font-[Lato] text-lg font-bold text-[#0C0A3D]">
                  Earnings
                </span>
                <br />
                <span className="font-[Lato] text-5xl text-[#37C3E9]">
                  6549
                </span>
                <br />
                <span className="font-[Poppins] text-sm text-[#0C0A3D] font-light">
                  This Month
                </span>
              </div>
              <div className="w-1/5">
                <FaCoins className="w-full h-full text-[#37C3E9]" />
              </div>
            </div>
            <div className="w-full bg-[#FFFFFF] py-5 px-4 rounded-2xl shadow-lg shadow-[#D9FFFD] flex items-start justify-between">
              <div>
                <span className="font-[Lato] text-lg font-bold text-[#0C0A3D]">
                  Loss
                </span>
                <br />
                <span className="font-[Lato] text-5xl text-[#37C3E9]">120</span>
                <br />
                <span className="font-[Poppins] text-sm text-[#0C0A3D] font-light">
                  This Month
                </span>
              </div>
              <div className="w-1/5">
                <RiCoinLine className="w-full h-full text-[#37C3E9]" />
              </div>
            </div>
            <div className="w-full bg-[#FFFFFF] py-5 px-4 rounded-2xl shadow-lg shadow-[#D9FFFD] flex items-start justify-between">
              <div>
                <span className="font-[Lato] text-lg font-bold text-[#0C0A3D]">
                  Available Stock
                </span>
                <br />
                <span className="font-[Lato] text-5xl text-[#37C3E9]">
                  4065
                </span>
                <br />
                <span className="font-[Poppins] text-sm text-[#0C0A3D] font-light">
                  This Month
                </span>
              </div>
              <div className="w-1/5">
                <BsMinecartLoaded className="w-full h-full text-[#37C3E9]" />
              </div>
            </div>
            <div className="w-full bg-[#FFFFFF] py-5 px-4 rounded-2xl shadow-lg shadow-[#D9FFFD] flex items-start justify-between">
              <div>
                <span className="font-[Lato] text-lg font-bold text-[#0C0A3D]">
                  UnAvailable Stock
                </span>
                <br />
                <span className="font-[Lato] text-5xl text-[#37C3E9]">10</span>
                <br />
                <span className="font-[Poppins] text-sm text-[#0C0A3D] font-light">
                  This Month
                </span>
              </div>
              <div className="w-1/5">
                <BsMinecart className="w-full h-full text-[#37C3E9]" />
              </div>
            </div>
            <div className="w-full bg-[#FFFFFF] py-5 px-4 rounded-2xl shadow-lg shadow-[#D9FFFD] flex items-start justify-between">
              <div>
                <span className="font-[Lato] text-lg font-bold text-[#0C0A3D]">
                  Expired
                </span>
                <br />
                <span className="font-[Lato] text-5xl text-[#37C3E9]">0</span>
                <br />
                <span className="font-[Poppins] text-sm text-[#0C0A3D] font-light">
                  This Month
                </span>
              </div>
              <div className="w-1/5">
                <TiCancelOutline className="w-full h-full text-[#37C3E9]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full bg-[#FFFFFF] py-5 px-4 rounded-2xl shadow-lg shadow-[#D9FFFD]">
          <div className="flex gap-12">
            <div>
              <div className="w-20 h-20 px-4 py-4 rounded-lg bg-[#CFFFFD]">
                <RiCoinsLine className="w-full h-full" />
              </div>
              <p className="text-lg text-[#102538] font-[Poppins] mt-5">
                Total Earnings
              </p>
              <br />
              <p className="text-3xl text-[#102538] font-semibold font-[Poppins]">
                $23,536,569
              </p>
              <br />
              <p className="text-lg text-[#16be00] font-[Poppins] flex items-center">
                <RiArrowUpSFill className="w-8 h-8" /> +12% vs last year
              </p>
            </div>
            <div className="w-full py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 927 264"
              >
                <g id="Line" transform="translate(422 8)">
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    x2="501"
                    transform="matrix(1, 0, 0, 1, 4, 230)"
                    fill="none"
                    stroke="#f4f4f4"
                    stroke-width="1"
                    stroke-dasharray="6 6"
                  />
                  <line
                    id="Line_3"
                    data-name="Line 3"
                    x2="501"
                    transform="matrix(1, 0, 0, 1, 4, 184)"
                    fill="none"
                    stroke="#f4f4f4"
                    stroke-width="1"
                    stroke-dasharray="6 6"
                  />
                  <line
                    id="Line_4"
                    data-name="Line 4"
                    x2="501"
                    transform="matrix(1, 0, 0, 1, 4, 138)"
                    fill="none"
                    stroke="#f4f4f4"
                    stroke-width="1"
                    stroke-dasharray="6 6"
                  />
                  <line
                    id="Line_5"
                    data-name="Line 5"
                    x2="501"
                    transform="matrix(1, 0, 0, 1, 4, 92)"
                    fill="none"
                    stroke="#f4f4f4"
                    stroke-width="1"
                    stroke-dasharray="6 6"
                  />
                  <line
                    id="Line_6"
                    data-name="Line 6"
                    x2="501"
                    transform="matrix(1, 0, 0, 1, 4, 46)"
                    fill="none"
                    stroke="#f4f4f4"
                    stroke-width="1"
                    stroke-dasharray="6 6"
                  />
                  <line
                    id="Line_7"
                    data-name="Line 7"
                    x2="505"
                    transform="matrix(1, 0, 0, 1, 0, 0)"
                    fill="none"
                    stroke="#f4f4f4"
                    stroke-width="1"
                    stroke-dasharray="6 6"
                  />
                </g>
                <g id="Month" transform="translate(63 252)">
                  <text
                    id="Mar"
                    fill="#969fa8"
                    font-size="10"
                    font-family="Lato-Regular, Lato"
                  >
                    <tspan x="15.128" y="10">
                      Mar
                    </tspan>
                  </text>
                  <text
                    id="Apr"
                    transform="translate(115)"
                    fill="#969fa8"
                    font-size="10"
                    font-family="Lato-Regular, Lato"
                  >
                    <tspan x="16.003" y="10">
                      Apr
                    </tspan>
                  </text>
                  <text
                    id="May"
                    transform="translate(231)"
                    fill="#969fa8"
                    font-size="10"
                    font-family="Lato-Regular, Lato"
                  >
                    <tspan x="14.43" y="10">
                      May
                    </tspan>
                  </text>
                  <text
                    id="Jun"
                    transform="translate(347)"
                    fill="#969fa8"
                    font-size="10"
                    font-family="Lato-Regular, Lato"
                  >
                    <tspan x="16.38" y="10">
                      Jun
                    </tspan>
                  </text>
                  <text
                    id="Jul"
                    transform="translate(464)"
                    fill="#969fa8"
                    font-size="10"
                    font-family="Lato-Regular, Lato"
                  >
                    <tspan x="17.99" y="10">
                      Jul
                    </tspan>
                  </text>
                  <text
                    id="Aug"
                    transform="translate(580)"
                    fill="#969fa8"
                    font-size="10"
                    font-family="Lato-Regular, Lato"
                  >
                    <tspan x="15.29" y="10">
                      Aug
                    </tspan>
                  </text>
                  <text
                    id="Sep"
                    transform="translate(697)"
                    fill="#969fa8"
                    font-size="10"
                    font-family="Lato-Regular, Lato"
                  >
                    <tspan x="15.86" y="10">
                      Sep
                    </tspan>
                  </text>
                  <text
                    id="Oct"
                    transform="translate(811)"
                    fill="#969fa8"
                    font-size="10"
                    font-family="Lato-Regular, Lato"
                  >
                    <tspan x="15.85" y="10">
                      Oct
                    </tspan>
                  </text>
                </g>
                <g id="Chart" transform="translate(63.046 63)">
                  <g id="_8" data-name="8" transform="translate(810.954 21)">
                    <path
                      id="Rectangle_955"
                      data-name="Rectangle 955"
                      d="M3,0H19a3,3,0,0,1,3,3V111a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                      transform="translate(0 43)"
                      fill="#f6f7f9"
                    />
                    <path
                      id="Rectangle_956"
                      data-name="Rectangle 956"
                      d="M3,0H19a3,3,0,0,1,3,3V154a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                      transform="translate(26)"
                      fill="#f6f7f9"
                    />
                  </g>
                  <g id="_7" data-name="7" transform="translate(696.954 50)">
                    <path
                      id="Rectangle_955-2"
                      data-name="Rectangle 955"
                      d="M3,0H19a3,3,0,0,1,3,3V125a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                      fill="#f6f7f9"
                    />
                    <path
                      id="Rectangle_956-2"
                      data-name="Rectangle 956"
                      d="M3,0H19a3,3,0,0,1,3,3v97a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                      transform="translate(26 25)"
                      fill="#f6f7f9"
                    />
                  </g>
                  <g id="_6" data-name="6" transform="translate(579.605 22)">
                    <path
                      id="Rectangle_955-3"
                      data-name="Rectangle 955"
                      d="M3,0H19a3,3,0,0,1,3,3V127a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                      transform="translate(0.35 26)"
                      fill="#f6f7f9"
                    />
                    <path
                      id="Rectangle_956-3"
                      data-name="Rectangle 956"
                      d="M3,0H19a3,3,0,0,1,3,3V153a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                      transform="translate(26.35)"
                      fill="#f6f7f9"
                    />
                  </g>
                  <g
                    id="_5_Selected"
                    data-name="5/Selected"
                    transform="translate(463.93)"
                  >
                    <path
                      id="Rectangle_955-4"
                      data-name="Rectangle 955"
                      d="M3,0H19a3,3,0,0,1,3,3V154a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                      transform="translate(0.024 21)"
                      fill="#4049ff"
                    />
                    <path
                      id="Rectangle_956-4"
                      data-name="Rectangle 956"
                      d="M3,0H19a3,3,0,0,1,3,3V175a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                      transform="translate(26.024)"
                      fill="#3df"
                    />
                  </g>
                  <g id="_4" data-name="4" transform="translate(347.063 14)">
                    <path
                      id="Rectangle_955-5"
                      data-name="Rectangle 955"
                      d="M3,0H19a3,3,0,0,1,3,3V161a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                      transform="translate(-0.109)"
                      fill="#f6f7f9"
                    />
                    <path
                      id="Rectangle_956-5"
                      data-name="Rectangle 956"
                      d="M3,0H19a3,3,0,0,1,3,3V142a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                      transform="translate(25.891 19)"
                      fill="#f6f7f9"
                    />
                  </g>
                  <g id="_3" data-name="3" transform="translate(231.388 31)">
                    <path
                      id="Rectangle_955-6"
                      data-name="Rectangle 955"
                      d="M3,0H19a3,3,0,0,1,3,3V144a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                      transform="translate(-0.434)"
                      fill="#f6f7f9"
                    />
                    <path
                      id="Rectangle_956-6"
                      data-name="Rectangle 956"
                      d="M3,0H19a3,3,0,0,1,3,3V111a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                      transform="translate(25.566 33)"
                      fill="#f6f7f9"
                    />
                  </g>
                  <g id="_2" data-name="2" transform="translate(114.039 50)">
                    <path
                      id="Rectangle_955-7"
                      data-name="Rectangle 955"
                      d="M3,0H19a3,3,0,0,1,3,3V111a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                      transform="translate(-0.085 14)"
                      fill="#f6f7f9"
                    />
                    <path
                      id="Rectangle_956-7"
                      data-name="Rectangle 956"
                      d="M3,0H19a3,3,0,0,1,3,3V125a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                      transform="translate(25.915)"
                      fill="#f6f7f9"
                    />
                  </g>
                  <g id="_1" data-name="1" transform="translate(0.039 83)">
                    <path
                      id="Rectangle_955-8"
                      data-name="Rectangle 955"
                      d="M3,0H19a3,3,0,0,1,3,3V92a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                      transform="translate(-0.085)"
                      fill="#f6f7f9"
                    />
                    <path
                      id="Rectangle_956-8"
                      data-name="Rectangle 956"
                      d="M3,0H19a3,3,0,0,1,3,3V79a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                      transform="translate(25.915 13)"
                      fill="#f6f7f9"
                    />
                  </g>
                </g>
                <g id="Value" transform="translate(-0.183)">
                  <text
                    id="_25K"
                    data-name="$25K"
                    transform="translate(0.183)"
                    fill="#969fa8"
                    font-size="10"
                    font-family="Lato-Regular, Lato"
                  >
                    <tspan x="0.975" y="10">
                      $25K
                    </tspan>
                  </text>
                  <text
                    id="_20K"
                    data-name="$20K"
                    transform="translate(0.183 46)"
                    fill="#969fa8"
                    font-size="10"
                    font-family="Lato-Regular, Lato"
                  >
                    <tspan x="0.975" y="10">
                      $20K
                    </tspan>
                  </text>
                  <text
                    id="_15K"
                    data-name="$15K"
                    transform="translate(0.183 92)"
                    fill="#969fa8"
                    font-size="10"
                    font-family="Lato-Regular, Lato"
                  >
                    <tspan x="0.975" y="10">
                      $15K
                    </tspan>
                  </text>
                  <text
                    id="_10K"
                    data-name="$10K"
                    transform="translate(0.183 138)"
                    fill="#969fa8"
                    font-size="10"
                    font-family="Lato-Regular, Lato"
                  >
                    <tspan x="0.975" y="10">
                      $10K
                    </tspan>
                  </text>
                  <text
                    id="_5K"
                    data-name="$5K"
                    transform="translate(6.183 184)"
                    fill="#969fa8"
                    font-size="10"
                    font-family="Lato-Regular, Lato"
                  >
                    <tspan x="0.775" y="10">
                      $5K
                    </tspan>
                  </text>
                  <text
                    id="_0K"
                    data-name="$0K"
                    transform="translate(6.183 230)"
                    fill="#969fa8"
                    font-size="10"
                    font-family="Lato-Regular, Lato"
                  >
                    <tspan x="0.775" y="10">
                      $0K
                    </tspan>
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
