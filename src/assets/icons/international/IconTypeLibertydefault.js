import React from "react";
import Svg, { Defs, G, Path, Rect } from "react-native-svg-web";
import { colorSymbolNotSelected } from "../../../global/Settings";

const lowerOpacityColour = colorSymbolNotSelected;

export const IconTypeLibertydefault = ({ lower_opacity }) => (
  <Svg
    width="78"
    height="84"
    viewBox="0 0 78 84"
    fill={lower_opacity ? lowerOpacityColour : "black"}
  >
    <G clip-path="url(#clip0_7702_51744)">
      <Path
        d="M59.3875 70.6941L56.2928 64.8141L57.8124 63.4266C58.142 63.1256 58.1927 62.625 57.9302 62.2641L52.3225 54.5536C52.1576 54.3268 51.8942 54.1927 51.6139 54.1927H51.2634L51.2635 43.5322C51.2635 43.1474 51.231 42.7704 51.1711 42.4023L53.8342 41.6136C54.2616 41.487 54.5514 41.0671 54.4794 40.6273C54.3923 40.0954 53.8644 39.7767 53.3649 39.9249L50.6736 40.7221C50.6022 40.5594 50.5251 40.3997 50.4418 40.2436L54.0689 37.6843C54.4643 37.4053 54.5587 36.8585 54.2797 36.4631C54.0007 36.0678 53.4542 35.9733 53.0585 36.2524L49.4311 38.812C49.1728 38.5289 48.8907 38.2685 48.5897 38.0307L51.4406 33.2922C51.6901 32.8776 51.5562 32.3391 51.1415 32.0896C50.7268 31.8401 50.1884 31.9739 49.9389 32.3887L47.0897 37.1241C46.4772 36.852 45.8191 36.6657 45.1301 36.5793V29.9003C45.1301 29.4204 44.7604 29.002 44.2807 28.9877C43.7845 28.9729 43.3777 29.3707 43.3777 29.8636V36.5794C42.6884 36.6657 42.0303 36.8522 41.418 37.1243L38.5688 32.3888C38.3191 31.9742 37.7808 31.8403 37.3662 32.0897C36.9515 32.3392 36.8177 32.8776 37.0669 33.2923L39.9178 38.0308C39.6169 38.2684 39.3348 38.5289 39.0765 38.812L35.449 36.2524C35.0534 35.9734 34.507 36.0678 34.2279 36.4631C33.9488 36.8586 34.0433 37.4053 34.4387 37.6843L38.0658 40.2436C37.9825 40.3997 37.9055 40.5593 37.8341 40.7221L35.1427 39.9249C34.6698 39.7849 34.173 40.0621 34.0465 40.5421C33.9242 41.006 34.2203 41.4793 34.6803 41.6155L37.3365 42.4022C37.2765 42.7703 37.244 43.1473 37.244 43.5321L37.2445 52.7799L35.5177 52.0093L29.6213 31.8988V26.5047H31.2422C31.726 26.5047 32.1184 26.1123 32.1184 25.6284V22.8247C32.1184 22.3409 31.726 21.9485 31.2422 21.9485H30.1117L30.8429 15.7C30.8758 15.4181 30.7849 15.1294 30.5774 14.9359C30.2553 14.6355 29.7791 14.6221 29.4452 14.8758L27.9626 16.003L27.108 13.6095C27.0135 13.3451 26.8086 13.1269 26.5409 13.042C26.1229 12.9092 25.6877 13.1016 25.4951 13.4727L24.0192 16.3166L22.2035 14.8985C21.9758 14.7206 21.6751 14.6492 21.3982 14.732C20.9705 14.8599 20.718 15.2727 20.7761 15.6936L21.6413 21.9487H20.3776C19.8937 21.9487 19.5013 22.3411 19.5013 22.825V25.6289C19.5013 26.1127 19.8937 26.5051 20.3776 26.5051H21.9985V29.197C21.9985 31.0859 23.42 32.6481 25.2494 32.8726L26.7012 44.8315C26.7595 45.3119 27.1963 45.6541 27.6767 45.5957C28.1571 45.5374 28.4993 45.1007 28.4409 44.6203L27.0182 32.9013H28.0891L33.822 52.4544L29.9768 57.2713L28.9455 48.7775C28.8872 48.2971 28.4505 47.9548 27.9701 48.0132C27.4897 48.0715 27.1475 48.5083 27.2058 48.9887L28.4445 59.1908L26.0446 62.1971C25.7872 62.5196 25.7896 62.978 26.0504 63.2976L29.8843 67.9985V71.1242C29.8843 71.608 30.2767 72.0004 30.7606 72.0004H39.8073C39.8076 72.0004 39.8078 72.0004 39.808 72.0004C39.8084 72.0004 39.8087 72.0004 39.8091 72.0004H58.6235C58.9965 72.0004 59.3365 71.7632 59.4576 71.3936C59.5335 71.1625 59.5006 70.9094 59.3875 70.6941ZM44.254 38.2754C46.758 38.2754 48.8572 40.0356 49.383 42.3832C48.1023 41.0073 46.2775 40.1444 44.254 40.1444C42.2305 40.1444 40.4055 41.0073 39.1249 42.3832C39.6507 40.0354 41.7501 38.2754 44.254 38.2754ZM38.9972 51.1412C40.2828 52.599 42.1622 53.5211 44.254 53.5211C44.738 53.5211 45.1303 53.1287 45.1303 52.6449C45.1303 52.161 44.738 51.7686 44.254 51.7686C41.4631 51.7686 39.1742 49.5824 39.0076 46.8327C39.1743 44.083 41.4631 41.8967 44.254 41.8967C47.1514 41.8967 49.5085 44.2525 49.511 47.1493V54.1928H40.4101L38.9972 53.5622V51.1412ZM22.8085 17.5945L23.7721 18.3471C23.9773 18.5074 24.2435 18.568 24.4979 18.5127C24.7525 18.4571 24.9691 18.2914 25.0892 18.06L26.1242 16.0653L26.715 17.7196C26.8091 17.9827 27.0229 18.1853 27.2906 18.2649C27.5584 18.3444 27.848 18.2916 28.0707 18.1225L28.8662 17.5177L28.3477 21.9487H23.4107L22.8085 17.5945ZM21.2538 23.7013H30.3661V24.7527H28.7452H22.8748H21.2538V23.7013ZM23.7511 29.1971V26.5052H27.8691V31.149H25.7031C24.6266 31.1488 23.7511 30.2733 23.7511 29.1971ZM31.6368 67.9784L36.1036 62.0226C36.3938 61.6354 36.3154 61.0862 35.9283 60.7958C35.5411 60.5055 34.992 60.5839 34.7015 60.971L30.7317 66.2644L27.8553 62.7377L35.053 53.7212L38.8636 55.4217L37.4355 57.3259C37.1452 57.7131 37.2237 58.2623 37.6107 58.5527C37.7685 58.671 37.9529 58.728 38.1357 58.728C38.4022 58.728 38.6652 58.607 38.8374 58.3775L40.6615 55.9452H49.8821L39.3655 70.2478H31.6368V67.9784ZM41.5407 70.2478L51.6101 56.5534L56.0521 62.6608L52.6006 65.8124C52.2431 66.1387 52.2181 66.6929 52.5442 67.0504C52.7172 67.2396 52.954 67.3358 53.1916 67.3358C53.4026 67.3358 53.6142 67.2601 53.7822 67.1067L54.9554 66.0355L57.1723 70.2478H41.5407Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
      <Path
        d="M45.1303 46.1261L47.3877 46.655C47.4549 46.6708 47.5221 46.6783 47.5885 46.6783C47.986 46.6783 48.3461 46.4058 48.4409 46.0018C48.5511 45.5306 48.2587 45.0591 47.7876 44.9488L44.4541 44.1677C44.3226 44.1368 44.1857 44.1368 44.0543 44.1677L40.7207 44.9488C40.2495 45.0591 39.957 45.5306 40.0673 46.0018C40.1777 46.473 40.6489 46.7654 41.1205 46.655L43.378 46.1261V47.4376C43.378 47.9215 43.7703 48.3138 44.2543 48.3138C44.7383 48.3138 45.1305 47.9215 45.1305 47.4376L45.1303 46.1261Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
    </G>
    <Defs>
      <clipPath id="clip0_7702_51744">
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
