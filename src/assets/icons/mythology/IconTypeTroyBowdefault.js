import React from "react";
import Svg, { Defs, G, Path, Rect } from "react-native-svg-web";
import { colorSymbolNotSelected } from "../../../global/Settings";

const lowerOpacityColour = colorSymbolNotSelected;

export const IconTypeTroyBowdefault = ({ lower_opacity }) => (
  <Svg
    width="78"
    height="84"
    viewBox="0 0 78 84"
    fill={lower_opacity ? lowerOpacityColour : "black"}
  >
    <G clip-Path="url(#clip0_8951_52890)">
      <Path
        d="M66.7313 65.93C63.848 64.4055 64.4058 58.9124 64.9454 53.6002C65.1377 51.7062 65.3366 49.7478 65.3899 47.8546C65.4609 45.3326 65.114 43.0241 64.3589 40.993C63.5138 38.7207 62.1984 36.8937 60.4489 35.5629C58.6015 34.1576 56.4081 33.4097 53.9299 33.3398C52.6363 33.3032 51.273 33.4596 49.8696 33.8044L49.3462 33.281L58.9594 23.6678C59.1308 23.7026 59.3087 23.7156 59.4846 23.7058L63.6686 23.4779C64.468 23.4328 65.1577 22.9465 65.4693 22.2073L68.3326 15.3907C68.6623 14.6086 68.486 13.7139 67.8834 13.1113C67.2834 12.5112 66.3906 12.3364 65.6097 12.6657L58.846 15.507C58.0854 15.802 57.5666 16.515 57.521 17.3325L57.2937 21.5066C57.2833 21.6858 57.2964 21.8641 57.3312 22.037L47.7168 31.6515L47.1934 31.128C47.5381 29.7249 47.6943 28.3618 47.6579 27.0677C47.5882 24.5894 46.8402 22.3962 45.4349 20.5487C44.104 18.7992 42.2772 17.4837 40.0048 16.6388C37.9733 15.8835 35.6648 15.5366 33.1432 15.6077C27.8444 15.5504 17.3266 18.3751 15.0685 14.268C14.4999 13.1882 13.549 12.5446 12.4593 12.5021C11.4462 12.4632 10.4766 12.9691 9.93744 13.8245C9.36168 14.7377 9.35845 15.8826 9.9296 16.9672C10.9197 18.8398 12.2022 20.2731 13.8125 21.2966L35.9418 43.426L22.1779 57.1901C22.1235 57.1756 22.0683 57.1631 22.0123 57.1525L17.9823 56.332C17.2221 56.1776 16.4418 56.4113 15.8939 56.9582L10.1787 62.6735C9.28482 63.5312 9.28482 65.0747 10.1786 65.9324C10.5278 66.2819 10.9683 66.5053 11.4549 66.5803L13.918 67.0817L14.4409 69.6505C14.5635 70.253 14.9134 70.7717 15.4261 71.111C16.3112 71.718 17.5841 71.5825 18.3263 70.821L24.0416 65.1057C24.6153 64.5319 24.8447 63.694 24.6457 62.9089L23.841 58.9556C23.8316 58.9093 23.8207 58.8635 23.8086 58.8183L37.5713 45.0556L59.7083 67.1927C60.7338 68.8008 62.1675 70.0831 64.0318 71.069C64.6016 71.369 65.1523 71.5001 65.661 71.5C66.7871 71.5 67.7064 70.8572 68.1671 69.9825C68.8259 68.7312 68.546 66.8854 66.7313 65.93ZM59.8142 17.5994L65.9959 15.0028L63.3993 21.1845L59.6077 21.3911L59.8142 17.5994ZM22.394 63.3998C22.399 63.425 22.4054 63.4513 22.412 63.4762L16.6991 69.1909L16.0241 65.8749C15.932 65.4218 15.578 65.0679 15.125 64.9757L11.8832 64.3157C11.8581 64.3106 11.8335 64.3065 11.8083 64.303L17.5228 58.5901L20.2272 59.1408L17.0134 62.3545C16.5635 62.8045 16.5635 63.534 17.0134 63.9841C17.4635 64.434 18.193 64.434 18.643 63.9841L21.8584 60.7687L22.394 63.3998ZM48.7092 35.9028C49.005 36.1986 49.4378 36.3109 49.8401 36.1961C51.2502 35.7937 52.6041 35.6076 53.8652 35.6432C55.8518 35.6992 57.5977 36.2892 59.0537 37.3969C59.466 37.7105 59.8487 38.0606 60.2013 38.446L58.3134 39.7751C58.1122 39.5735 57.8999 39.3875 57.6764 39.2175C56.6095 38.406 55.3067 37.973 53.8041 37.9307C52.4864 37.8933 51.0326 38.1573 49.479 38.7142C49.445 38.7263 49.4115 38.7403 49.3788 38.7556C48.941 38.9608 48.4168 38.8689 48.0748 38.5267L46.0877 36.5395L47.7168 34.9104L48.7092 35.9028ZM45.3542 27.1324C45.3897 28.3933 45.2036 29.7475 44.8012 31.1573C44.6865 31.5595 44.7987 31.9924 45.0945 32.2882L46.0871 33.2808L44.458 34.91L42.471 32.9229C42.1288 32.5806 42.0367 32.0566 42.2421 31.619C42.2575 31.5862 42.2713 31.5527 42.2834 31.5186C42.8403 29.9655 43.1039 28.5104 43.0669 27.1936C43.0246 25.6908 42.5916 24.3879 41.78 23.3213C41.6101 23.0978 41.4241 22.8854 41.2225 22.6842L42.5517 20.7963C42.937 21.1489 43.287 21.5317 43.6006 21.9439C44.7084 23.3999 45.2983 25.1456 45.3542 27.1324ZM18.8406 23.0659C21.1061 23.4024 23.4584 23.3069 25.5549 23.1471C26.1895 23.0987 26.6645 22.5451 26.6161 21.9106C26.5679 21.2761 26.0155 20.8009 25.3797 20.8493C18.9759 21.3376 14.4984 20.6783 11.9678 15.8918C11.8642 15.695 11.7158 15.3246 11.8868 15.0536C11.9868 14.895 12.1764 14.797 12.3697 14.8049C12.6879 14.8172 12.9041 15.1036 13.0302 15.3435C15.2804 19.5991 21.5586 18.9615 27.6325 18.3446C31.4688 17.9498 35.7445 17.4434 39.2014 18.7986C39.721 18.9918 40.2113 19.2139 40.671 19.4641L39.3433 21.3501C39.0461 21.2005 38.7323 21.0642 38.4023 20.9415C37.6631 20.6667 36.8471 20.4645 35.9768 20.3405C35.3467 20.2511 34.7634 20.6887 34.6735 21.3188C34.5838 21.9488 35.0217 22.5323 35.6517 22.622C37.2568 22.8332 39.0622 23.5163 39.9458 24.7164C40.4598 25.392 40.7348 26.2472 40.7633 27.2584C40.7919 28.2752 40.5788 29.4315 40.1302 30.6961C39.5475 31.9982 39.8297 33.5407 40.8414 34.5523L42.8285 36.5394L37.5713 41.7967L18.8406 23.0659ZM44.458 38.1689L46.4451 40.156C47.4569 41.1677 48.9996 41.4498 50.3015 40.8673C51.5664 40.4185 52.7203 40.2049 53.7391 40.2341C54.7503 40.2626 55.6056 40.5376 56.2811 41.0514C56.968 41.574 57.5114 42.3635 57.8961 43.3982C58.9522 46.2557 58.3633 49.6609 58.0798 52.9172C57.7657 56.0103 57.5038 59.2478 57.9325 62.1577L39.2009 43.426L44.458 38.1689ZM66.128 68.9089C65.9578 69.2321 65.5756 69.2775 65.1072 69.0308C59.5267 66.0803 59.6418 60.3434 60.3724 53.1493C60.5587 51.3149 60.7515 49.4181 60.799 47.7285C60.8447 45.3733 60.5461 43.5024 59.6475 41.6541L61.5333 40.3264C61.7836 40.7862 62.0056 41.2763 62.1988 41.796C63.5543 45.255 63.0475 49.5286 62.6526 53.3672C62.0359 59.4387 61.3983 65.717 65.6558 67.968C66.2144 68.2622 66.266 68.6469 66.128 68.9089Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
      <Path
        d="M30.63 20.3613H30.6291C29.9928 20.3613 29.4773 20.8772 29.4773 21.5135C29.5381 23.0417 31.7217 23.0417 31.7822 21.5135C31.7822 20.8773 31.2663 20.3613 30.63 20.3613Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
    </G>
    <Defs>
      <clipPath id="clip0_8951_52890">
        <Rect
          width="59"
          height="59"
          fill="white"
          transform="translate(9.5 12.5)"
        />
      </clipPath>
    </Defs>
  </Svg>
);
