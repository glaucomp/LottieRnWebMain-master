import React from "react";
import Svg, { Path, Defs, G, Rect } from "react-native-svg-web";
import { colorSymbolNotSelected } from "../../../global/Settings";

const lowerOpacityColour = colorSymbolNotSelected;

export const IconTypeTravellerdefault = ({ lower_opacity }) => (
  <Svg
    width="78"
    height="84"
    viewBox="0 0 78 84"
    fill={lower_opacity ? lowerOpacityColour : "black"}
  >
    <G clipPath="url(#clip0_8948_52346)">
      <Path
        d="M63.9272 71.9999C64.2539 71.9999 64.5653 71.8612 64.7839 71.6183C65.0024 71.3753 65.1076 71.051 65.0733 70.7262L63.8524 59.1794C63.5616 56.0284 62.044 53.0404 59.678 50.9456C59.682 50.9121 59.6874 50.8787 59.6883 50.8448C59.6891 50.8168 59.7692 48.0121 59.7162 45.0282C59.6608 41.9065 59.4933 40.0794 59.2889 38.9634C60.6399 38.537 61.6223 37.2723 61.6223 35.7821V32.4884C61.6223 30.6494 60.1262 29.1533 58.2872 29.1533H51.4095V26.9206C51.878 26.7743 52.218 26.3371 52.218 25.8205V25.7053C52.218 23.2561 51.5194 20.8779 50.1977 18.828C48.9116 16.833 47.101 15.2405 44.9619 14.2227C44.387 13.949 43.6995 14.1934 43.4261 14.7683C43.1527 15.3429 43.3969 16.0305 43.9716 16.304C47.266 17.8716 49.4965 21.0825 49.8605 24.6679H48.4143C45.9757 24.4332 42.6456 23.7329 40.5147 21.7364C39.4249 20.7154 39.1426 19.8162 39.1125 19.7117C39.0003 19.1795 38.5376 18.831 37.9926 18.8308C37.9924 18.8308 37.9923 18.8308 37.992 18.8308C37.9918 18.8308 37.9916 18.8308 37.9913 18.8308C37.9911 18.8308 37.991 18.8308 37.9908 18.8308C35.4576 18.8308 33.2162 20.4339 32.3942 22.8265C31.7549 24.2354 30.6727 24.6101 29.1527 24.6613C29.3886 22.2757 30.4315 20.0638 32.1484 18.3469C33.0075 17.4878 34.0006 16.7911 35.1 16.2765C35.6764 16.0066 35.925 15.3206 35.6551 14.7442C35.3852 14.1676 34.6994 13.9193 34.1228 14.1891C32.7802 14.8175 31.5675 15.6682 30.5187 16.7173C28.1183 19.1176 26.7964 22.3095 26.7964 25.7053V25.8205C26.7964 26.3324 27.1304 26.7657 27.5922 26.916V29.1533H20.7133C18.8742 29.1533 17.3781 30.6494 17.3781 32.4884V35.7821C17.3781 37.3124 18.4144 38.6044 19.8219 38.9953C19.6342 40.0749 19.4661 41.8873 19.4182 45.0246C19.3751 47.8479 19.4494 50.5172 19.459 50.8409C17.0268 52.9571 15.4552 55.9494 15.1479 59.1791L13.927 70.7262C13.8927 71.051 13.9978 71.3753 14.2164 71.6183C14.4349 71.8611 14.7464 71.9999 15.0731 71.9999H63.9272ZM29.5209 36.3609C29.9946 37.0867 30.5451 37.7578 31.161 38.3628C30.116 39.3759 28.8059 40.0208 27.3886 40.2293C27.6504 38.7453 28.42 37.3872 29.5209 36.3609ZM35.7071 41.1598C36.9268 41.5704 38.2133 41.7788 39.5001 41.7793C41.0613 41.78 42.6202 41.4699 44.0626 40.8727L44.6539 45.8465C44.7791 46.8982 45.5134 47.78 46.525 48.0929L48.2955 48.6403C46.2002 50.8491 43.2674 52.1317 40.1801 52.1317H38.8202C35.7429 52.1317 32.819 50.8584 30.725 48.6636L32.5933 48.0915C33.6095 47.7804 34.347 46.8977 34.472 45.8428L35.0565 40.9211C35.271 41.0072 35.488 41.0866 35.7071 41.1598ZM49.4802 36.3609C50.5812 37.3873 51.3513 38.7441 51.6132 40.2292C50.1954 40.0207 48.8849 39.3759 47.8396 38.3631C48.4557 37.7581 49.0065 37.0868 49.4802 36.3609ZM26.5429 48.2824C26.8171 48.2359 27.0875 48.4707 27.0803 48.7494V58.2928H22.9453V49.7924C22.9465 49.5895 23.0759 49.4078 23.2702 49.3437L26.4629 48.3011C26.4906 48.2922 26.5161 48.286 26.5429 48.2824ZM27.0803 63.4746H22.9461V60.5976H27.0803V63.4746ZM22.9453 65.7794H27.0803V69.6951H22.9453V65.7794ZM29.3855 50.5875C31.8835 53.0299 35.2674 54.4367 38.8202 54.4367H40.1801C43.7329 54.4367 47.1168 53.0296 49.6148 50.5865V69.6951H29.3855V50.5875ZM51.9199 60.5976H56.0542V63.4746H51.9199V60.5976ZM51.9199 58.2928V48.7494C51.9093 48.4411 52.247 48.1975 52.5374 48.3011L55.7301 49.3437C55.9255 49.4072 56.0535 49.5915 56.0549 49.7924V58.2928H51.9199ZM51.9199 65.7794H56.0549V69.6951H51.9199V65.7794ZM57.4372 47.7228C57.1503 47.4685 56.812 47.2729 56.4461 47.1526L53.2621 46.1127C52.2565 45.7633 51.078 46.0696 50.3527 46.8639L47.206 45.891C47.0637 45.847 46.9603 45.7226 46.9427 45.5744L46.2884 40.0709C48.0056 41.7088 50.2484 42.6082 52.6288 42.6082H52.8766C53.5131 42.6082 54.029 42.0921 54.029 41.4557C54.029 40.6682 53.9256 39.8794 53.7254 39.1174H56.9787C57.2545 40.4152 57.4582 43.5574 57.4372 47.7228ZM26.1249 42.6081H26.3729C28.819 42.6081 31.1194 41.6585 32.8527 39.9336L32.1832 45.5712C32.1657 45.7196 32.0617 45.8438 31.9186 45.8876L28.6656 46.8834C27.9508 46.0834 26.7645 45.7633 25.7476 46.1095L22.5543 47.1525C22.2474 47.2556 21.96 47.4092 21.7029 47.6058C21.6767 43.4918 21.8703 40.3937 22.1374 39.1173H25.2767C25.0761 39.8801 24.9726 40.669 24.9726 41.4556C24.9725 42.0921 25.4884 42.6081 26.1249 42.6081ZM61.5584 59.403C61.5587 59.4072 61.5592 59.4112 61.5595 59.4153L62.6465 69.6949H58.3601L58.3598 52.8627C60.175 54.566 61.3291 56.9201 61.5584 59.403ZM59.3173 32.4885V35.7822C59.3173 36.3503 58.8551 36.8125 58.287 36.8125H52.7694C52.2335 35.8466 51.3849 34.9825 50.592 34.213C50.9415 33.3266 51.1757 32.4013 51.3044 31.4582H58.2869C58.8551 31.4582 59.3173 31.9204 59.3173 32.4885ZM49.1045 26.9729V29.8702C49.1979 35.0447 44.6527 39.5708 39.5001 39.4746C34.3432 39.5653 29.8111 35.0557 29.8968 29.8702V26.9376C32.1172 26.7278 33.7796 25.5581 34.5625 23.6107C34.9745 22.3712 36.0072 21.4725 37.2474 21.2127C37.547 21.8044 38.0648 22.6004 38.9381 23.4186C41.0453 25.4008 44.285 26.6275 48.3595 26.973L49.1045 26.9729ZM19.6829 32.4885C19.6829 31.9204 20.1451 31.4583 20.7132 31.4583H27.6968C27.8256 32.4014 28.0594 33.3262 28.4087 34.2131C27.6154 34.984 26.7687 35.8458 26.232 36.8126H20.7133C20.1451 36.8126 19.683 36.3503 19.683 35.7823V32.4885H19.6829ZM17.4407 59.4155C17.4411 59.4112 17.4415 59.407 17.442 59.4028C17.6778 56.9102 18.8363 54.5887 20.6403 52.8791V69.6951H16.3537L17.4407 59.4155Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
      <Path
        d="M40.9086 31.2981H39.9617L40.7055 29.1027C40.9097 28.4999 40.5866 27.8456 39.9839 27.6413C39.3809 27.4371 38.7268 27.7603 38.5226 28.3631L37.5064 31.3625C37.3313 31.8791 37.4166 32.4519 37.7344 32.8952C38.0523 33.3384 38.5675 33.603 39.1127 33.603H40.9086C41.5451 33.603 42.061 33.0869 42.061 32.4506C42.061 31.8142 41.5451 31.2981 40.9086 31.2981Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
      <Path
        d="M39.7319 15.278C40.5192 15.1374 40.9242 14.1639 40.4648 13.508C39.9093 12.6592 38.5658 12.9259 38.3767 13.9229C38.196 14.6977 38.9583 15.4558 39.7319 15.278Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
    </G>
    <Defs>
      <clipPath id="clip0_8948_52346">
        <Rect
          width="59"
          height="59"
          fill="white"
          transform="translate(10 13)"
        />
      </clipPath>
    </Defs>
  </Svg>
);
