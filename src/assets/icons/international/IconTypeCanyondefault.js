import React from "react";
import Svg, { Path } from "react-native-svg-web";
import { colorSymbolNotSelected } from "../../../global/Settings";

const lowerOpacityColour = colorSymbolNotSelected;

export const IconTypeCanyondefault = ({ lower_opacity }) => (
  <Svg
    width="78"
    height="84"
    viewBox="0 0 78 84"
    fill={lower_opacity ? lowerOpacityColour : "black"}
  >
    <Path
      d="M34.8552 39.9969V34.4502C34.8552 33.9729 34.4684 33.5859 33.991 33.5859C33.5136 33.5859 33.1267 33.9729 33.1267 34.4502V39.9969C33.1267 40.4742 33.5136 40.8611 33.991 40.8611C34.4684 40.8611 34.8552 40.4742 34.8552 39.9969Z"
      fill={lower_opacity ? lowerOpacityColour : "black"}
    />
    <Path
      d="M23.6774 48.9275V43.0967C23.6774 42.6194 23.2905 42.2324 22.8131 42.2324C22.3357 42.2324 21.9489 42.6194 21.9489 43.0967V48.9275C21.9489 49.4048 22.3357 49.7918 22.8131 49.7918C23.2905 49.7918 23.6774 49.4048 23.6774 48.9275Z"
      fill={lower_opacity ? lowerOpacityColour : "black"}
    />
    <Path
      d="M38.9319 52.5272V50.208C38.9319 49.7307 38.545 49.3438 38.0676 49.3438C37.5902 49.3438 37.2034 49.7307 37.2034 50.208V52.5272C37.2034 53.0045 37.5902 53.3915 38.0676 53.3915C38.545 53.3915 38.9319 53.0045 38.9319 52.5272Z"
      fill={lower_opacity ? lowerOpacityColour : "black"}
    />
    <Path
      d="M68.0998 63.1647C60.2496 63.4897 53.8013 61.8002 46.9762 60.0114C44.6985 59.4145 42.383 58.8087 39.9643 58.2624C43.5811 56.6319 47.1099 56.8237 51.4015 57.0574C56.0659 57.3116 61.3526 57.5996 68.3579 55.7332C68.8192 55.6104 69.0935 55.1369 68.9705 54.6756C68.8478 54.2144 68.3743 53.9402 67.9129 54.063C67.5575 54.1578 67.2074 54.2453 66.8608 54.3289C66.7041 51.5916 64.9356 49.2804 62.4922 48.3293L60.8545 40.4698C60.757 40.0026 60.2996 39.7027 59.832 39.8001C59.3647 39.8975 59.0649 40.3552 59.1623 40.8225L60.6356 47.8931C60.43 47.8744 60.2221 47.8635 60.0117 47.8635H49.2126C48.6947 47.8635 48.1888 47.8114 47.6989 47.714V29.3698C47.6989 28.6414 48.2916 28.0488 49.02 28.0488H51.6803V34.2208C51.6803 34.6981 52.0671 35.0851 52.5445 35.0851C53.0219 35.0851 53.4088 34.6981 53.4088 34.2208V28.0488H55.1675C56.1843 28.0488 56.5684 28.3992 56.8106 29.5463L58.3393 36.8797C58.4366 37.347 58.8948 37.6468 59.3616 37.5495C59.8289 37.4521 60.1287 36.9943 60.0314 36.527L58.5022 29.1913C58.3523 28.4813 57.8962 26.3203 55.1676 26.3203H49.9561V18.4563C49.9561 16.6 48.4461 15.0898 46.5898 15.0898H40.7755C38.9193 15.0898 37.409 16.6 37.409 18.4563V19.3158C37.0172 19.1973 36.6016 19.1339 36.1697 19.1339H30.9694C28.5765 19.1339 26.6297 21.0792 26.6297 23.4704V25.9823C25.9034 25.4339 24.9997 25.1084 24.0216 25.1084H22.212C20.0233 25.1084 18.2836 26.7964 17.8829 29.3101L16.7494 36.4868C16.6749 36.9582 16.9966 37.4008 17.4682 37.4753C17.9403 37.55 18.3822 37.2279 18.4567 36.7564L19.59 29.5811C19.7918 28.3152 20.5997 26.8369 22.212 26.8369H24.0216C25.4596 26.8369 26.6297 28.0069 26.6297 29.445V41.5051C26.6297 41.9824 27.0166 42.3693 27.494 42.3693C27.9714 42.3693 28.3582 41.9824 28.3582 41.5051V29.4451V23.4704C28.3582 22.0323 29.5296 20.8624 30.9694 20.8624H31.4771V28.7296C31.4771 29.2069 31.864 29.5938 32.3414 29.5938C32.8188 29.5938 33.2056 29.2069 33.2056 28.7296V20.8624H36.1697C37.5717 20.8624 38.6935 22.0046 38.7793 23.5201L39.7349 40.139C39.749 45.3534 43.9953 49.5918 49.2128 49.5918H60.0118C62.8356 49.5918 65.1337 51.8842 65.1443 54.7057C59.7303 55.7787 55.3895 55.5437 51.4955 55.3315C46.4312 55.0555 42.0427 54.8186 37.3397 57.705C35.406 57.3225 33.3966 56.9902 31.2778 56.7414C31.1704 56.7288 31.0626 56.7186 30.9551 56.7065V48.3323C30.9551 47.855 30.5683 47.4681 30.0909 47.4681C29.6135 47.4681 29.2266 47.855 29.2266 48.3323V56.534C24.6973 56.1382 20.0989 56.1848 15.3112 56.677L17.8231 40.781C17.8975 40.3095 17.5758 39.8669 17.1044 39.7924C16.6327 39.7185 16.1902 40.0398 16.1158 40.5112L13.5295 56.8778C12.6041 56.9931 11.6716 57.1238 10.7302 57.2717C10.2587 57.3458 9.93651 57.7881 10.0106 58.2596C10.0848 58.7313 10.5277 59.0536 10.9985 58.9792C26.7664 56.5014 36.8176 59.1358 46.538 61.6834C52.9006 63.351 58.9399 64.9339 66.1343 64.9338C66.8027 64.9338 67.4816 64.9201 68.1714 64.8917C68.6483 64.872 69.0189 64.4693 68.9991 63.9924C68.9791 63.5154 68.5787 63.1452 68.0998 63.1647ZM41.4634 40.1136C41.4634 40.0971 41.4629 40.0806 41.4619 40.064L40.5049 23.4217C40.4352 22.1877 39.9252 21.1072 39.1375 20.3394V18.4563C39.1375 17.5531 39.8723 16.8183 40.7755 16.8183H46.5898C47.4929 16.8183 48.2276 17.5531 48.2276 18.4563V26.4253C46.9292 26.7751 45.9705 27.9624 45.9705 29.3698V47.1497C43.3128 45.92 41.4634 43.2296 41.4634 40.1136Z"
      fill={lower_opacity ? lowerOpacityColour : "black"}
    />
    <Path
      d="M51.0192 38.3223C50.5417 38.3223 50.1549 38.7092 50.1549 39.1865V43.8251C50.1549 44.3024 50.5417 44.6893 51.0192 44.6893C51.4966 44.6893 51.8834 44.3024 51.8834 43.8251V39.1865C51.8834 38.7092 51.4966 38.3223 51.0192 38.3223Z"
      fill={lower_opacity ? lowerOpacityColour : "black"}
    />
  </Svg>
);
