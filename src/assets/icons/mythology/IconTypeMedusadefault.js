import React from "react";
import Svg, { Defs, G, Path, Rect } from "react-native-svg-web";
import { colorSymbolNotSelected } from "../../../global/Settings";

const lowerOpacityColour = colorSymbolNotSelected;

export const IconTypeMedusadefault = ({ lower_opacity }) => (
  <Svg
    width="78"
    height="84"
    viewBox="0 0 78 84"
    fill={lower_opacity ? lowerOpacityColour : "black"}
  >
    <G clipPath="url(#clip0_8949_52785)">
      <Path
        d="M60.4708 21.8739C60.6356 22.1881 60.8473 22.4813 61.103 22.7431C61.7986 23.4556 62.7383 23.8415 63.7586 23.8275C64.7456 23.8149 65.6775 23.4286 66.3826 22.7401C68.6823 20.495 68.8054 16.8583 66.6627 14.4611C65.6142 13.288 64.1523 12.5947 62.5462 12.5088C60.9204 12.4219 59.3043 12.9908 58.1095 14.0694L53.6935 18.0565C51.2477 20.2646 47.4618 20.0715 45.2536 17.6256C45.0152 17.3616 43.9488 15.9955 43.6747 15.6072C42.906 13.7835 41.1002 12.5 39.0001 12.5C36.9 12.5 35.0942 13.7835 34.3255 15.6072C34.0512 15.9954 32.9849 17.3616 32.7466 17.6256C30.5386 20.0712 26.7526 20.2647 24.3067 18.0566L19.8907 14.0695C18.6958 12.9907 17.0793 12.4221 15.4539 12.5088C13.8479 12.5947 12.3859 13.2881 11.3373 14.4612C9.19473 16.8583 9.3178 20.495 11.6174 22.74C12.3225 23.4286 13.2544 23.8147 14.2415 23.8275C14.2584 23.8278 14.2751 23.8279 14.2919 23.8279C15.2894 23.8279 16.213 23.4438 16.8971 22.7431C17.1529 22.4813 17.3646 22.1881 17.5293 21.8739L19.3643 23.5306C20.1776 24.2649 21.0699 24.8884 22.0254 25.3981L20.9728 27.0029C20.7338 26.7407 20.4549 26.5107 20.1411 26.3219C18.3992 25.2748 16.1082 25.8756 15.0341 27.6612C13.3776 30.4155 14.1791 33.9648 16.8586 35.7414C17.8261 36.3829 18.9454 36.7149 20.0988 36.7149C20.5084 36.7149 20.9222 36.6731 21.3351 36.5882C22.3146 36.3873 23.2279 35.9466 23.9917 35.325C23.9469 35.7697 23.9234 36.2183 23.9234 36.6698V39.142C23.5797 39.0537 23.2193 39.0145 22.8546 39.0288C20.8236 39.1081 19.2373 40.867 19.3185 42.9495C19.444 46.161 22.0608 48.6894 25.2758 48.7054C25.2857 48.7054 25.2955 48.7055 25.3054 48.7055C26.8678 48.7054 28.3505 48.0856 29.4835 46.9584C29.7544 46.6888 29.9971 46.3946 30.2115 46.0823C31.1683 47.4436 32.4195 48.55 33.857 49.3319C33.5736 51.3196 31.861 52.8531 29.7962 52.8531H24.5527C18.8199 52.8531 14.1559 57.5171 14.1559 63.2499V70.3477C14.1559 70.984 14.6719 71.5 15.3083 71.5C15.9446 71.5 16.4606 70.984 16.4606 70.3477V63.25C16.4606 58.788 20.0907 55.1579 24.5527 55.1579H29.7962C32.8231 55.1579 35.3646 53.0475 36.0312 50.2213C36.9804 50.4925 37.977 50.6375 38.9996 50.6375C40.0235 50.6375 41.02 50.4932 41.9685 50.223C42.6359 53.0483 45.177 55.1579 48.2032 55.1579H53.4467C57.9087 55.1579 61.5388 58.788 61.5388 63.25V70.3477C61.5388 70.984 62.0548 71.5 62.6911 71.5C63.3275 71.5 63.8435 70.984 63.8435 70.3477V63.25C63.8435 57.5172 59.1795 52.8532 53.4467 52.8532H48.2032C46.1397 52.8532 44.4279 51.3215 44.143 49.3357C45.5817 48.5542 46.8326 47.4472 47.7893 46.084C48.0035 46.3956 48.2457 46.6893 48.5163 46.9585C49.6493 48.0859 51.1319 48.7056 52.6943 48.7056C52.7041 48.7056 52.7141 48.7055 52.7239 48.7055C55.939 48.6894 58.5557 46.1611 58.6812 42.9495C58.7624 40.8671 57.1761 39.1082 55.1452 39.0289C54.7793 39.0145 54.4201 39.0538 54.0763 39.1422V36.6699C54.0763 36.2185 54.0528 35.7699 54.008 35.3252C54.772 35.9467 55.6852 36.3874 56.6646 36.5884C57.0776 36.6731 57.4914 36.715 57.901 36.715C59.0542 36.715 60.1736 36.383 61.141 35.7416C63.8207 33.9649 64.6221 30.4156 62.9656 27.6613C61.8915 25.8757 59.6008 25.2747 57.8584 26.3221C57.5448 26.5108 57.2659 26.7408 57.0269 27.0031L55.9742 25.3982C56.9298 24.8885 57.8221 24.265 58.6355 23.5306L60.4708 21.8739ZM40.4981 26.8915C40.4981 27.7175 39.8261 28.3896 39.0001 28.3896C38.1741 28.3896 37.5021 27.7175 37.5021 26.8915V23.2586C37.9734 23.4531 38.4758 23.5625 39.0001 23.5625C39.5244 23.5625 40.0268 23.4531 40.4981 23.2586V26.8915ZM39.0001 14.8047C40.525 14.8047 41.7657 16.0454 41.7657 17.5703C41.7657 19.1805 40.4245 21.2578 39.0001 21.2578C37.5757 21.2578 36.2345 19.1805 36.2345 17.5703C36.2345 16.0454 37.4752 14.8047 39.0001 14.8047ZM17.5052 18.747C17.1322 18.41 16.5841 18.354 16.1507 18.6078C15.7171 18.8616 15.498 19.3672 15.6093 19.8571C15.7137 20.3176 15.5787 20.7946 15.2483 21.1329C15.0021 21.385 14.6627 21.5232 14.2909 21.5232C14.2843 21.5232 14.2779 21.5231 14.2714 21.5231C13.884 21.518 13.5035 21.3606 13.2274 21.0911C11.8126 19.7098 11.737 17.4722 13.0555 15.997C13.6923 15.2846 14.5879 14.8632 15.5771 14.8102C16.5961 14.7547 17.6033 15.1095 18.3461 15.78L22.7621 19.7673C23.623 20.5445 24.6041 21.106 25.6384 21.4572C24.8253 22.0495 24.0747 22.7383 23.4029 23.5158C22.5015 23.0693 21.6644 22.5022 20.9086 21.8199L17.5052 18.747ZM20.872 34.3307C19.9021 34.5298 18.9288 34.3488 18.1323 33.8205C16.4834 32.7274 15.9901 30.5435 17.0092 28.849C17.4213 28.1639 18.3117 27.9111 18.9536 28.2969C19.359 28.5406 19.6102 28.9679 19.6257 29.44C19.6422 29.9421 19.9822 30.3756 20.4658 30.5116C20.9493 30.6469 21.4655 30.4542 21.741 30.0341L24.2559 26.1996C26.647 22.5544 30.9072 20.6781 35.1974 21.345V23.4809C34.4784 23.5937 33.7738 23.7647 33.0893 23.9909C30.4483 24.1228 28.0157 25.5101 26.5685 27.7165L23.3053 32.6915C22.7563 33.5285 21.8695 34.126 20.872 34.3307ZM25.3053 46.4009C25.2993 46.4009 25.2933 46.4008 25.2876 46.4008C23.3091 46.3909 21.6988 44.8355 21.6217 42.8598C21.5905 42.0607 22.1965 41.361 22.945 41.3318C23.4179 41.3138 23.862 41.5327 24.1337 41.919C24.4228 42.3297 24.9447 42.5056 25.4239 42.3541C25.9028 42.2025 26.2282 41.7579 26.2282 41.2556V36.6699C26.2283 31.362 30.0841 26.8058 35.1972 25.8225V26.8915C35.1972 27.4911 35.3373 28.0584 35.5855 28.5633C31.8269 29.3453 28.9938 32.6828 28.9938 36.6701V42.6196C28.9938 43.6207 28.5798 44.6067 27.8581 45.325C27.1602 46.0191 26.2544 46.4009 25.3053 46.4009ZM39 48.3329C35.6282 48.3329 32.6078 46.3498 31.2619 43.269C31.2856 43.0536 31.2986 42.8368 31.2986 42.6195V36.6699C31.2986 33.3749 33.9793 30.6944 37.2743 30.6944H40.7257C44.0209 30.6944 46.7014 33.3751 46.7014 36.6699V42.6195C46.7014 42.8371 46.7146 43.0538 46.7382 43.2693C45.3928 46.3527 42.381 48.3329 39 48.3329ZM55.0554 41.3318C55.8037 41.361 56.4097 42.0607 56.3785 42.8596C56.3013 44.8355 54.691 46.391 52.7126 46.4008C52.7067 46.4008 52.7008 46.4009 52.6949 46.4009C51.7461 46.4009 50.8399 46.0191 50.1421 45.3247C49.4203 44.6066 49.0064 43.6204 49.0064 42.6194V36.6698C49.0064 32.6826 46.1734 29.3452 42.4147 28.5631C42.6629 28.0583 42.803 27.4908 42.803 26.8913V25.8222C47.9161 26.8057 51.7719 31.3618 51.772 36.6697V41.2554C51.772 41.7577 52.0974 42.2022 52.5763 42.3539C53.0554 42.5054 53.5774 42.3295 53.8665 41.9188C54.1383 41.5326 54.5832 41.3146 55.0554 41.3318ZM57.5345 30.5117C58.0182 30.3757 58.3581 29.9423 58.3746 29.4401C58.3901 28.968 58.6413 28.5407 59.0465 28.2971C59.6881 27.9114 60.5789 28.1639 60.9911 28.8491C62.0102 30.5436 61.5168 32.7274 59.8679 33.8208C59.0715 34.3488 58.0986 34.5299 57.1283 34.3308C56.1308 34.1262 55.2439 33.5287 54.6949 32.6916L51.4318 27.7166C49.9846 25.5102 47.552 24.1228 44.911 23.9911C44.2266 23.7649 43.5219 23.5938 42.803 23.481V21.345C47.0923 20.6776 51.3533 22.5545 53.7443 26.1998L56.2593 30.0342C56.5349 30.4543 57.0506 30.6473 57.5345 30.5117ZM54.5971 23.5158C53.9253 22.7383 53.1746 22.0496 52.3615 21.4572C53.396 21.106 54.3771 20.5445 55.238 19.7671L59.654 15.7799C60.3969 15.1093 61.4056 14.7539 62.423 14.8101C63.4122 14.8631 64.3076 15.2845 64.9444 15.9969C66.2629 17.4721 66.1875 19.7096 64.7726 21.0911C64.4966 21.3605 64.1162 21.5179 63.7287 21.523C63.3502 21.5258 63.0024 21.3893 62.7517 21.1328C62.4214 20.7943 62.2864 20.3175 62.3908 19.857C62.502 19.367 62.2829 18.8615 61.8493 18.6077C61.4158 18.3538 60.8676 18.4099 60.4949 18.7469L57.0913 21.8197C56.3356 22.5022 55.4984 23.0693 54.5971 23.5158Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
      <Path
        d="M39.656 42.2477C39.2943 42.6092 38.7058 42.6092 38.3441 42.2477C37.8942 41.7976 37.1644 41.7977 36.7144 42.2478C36.2644 42.6978 36.2644 43.4274 36.7145 43.8774C37.3446 44.5075 38.1723 44.8225 39 44.8225C39.8277 44.8225 40.6553 44.5075 41.2854 43.8774C41.7355 43.4276 41.7355 42.6979 41.2856 42.2478C40.8358 41.7978 40.106 41.7978 39.656 42.2477Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
      <Path
        d="M47.5421 60.668C43.8583 60.668 40.6492 62.737 39.0139 65.7737C38.318 64.4764 37.3279 63.3351 36.0976 62.4586C35.579 62.0894 34.8596 62.2105 34.4904 62.7287C34.1212 63.2471 34.2422 63.9667 34.7605 64.3359C36.7028 65.7194 37.8625 67.9668 37.8625 70.3477C37.8625 70.984 38.3785 71.5 39.0149 71.5C39.6512 71.5 40.1672 70.984 40.1672 70.3477C40.1672 66.281 43.4756 62.9727 47.5422 62.9727C51.6088 62.9727 54.9172 66.281 54.9172 70.3477C54.9172 70.984 55.4332 71.5 56.0696 71.5C56.7059 71.5 57.2219 70.984 57.2219 70.3477C57.2218 65.0103 52.8794 60.668 47.5421 60.668Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
      <Path
        d="M24.8778 62.4578C22.3292 64.2728 20.8076 67.2221 20.8076 70.3472C20.8076 70.9836 21.3236 71.4996 21.96 71.4996C22.5963 71.4996 23.1123 70.9836 23.1123 70.3472C23.1123 67.966 24.272 65.7185 26.2148 64.3351C26.7332 63.966 26.8542 63.2465 26.485 62.7281C26.1159 62.21 25.3964 62.0886 24.8778 62.4578Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
      <Path
        d="M30.4878 60.668C30.1836 60.668 29.8874 60.7912 29.6731 61.0056C29.4576 61.2199 29.3354 61.5172 29.3354 61.8203C29.3354 62.1234 29.4576 62.4207 29.6731 62.6349C29.8864 62.8492 30.1837 62.9727 30.4878 62.9727C30.7909 62.9727 31.0882 62.8494 31.3025 62.6349C31.5167 62.4207 31.6401 62.1234 31.6401 61.8203C31.6401 61.5172 31.5168 61.2199 31.3025 61.0056C31.087 60.7912 30.7909 60.668 30.4878 60.668Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
    </G>
    <Defs>
      <clipPath id="clip0_8949_52785">
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