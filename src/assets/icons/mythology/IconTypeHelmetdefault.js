import React from "react";
import Svg, { Path } from "react-native-svg-web";
import { colorSymbolNotSelected } from "../../../global/Settings";

const lowerOpacityColour = colorSymbolNotSelected;

export const IconTypeHelmetdefault = ({ lower_opacity }) => (
  <Svg
    width="78"
    height="84"
    viewBox="0 0 78 84"
    fill={lower_opacity ? lowerOpacityColour : "black"}
  >
    <Path
      d="M49.8718 33.5215C48.9967 32.1446 47.578 31.3142 45.8768 31.1833C44.4793 31.0756 43.1468 31.5376 42.1251 32.4837C41.0919 33.4406 40.498 34.7791 40.4947 36.1578C40.4743 37.0326 40.7999 37.8597 41.4124 38.4879C41.9257 39.0383 42.8716 39.4679 43.722 39.462C45.5317 39.462 46.9493 38.1017 46.9493 36.3651C46.9493 35.8797 46.5559 35.4862 46.0704 35.4862C45.5849 35.4862 45.1915 35.8797 45.1915 36.3651C45.1915 37.141 44.5736 37.7042 43.7206 37.7042C43.4547 37.701 43.0374 37.596 42.6709 37.2609C42.484 37.0682 42.2565 36.6638 42.2525 36.1694C42.2525 35.2747 42.6413 34.4014 43.3195 33.7736C43.9776 33.164 44.8378 32.8663 45.7419 32.9362C46.8775 33.0235 47.8174 33.5663 48.3883 34.4646C49.0527 35.51 49.1469 36.9333 48.6404 38.2721C48.2302 39.3843 47.2348 40.4983 46.1104 41.2052C44.4252 42.1698 42.28 42.2031 40.3719 41.2944C38.6925 40.4945 37.5378 39.0865 37.2831 37.5281C37.205 37.049 36.7545 36.7242 36.2741 36.8024C35.795 36.8807 35.4703 37.3325 35.5486 37.8115C35.9019 40.057 37.7132 42.1633 40.1255 43.1025C36.3113 43.0414 32.792 40.9017 30.3511 38.9323C29.4858 38.234 28.366 37.965 27.2786 38.1945C26.1922 38.4238 25.2772 39.1214 24.7684 40.1087C24.2241 41.1644 24.2163 42.3796 24.747 43.4428C25.2756 44.5015 26.2464 45.2224 27.4107 45.4208C28.9438 45.682 30.959 45.8668 33.1962 45.8668C35.4459 45.8668 37.9199 45.6799 40.353 45.1962C43.0902 44.652 45.3254 43.8132 47.0112 42.713C48.5163 41.7534 49.748 40.3415 50.2842 38.8942C50.986 37.0401 50.8318 35.0318 49.8718 33.5215ZM27.7062 43.6876C27.1006 43.5845 26.5954 43.2089 26.32 42.6574C26.0424 42.1013 26.0464 41.4658 26.3309 40.9136C26.5968 40.3981 27.0745 40.0337 27.6417 39.9141C27.7746 39.886 27.9083 39.8722 28.0412 39.8722C28.4762 39.8722 28.9009 40.0202 29.2474 40.2998C30.9596 41.6813 33.1646 43.1365 35.659 44.0223C32.9165 44.1989 30.0704 44.0906 27.7062 43.6876Z"
      fill={lower_opacity ? lowerOpacityColour : "black"}
    />
    <Path
      d="M67.863 23.7735C65.0459 21.2173 60.5134 17.7031 54.9184 15.4777C50.0967 13.5601 45.1349 12.386 40.569 12.0827C32.5963 11.5532 25.8474 13.5693 20.506 18.0756C20.135 18.3886 20.088 18.9431 20.401 19.3141C20.7141 19.6851 21.2685 19.7322 21.6394 19.4191C22.6143 18.5967 23.6194 17.8811 24.6464 17.2596L28.6272 25.4306C26.3915 26.6216 24.379 28.156 22.6493 29.9708L16.6912 24.7637C17.3039 23.9291 17.9986 23.0779 18.7878 22.209C19.1142 21.8497 19.0875 21.2937 18.7282 20.9674C18.3691 20.6413 17.8131 20.6676 17.4866 21.027C13.797 25.089 11.6765 29.1714 11.0037 33.5076C10.4227 37.2516 11.0076 40.5205 11.5237 43.4045C11.7994 44.9453 12.0598 46.4007 12.0811 47.6811C12.13 50.6087 11.9721 53.2082 11.0438 56.3794C10.8563 57.02 10.9907 57.7152 11.4033 58.2391C11.7944 58.7356 12.3693 59.0147 12.9932 59.0146C14.642 58.9846 16.208 58.2808 17.2614 57.0358C18.1821 55.9665 18.3453 54.6658 18.5031 53.4079C18.6555 52.0671 18.8826 50.68 20.0816 49.9019C20.1595 50.4468 20.2572 50.9893 20.3796 51.5274C20.5403 52.2343 20.9729 52.8283 21.5976 53.1999C21.8692 53.3616 22.1669 53.4704 22.4737 53.5264C23.7499 55.4754 24.045 58.3501 22.3748 60.2723L21.3323 61.5507C20.8767 62.1095 20.7478 62.8489 20.9873 63.5288C21.2268 64.2087 21.7907 64.7041 22.4958 64.8539C23.5301 65.0656 24.898 65.4033 26.0188 65.5204C26.0508 65.5239 26.0827 65.5255 26.1141 65.5255C26.5572 65.5255 26.9383 65.1914 26.9869 64.7409C27.0389 64.2583 26.69 63.8248 26.2074 63.7728C25.5195 63.7248 23.5516 63.2791 22.8612 63.1347C22.7208 63.1048 22.6655 63.003 22.645 62.9449C22.6246 62.8868 22.6037 62.7727 22.6944 62.6615C22.971 62.3181 23.6294 61.5238 23.8604 61.2255C27.4073 61.9813 31.2735 61.5899 34.5853 59.9855C34.773 59.8959 34.9929 59.9032 35.1737 60.0051L38.6565 61.966C42.7975 64.2977 46.9414 65.979 51.3252 67.1064C52.8595 67.5009 55.4258 68.0959 56.6217 68.3707V69.9462C56.6224 70.0686 56.5542 70.1424 56.5134 70.1757C56.4726 70.2088 56.3864 70.2606 56.2667 70.2352L52.0046 69.3292C47.554 68.3833 43.2869 66.7717 39.3218 64.5392L35.1519 62.1913C34.9023 62.0507 34.5998 62.0407 34.3416 62.1642C33.0607 62.8222 31.5011 63.412 29.9819 63.6597C29.5033 63.7406 29.181 64.1942 29.2617 64.6728C29.3426 65.1514 29.7961 65.4741 30.2749 65.393C31.7003 65.1522 33.0844 64.7138 34.3885 64.0903L34.6877 63.9472L38.4596 66.0709C42.5801 68.3909 47.0144 70.0657 51.6393 71.0487L55.9015 71.9547C56.0447 71.9851 56.1886 72.0001 56.3315 72C56.7983 72 57.2531 71.8405 57.6235 71.5388C58.1075 71.1448 58.383 70.5609 58.3797 69.9417V64.2615C58.3797 64.0034 58.2663 63.7585 58.0696 63.5915L52.7398 59.0663C51.4206 57.937 50.6639 56.2932 50.6639 54.5568C50.6639 54.0714 50.2705 53.6779 49.785 53.6779H43.1549C43.544 52.2104 44.8837 51.1257 46.472 51.1257H50.8096C52.0234 51.1257 53.011 52.1133 53.011 53.3272C53.011 54.9852 53.7414 56.5448 55.0151 57.6062L56.8455 59.1316C57.1079 59.3504 57.4733 59.397 57.7821 59.2518C58.0912 59.1065 58.2879 58.7954 58.2871 58.4539L58.251 45.5136C58.2339 42.2702 57.3672 39.0816 55.7467 36.2774C55.8831 34.9478 55.5062 33.6274 54.697 32.5733C58.8405 28.285 64.9173 27.4022 66.6057 27.3384C67.4321 27.2893 68.1437 26.7531 68.4188 25.9725C68.6936 25.1922 68.4754 24.3292 67.863 23.7735ZM51.6573 16.1499L47.9922 24.09C45.4676 23.1638 42.419 22.6313 39.723 22.6493L39.9673 13.7804C44.2888 14.0149 48.3609 15.0324 51.6573 16.1499ZM38.2102 13.7302L37.9627 22.7191C35.3031 22.9217 32.6835 23.5715 30.2082 24.6627L26.1858 16.4064C30.0754 14.4395 34.2165 13.7201 38.2102 13.7302ZM21.4846 31.2874C20.2406 32.8034 19.1774 34.4807 18.3246 36.2909L12.6173 34.8148C12.8746 32.1824 13.7203 29.3252 15.691 26.2241L21.4846 31.2874ZM16.0518 45.6758L13.7385 46.1931C13.6292 45.202 13.4461 44.1688 13.2539 43.0949C12.8991 41.1119 12.5132 38.9543 12.5262 36.6068L17.6276 37.9263C16.6862 40.3927 16.154 43.0817 16.0518 45.6758ZM16.759 53.189C16.6221 54.2795 16.504 55.2213 15.9293 55.8888C15.4163 56.4847 14.6209 57.1787 13.01 57.2564C12.8977 57.2622 12.8243 57.2022 12.7841 57.1514C12.7546 57.1139 12.6902 57.0117 12.7308 56.8732C13.687 53.6069 13.8766 50.9303 13.8424 47.9711L16.0512 47.4772C16.1198 49.2114 16.3925 50.8648 16.875 52.3364C16.83 52.6243 16.7941 52.91 16.759 53.189ZM56.5241 56.5752L56.1405 56.2554C55.2689 55.5291 54.7689 54.4615 54.7689 53.3267C54.7689 51.1437 52.9928 49.3675 50.8097 49.3675H46.4721C43.6109 49.3675 41.2832 51.6953 41.2832 54.5563C41.2832 55.0417 41.6766 55.4352 42.1621 55.4352H48.9564C49.1763 57.3549 50.1117 59.1299 51.5996 60.4035L56.622 64.6677V66.5666C55.3298 66.2685 53.1288 65.7547 51.7632 65.4037C47.5299 64.315 43.5249 62.6895 39.5193 60.4341L36.0364 58.4731C35.357 58.0905 34.5313 58.0628 33.8275 58.3993C31.1197 59.7071 27.8358 60.1744 24.798 59.603C25.5994 57.6733 25.4819 55.24 24.3173 53.2898L41.1954 48.5584C43.2583 47.9781 45.7069 47.1024 47.7869 46.2763C48.2315 46.0814 48.434 45.5631 48.2391 45.1185C48.0443 44.6739 47.526 44.4714 47.0813 44.6663C45.1896 45.4123 42.787 46.2848 40.7209 46.8658L23.1882 51.781C22.9524 51.847 22.7069 51.8144 22.4965 51.6893C22.2896 51.5661 22.1466 51.3701 22.0936 51.1373C21.3936 48.0608 21.4897 44.834 22.371 41.8059C22.5066 41.3399 22.2388 40.852 21.7728 40.7164C21.3067 40.5807 20.819 40.8487 20.6833 41.3147C20.0499 43.4906 19.7897 45.7601 19.9007 48.0153C19.5514 48.1669 19.2427 48.3365 18.9661 48.5337C18.5715 48.8147 18.2535 49.1219 17.9948 49.4468C17.4452 45.8625 17.9798 41.5963 19.517 37.9322C24.0266 27.1819 35.8006 21.8681 46.9048 25.5724C49.8941 26.5696 52.613 28.1243 54.8295 30.0926C54.2815 30.5524 53.7916 31.0052 53.4354 31.3464C51.5511 29.8003 49.425 28.6159 47.1033 27.8235C42.5422 26.1852 37.2931 26.2428 32.7401 28.068C28.2701 29.84 24.5617 33.1415 22.2975 37.3644C22.0682 37.7921 22.2291 38.3249 22.6568 38.5543C23.0847 38.7838 23.6174 38.6228 23.8467 38.195C28.167 30.1371 37.5911 26.4348 46.2549 29.3913C48.5826 30.1423 50.9594 31.468 52.8424 33.1476C53.8216 34.0124 54.2307 35.3375 53.9096 36.6056C53.3201 38.9348 52.0619 41.0129 50.2711 42.6154C49.9093 42.9391 49.8784 43.4947 50.2022 43.8564C50.3757 44.0503 50.6161 44.1493 50.8575 44.1493C51.0661 44.1493 51.2755 44.0754 51.4432 43.9253C53.0384 42.4979 54.2628 40.7402 55.0472 38.7751C55.9839 40.894 56.4812 43.1921 56.4935 45.5205L56.5241 56.5752ZM66.7609 25.3881C66.7366 25.4566 66.6708 25.5733 66.5014 25.5834C63.0956 25.7871 59.1603 27.0619 56.2517 29.0066C54.3542 27.2684 52.1019 25.8204 49.6282 24.7398L53.319 16.7442C58.6748 18.6312 63.9515 22.5305 66.6817 25.0754C66.8003 25.1829 66.7902 25.3047 66.7609 25.3881Z"
      fill={lower_opacity ? lowerOpacityColour : "black"}
    />
  </Svg>
);
