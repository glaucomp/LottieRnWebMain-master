import React from "react";
import Svg, { Defs, Path, Rect , G } from "react-native-svg-web";
import { colorSymbolNotSelected } from "../../../global/Settings";

const lowerOpacityColour = colorSymbolNotSelected;

export const IconTypeTorchdefault = ({ lower_opacity }) => (
  <Svg
    width="78"
    height="84"
    viewBox="0 0 78 84"
    fill={lower_opacity ? lowerOpacityColour : "black"}
  >
    <G clipPath="url(#clip0_8949_52673)">
      <Path
        d="M51.6758 39.2344H51.1969C52.0221 34.483 50.8618 28.9256 47.9087 23.5332C45.3343 18.8327 41.5728 14.6641 38.0917 12.6544C37.7351 12.4485 37.2959 12.4485 36.9393 12.6544C36.5828 12.8603 36.3632 13.2408 36.3632 13.6524C36.3632 17.8351 34.0664 21.1747 31.635 24.7106C28.7346 28.928 25.7403 33.2872 26.7334 39.2344H26.3242C25.0534 39.2344 24.0195 40.2683 24.0195 41.5391V43.8438C24.0195 45.1146 25.0534 46.1484 26.3242 46.1484H26.3243V47.3009C26.3243 49.8425 28.3921 51.9101 30.9337 51.9101H34.3907V51.9103V59.0224C33.0495 59.4981 32.086 60.779 32.086 62.2813C32.086 63.7835 33.0495 65.0643 34.3907 65.54V66.8907C34.3907 69.4323 36.4585 71.5 39.0001 71.5C41.5417 71.5 43.6094 69.4323 43.6094 66.8907V65.5401C44.9507 65.0644 45.9142 63.7836 45.9142 62.2812C45.9142 60.7788 44.9507 59.498 43.6094 59.0223V51.9101V51.91H47.0663C49.6079 51.91 51.6757 49.8424 51.6757 47.3008V46.1483H51.6758C52.9466 46.1483 53.9805 45.1145 53.9805 43.8437V41.539C53.9805 40.2683 52.9467 39.2344 51.6758 39.2344ZM29.0617 39.1741C28.0572 33.9803 30.7175 30.1119 33.5339 26.0165C35.6938 22.8758 37.9165 19.644 38.513 15.7071C41.1809 17.7411 43.8983 21.0084 45.8874 24.6402C48.6608 29.7045 49.7187 34.8642 48.8662 39.169C48.8618 39.1909 48.8597 39.2125 48.8566 39.2343H45.4953C45.7077 36.9297 45.0523 34.3091 43.6297 31.8143C42.3464 29.564 40.5669 27.6353 38.8694 26.6552C38.5128 26.4493 38.0736 26.4493 37.717 26.6552C37.3605 26.8611 37.1409 27.2416 37.1409 27.6532C37.1409 29.458 36.0986 30.9735 34.9951 32.5782C33.7252 34.4247 32.2918 36.5097 32.4789 39.2342H29.0702C29.0675 39.2144 29.0656 39.1943 29.0617 39.1741ZM34.7917 39.2344C34.5891 37.2371 35.6575 35.6824 36.8939 33.8842C37.7399 32.6541 38.6656 31.3082 39.135 29.7334C41.3804 31.8386 43.6155 35.7507 43.1796 39.2344H34.7917ZM39.0001 69.1953C37.7293 69.1953 36.6954 68.1615 36.6954 66.8907V65.7382H41.3047V66.8907C41.3047 68.1616 40.2709 69.1953 39.0001 69.1953ZM42.4573 63.4335H35.543C34.9076 63.4335 34.3907 62.9166 34.3907 62.2812C34.3907 61.6458 34.9076 61.1289 35.543 61.1289H42.4573C43.0927 61.1289 43.6095 61.6458 43.6095 62.2813C43.6095 62.9167 43.0927 63.4335 42.4573 63.4335ZM41.3047 51.9103V58.8242H36.6954V51.9103V51.9101L41.3047 51.9103ZM51.6758 43.8438H44.186C43.5497 43.8438 43.0337 44.3598 43.0337 44.9961C43.0337 45.6324 43.5497 46.1484 44.186 46.1484H49.371V47.3009C49.371 48.5716 48.3371 49.6055 47.0663 49.6055H30.9337C29.6629 49.6055 28.629 48.5716 28.629 47.3009V46.1484H33.8149C34.4513 46.1484 34.9672 45.6324 34.9672 44.9961C34.9672 44.3598 34.4513 43.8438 33.8149 43.8438H26.3242V41.5391H51.6758V43.8438Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
      <Path
        d="M39.0008 46.1484C39.6372 46.1484 40.1532 45.6324 40.1532 44.9961C40.1532 44.3598 39.6372 43.8438 39.0008 43.8438H39C38.3636 43.8438 37.8481 44.3598 37.8481 44.9961C37.8481 45.6324 38.3644 46.1484 39.0008 46.1484Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
    </G>
    <Defs>
      <clipPath id="clip0_8949_52673">
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