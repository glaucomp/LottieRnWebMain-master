import React from "react";
import Svg, { Path } from "react-native-svg-web";
import { colorSymbolNotSelected } from "../../global/Settings";

const lowerOpacityColour = colorSymbolNotSelected;

export const IconTypeSunRadefault = ({ lower_opacity }) => (
  <Svg
    width="78"
    height="84"
    viewBox="0 0 78 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M39 43.3281C39.7335 43.3281 40.3281 42.7335 40.3281 42C40.3281 41.2665 39.7335 40.6719 39 40.6719C38.2665 40.6719 37.6719 41.2665 37.6719 42C37.6719 42.7335 38.2665 43.3281 39 43.3281Z"
      fill={lower_opacity ? lowerOpacityColour : "black"}
    />
    <Path
      d="M52.2813 40.6719C50.9268 40.6719 50.2781 40.6719 49.4816 40.6719C48.3718 40.6719 47.3206 40.2202 46.5972 39.4318C44.8899 37.574 42.1857 35.3594 39.0001 35.3594C33.9489 35.3594 30.0905 41.0186 29.9287 41.2596C29.628 41.7074 29.6279 42.2925 29.9286 42.7403C30.0199 42.8763 32.0383 45.8459 35.0157 47.5126V52.625C35.0157 53.3584 35.6104 53.9531 36.3438 53.9531C37.0772 53.9531 37.6719 53.3584 37.6719 52.625V48.5101C38.1177 48.5953 38.5611 48.6406 39.0001 48.6406C39.439 48.6406 39.8826 48.5952 40.3282 48.5101V49.9688C40.3282 52.1657 42.1156 53.9531 44.3126 53.9531H46.9688C49.1658 53.9531 50.9532 52.1657 50.9532 49.9688C50.9532 49.2354 50.3585 48.6406 49.6251 48.6406C48.8917 48.6406 48.2969 49.2354 48.2969 49.9688C48.2969 50.7011 47.7011 51.2969 46.9688 51.2969H44.3126C43.5802 51.2969 42.9844 50.7011 42.9844 49.9688V47.5145C44.216 46.8279 45.4282 45.8404 46.598 44.5674C47.3206 43.7798 48.3717 43.3281 49.4816 43.3281H52.2813C53.0147 43.3281 53.6094 42.7334 53.6094 42C53.6094 41.2666 53.0147 40.6719 52.2813 40.6719ZM44.6415 42.7708C43.2009 44.3386 41.1211 45.9844 39.0001 45.9844C36.5898 45.9844 34.2012 43.8587 32.6903 41.9936C33.9394 40.4456 36.4426 38.0156 39.0001 38.0156C41.3388 38.0156 43.5385 40.0291 44.6409 41.2284C44.9011 41.5119 45.1855 41.7696 45.4901 42C45.1857 42.2299 44.9015 42.4877 44.6415 42.7708Z"
      fill={lower_opacity ? lowerOpacityColour : "black"}
    />
    <Path
      d="M72.1363 40.7557L60.9188 36.569C60.8491 36.2869 60.7738 36.0051 60.6927 35.7241L67.6487 26.8838C67.9846 26.4571 68.0268 25.8687 67.7552 25.3984C67.4838 24.9281 66.9525 24.6708 66.4157 24.7481L55.2747 26.3527C55.0698 26.1398 54.8605 25.9305 54.6473 25.7253L56.2519 14.5844C56.3294 14.047 56.0719 13.5164 55.6016 13.2449C55.1313 12.9734 54.5429 13.0154 54.1162 13.3514L45.2759 20.3075C44.995 20.2263 44.7131 20.151 44.431 20.0813L40.2443 8.86368C40.0504 8.34438 39.5544 8 39 8C38.4456 8 37.9496 8.34438 37.7557 8.86368L33.569 20.0812C33.2869 20.1509 33.0051 20.2263 32.7242 20.3073L23.8839 13.3513C23.4571 13.0154 22.869 12.9733 22.3986 13.2448C21.9283 13.5162 21.6708 14.0468 21.7482 14.5843L23.3528 25.7253C23.1399 25.9302 22.9306 26.1395 22.7254 26.3527L11.5844 24.7481C11.046 24.67 10.5164 24.928 10.2449 25.3984C9.9733 25.8687 10.0154 26.4571 10.3514 26.8838L17.3075 35.7242C17.2263 36.0051 17.151 36.2869 17.0813 36.569L5.86368 40.7557C5.34438 40.9496 5 41.4456 5 42C5 42.5544 5.34438 43.0504 5.86368 43.2443L17.0812 47.431C17.1509 47.7131 17.2263 47.9949 17.3073 48.2758L10.3513 57.1162C10.0154 57.5429 9.97316 58.1313 10.2448 58.6016C10.5193 59.0772 11.0539 59.329 11.5843 59.2519L22.7253 57.6473C22.9302 57.8602 23.1397 58.0695 23.3527 58.2747L21.7481 69.4157C21.6706 69.9532 21.9281 70.4838 22.3984 70.7552C22.8724 71.0288 23.4603 70.9821 23.8838 70.6487L32.7241 63.6927C33.005 63.7738 33.2869 63.8491 33.5689 63.9188L37.7555 75.1363C37.9495 75.6556 38.4455 76 38.9999 76C39.5542 76 40.0503 75.6556 40.2442 75.1363L44.4308 63.9188C44.7129 63.8491 44.9948 63.7737 45.2757 63.6927L54.1161 70.6487C54.5397 70.9822 55.1277 71.0287 55.6014 70.7552C56.0717 70.4838 56.3292 69.9532 56.2518 69.4157L54.6472 58.2747C54.8601 58.0698 55.0694 57.8605 55.2746 57.6473L66.4156 59.2519C66.9484 59.3291 67.4816 59.0752 67.7551 58.6016C68.0267 58.1313 67.9846 57.5429 67.6486 57.1162L60.6925 48.2759C60.7737 47.995 60.849 47.7131 60.9187 47.431L72.1362 43.2443C72.6555 43.0504 72.9999 42.5544 72.9999 42C72.9999 41.4456 72.6556 40.9496 72.1363 40.7557ZM19.0781 42C19.0781 31.0152 27.9743 22.0781 39 22.0781C49.9489 22.0781 58.9219 30.9461 58.9219 42C58.9219 53.2649 49.7064 61.9407 39 61.9296C28.0815 61.9183 19.0781 53.0906 19.0781 42ZM59.6215 32.7899C58.9852 31.3634 58.2042 30.0127 57.2834 28.747L63.5082 27.8506L59.6215 32.7899ZM52.2531 23.7165C50.9877 22.7958 49.6368 22.0148 48.2101 21.3785L53.1496 17.4918L52.2531 23.7165ZM39 13.1264L41.3973 19.5495C39.8076 19.383 38.1921 19.383 36.6029 19.5495L39 13.1264ZM29.7899 21.3785C28.3634 22.0148 27.0127 22.7958 25.747 23.7166L24.8506 17.4918L29.7899 21.3785ZM20.7165 28.7469C19.7958 30.0125 19.0148 31.3632 18.3785 32.79L14.4918 27.8504L20.7165 28.7469ZM16.548 39.6033C16.4644 40.3974 16.4219 41.1982 16.4219 42C16.4219 42.8019 16.4644 43.6026 16.548 44.3967L10.1264 42L16.548 39.6033ZM18.3785 51.2101C19.0148 52.6366 19.7958 53.9873 20.7166 55.253L14.4918 56.1494L18.3785 51.2101ZM25.7469 60.2835C27.0123 61.2042 28.3632 61.9852 29.7899 62.6215L24.8504 66.5082L25.7469 60.2835ZM39 70.8736L36.6033 64.4518C37.3974 64.5356 38.1982 64.5781 39 64.5781C39.8019 64.5781 40.6026 64.5356 41.3967 64.452L39 70.8736ZM48.2101 62.6215C49.6366 61.9852 50.9873 61.2042 52.253 60.2834L53.1494 66.5082L48.2101 62.6215ZM57.2835 55.2531C58.2042 53.9875 58.9852 52.6368 59.6215 51.21L63.5082 56.1496L57.2835 55.2531ZM61.452 44.3967C61.5356 43.6026 61.5781 42.8018 61.5781 42C61.5781 41.1982 61.5356 40.3974 61.452 39.6033L67.8736 42L61.452 44.3967Z"
      fill={lower_opacity ? lowerOpacityColour : "black"}
    />
    <Path
      d="M31.9609 34.9609C32.6944 34.9609 33.2891 34.3663 33.2891 33.6328C33.2891 32.8993 32.6944 32.3047 31.9609 32.3047C31.2274 32.3047 30.6328 32.8993 30.6328 33.6328C30.6328 34.3663 31.2274 34.9609 31.9609 34.9609Z"
      fill={lower_opacity ? lowerOpacityColour : "black"}
    />
    <Path
      d="M28.4525 36.7C27.8858 36.2345 27.0488 36.3171 26.5835 36.8841C26.0156 37.5759 25.6501 38.1038 25.5192 38.2986C25.1104 38.9075 25.2727 39.7327 25.8817 40.1415C26.4894 40.5496 27.3151 40.389 27.7246 39.779C27.8339 39.6161 28.1419 39.1722 28.6365 38.5692C29.102 38.0022 29.0196 37.1653 28.4525 36.7Z"
      fill={lower_opacity ? lowerOpacityColour : "black"}
    />
    <Path
      d="M52.2811 35.3594H50.1055C46.7499 31.8811 42.9208 30.0469 38.9999 30.0469C38.4534 30.0469 37.8999 30.0845 37.355 30.1588C36.6282 30.2579 36.1193 30.9273 36.2184 31.6542C36.3175 32.3812 36.9883 32.8911 37.7137 32.7908C38.14 32.7326 38.5727 32.7033 38.9999 32.7033C42.3158 32.7033 45.6195 34.3917 48.5539 37.5861C48.8054 37.86 49.16 38.0158 49.5319 38.0158H52.2811C53.0145 38.0158 53.6093 37.421 53.6093 36.6876C53.6093 35.9542 53.0145 35.3594 52.2811 35.3594Z"
      fill={lower_opacity ? lowerOpacityColour : "black"}
    />
  </Svg>
);
