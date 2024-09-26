import React from "react";
import Svg, { Defs, G, Path, Rect } from "react-native-svg-web";
import { colorSymbolNotSelected } from "../../../global/Settings";

const lowerOpacityColour = colorSymbolNotSelected;

export const IconTypeLassodefault = ({ lower_opacity }) => (
  <Svg
    width="78"
    height="84"
    viewBox="0 0 78 84"
    fill={lower_opacity ? lowerOpacityColour : "black"}
  >
    <G clipPath="url(#clip0_8951_53415)">
      <Path
        d="M63.8903 50.4486V42.4964C66.8659 39.1906 68.4997 34.939 68.4997 30.4766C68.4997 20.5642 60.4355 12.5 50.5232 12.5H37.8636C36.7024 12.5 35.5569 12.6033 34.4368 12.8017C34.4236 12.8039 34.4105 12.8063 34.3974 12.8089C29.8118 13.6311 25.6624 16.073 22.6816 19.7863C22.2832 20.2826 22.3625 21.0079 22.859 21.4064C23.0717 21.577 23.3265 21.66 23.5795 21.66C23.9154 21.66 24.2482 21.5136 24.4757 21.2325H28.201C25.9538 23.2774 24.2955 25.9587 23.5139 28.9885L20.7098 32.159V31.9585C20.7098 31.354 20.7415 30.7447 20.8042 30.1476C20.8706 29.5147 20.4113 28.9477 19.7784 28.8814C19.1461 28.8159 18.5785 29.2742 18.5122 29.9072C18.4412 30.5838 18.4053 31.274 18.4053 31.9585V41.6234L16.9912 42.3431C15.3857 43.1604 14.6922 45.068 15.3507 46.7094L11.6282 52.1975C8.3037 57.0988 8.93023 63.6958 13.1181 67.8836C15.4503 70.2156 18.5558 71.5 21.8622 71.5C25.1686 71.5 28.2742 70.2156 30.6064 67.8833C34.7942 63.6955 35.4208 57.0987 32.0963 52.1973L26.9422 44.5988C27.1438 44.3154 27.3039 44.0002 27.4146 43.66C27.7004 42.7819 27.6271 41.845 27.2082 41.022C26.7971 40.2142 26.1097 39.6377 25.3192 39.3475V32.9408C25.3192 26.4027 29.982 20.9333 36.157 19.6828C33.8915 22.6906 32.5466 26.4293 32.5466 30.4764C32.5466 40.3888 40.6108 48.453 50.5232 48.453C52.7623 48.453 54.9256 48.0512 56.9763 47.2595V51.951C55.5857 52.9219 55.0852 54.7982 55.8758 56.3519C56.1423 56.8755 56.5249 57.3022 56.9763 57.6167V62.5693C56.9763 63.2057 57.4922 63.7217 58.1286 63.7217H62.738C63.3744 63.7217 63.8903 63.2057 63.8903 62.5693V56.1145C64.5047 55.6871 64.9616 55.0748 65.1972 54.3508C65.4829 53.4727 65.4097 52.5359 64.9908 51.7129C64.7244 51.1894 64.3417 50.7631 63.8903 50.4486ZM20.7098 35.6377L23.0145 33.032V39.3176C22.8606 39.3701 22.7085 39.4334 22.5593 39.5092L20.7098 40.4504V35.6377ZM18.0365 44.3969L23.6046 41.5631C23.7716 41.4782 23.9498 41.4379 24.1254 41.4379C24.5455 41.4379 24.951 41.6681 25.1543 42.0675C25.2939 42.3418 25.3183 42.6541 25.2231 42.9468C25.1278 43.2395 24.9243 43.4774 24.6499 43.6171L19.0818 46.4509C18.5155 46.7389 17.8203 46.5129 17.5321 45.9467C17.244 45.3803 17.4702 44.6851 18.0365 44.3969ZM27.9464 50.185L27.1302 53.0874L23.0225 47.0315L25.0927 45.9779L27.9464 50.185ZM18.0069 62.9942C16.1606 61.148 15.8844 58.2394 17.3501 56.0784L21.8622 49.4263L26.3743 56.0784C27.8401 58.2394 27.5637 61.1479 25.7175 62.9943C24.6897 64.0222 23.3206 64.5882 21.8622 64.5882C20.4038 64.5882 19.0348 64.022 18.0069 62.9942ZM15.4428 54.7847C14.526 56.1363 14.0887 57.6934 14.1092 59.2373L12.1001 61.5534C11.4961 59.1019 11.8171 56.4513 13.1177 54.1656L15.4656 54.7513L15.4428 54.7847ZM16.9381 48.4744C17.4372 48.7387 17.9963 48.8805 18.5649 48.8805C18.8917 48.8805 19.2216 48.8339 19.5445 48.7378L16.8436 52.7196L14.4617 52.1255L16.9381 48.4744ZM13.0451 63.981L14.6886 62.0864C15.0686 63.0145 15.6331 63.8799 16.3771 64.6241C16.854 65.1009 17.383 65.5065 17.9504 65.8386L19.385 68.8906C17.6434 68.4531 16.0476 67.5538 14.7476 66.2538C14.0608 65.5669 13.494 64.7996 13.0451 63.981ZM22.0725 69.1902L20.968 66.8404C21.2627 66.8739 21.561 66.8929 21.8622 66.8929C23.816 66.8929 25.6575 66.1773 27.0877 64.8711L30.5879 64.1483C30.1546 64.9046 29.6168 65.6137 28.9767 66.2537C27.1293 68.1009 24.6844 69.1371 22.0725 69.1902ZM31.6172 61.5824L29.0227 62.1182C29.8734 60.0669 29.8189 57.7052 28.7988 55.6674L29.6389 52.68L30.189 53.4911C31.8414 55.9272 32.2919 58.8779 31.6172 61.5824ZM34.9427 32.166L37.1641 30.9198C37.2204 32.6361 37.6016 34.2713 38.2483 35.7664L37.0071 38.4003C35.9086 36.5335 35.1855 34.4208 34.9427 32.166ZM44.0007 16.2282L46.1822 17.8335C44.8605 18.2886 43.6319 18.9448 42.5334 19.7663H39.0935C40.4768 18.291 42.1411 17.0829 44.0007 16.2282ZM52.8238 14.974L53.4704 17.4374C52.5218 17.2231 51.5356 17.1094 50.5232 17.1094C50.0691 17.1094 49.6205 17.1323 49.178 17.1768L46.6225 15.2962C47.87 14.9753 49.177 14.8047 50.5232 14.8047C51.3047 14.8047 52.0727 14.863 52.8238 14.974ZM44.07 30.4766C44.07 26.9182 46.9649 24.0234 50.5232 24.0234C54.0814 24.0234 56.9763 26.9182 56.9763 30.4766C56.9763 34.0349 54.0814 36.9297 50.5232 36.9297C46.9649 36.9297 44.07 34.0349 44.07 30.4766ZM50.5232 19.4141C51.2983 19.4141 52.055 19.4946 52.7855 19.647L53.8129 22.3622C52.7965 21.9486 51.6864 21.7188 50.5232 21.7188C50.5067 21.7188 50.4903 21.7199 50.4738 21.72L46.4024 20.2107C47.6766 19.6973 49.0674 19.4141 50.5232 19.4141ZM60.9146 26.6806L59.1649 29.0608C58.9045 27.4658 58.2119 26.0149 57.2114 24.8315L55.6366 20.6692C58.0628 21.9393 59.9628 24.083 60.9146 26.6806ZM43.7948 21.7019L46.4964 22.7034C45.495 23.2243 44.6069 23.9325 43.8778 24.782L40.3669 26.0939C41.1207 24.3535 42.3092 22.8437 43.7948 21.7019ZM59.281 32.7937L61.5578 29.6967C61.5759 29.9544 61.5857 30.2144 61.5857 30.4767V37.2358L59.281 40.7284V32.7937ZM60.201 21.2651C59.0353 20.0409 57.64 19.0374 56.0854 18.3231L55.363 15.5707C57.2405 16.1817 58.9637 17.1376 60.4568 18.3644L60.201 21.2651ZM37.3017 22.071H40.1379C38.735 23.8009 37.7547 25.8864 37.3559 28.1696L34.8789 29.5592C35.0381 26.8157 35.9056 24.2593 37.3017 22.071ZM39.4607 30.4766C39.4607 29.9232 39.502 29.3794 39.5808 28.8477L42.1569 27.8852C41.9026 28.7044 41.7653 29.5747 41.7653 30.4764C41.7653 31.2592 41.8701 32.0178 42.0637 32.7405L41.2602 36.517C40.123 34.7793 39.4607 32.704 39.4607 30.4766ZM43.149 38.7151L43.728 35.9935C44.8044 37.3168 46.2578 38.3217 47.9238 38.8406L50.1164 41.5309C47.4454 41.4337 45.0132 40.3856 43.149 38.7151ZM52.8906 41.2868L51.1949 39.2061C53.4764 39.0321 55.5163 37.9822 56.9764 36.3903V39.4631C55.7389 40.3551 54.3571 40.9692 52.8906 41.2868ZM59.281 44.9131L61.5857 41.4203V49.8401C61.1637 49.8794 60.742 49.9963 60.3419 50.2L59.281 50.74V44.9131ZM57.9298 55.3067C57.6416 54.7403 57.8678 54.0451 58.4341 53.7569L61.3873 52.254C61.5543 52.1691 61.7325 52.1288 61.9081 52.1288C62.3282 52.1288 62.7337 52.359 62.937 52.7584C63.0766 53.0327 63.101 53.3449 63.0058 53.6376C62.9106 53.9303 62.707 54.1683 62.4327 54.308L59.4795 55.811C58.9131 56.0993 58.218 55.8731 57.9298 55.3067ZM63.8903 38.6618V31.972L66.1632 29.4927C66.1835 29.8182 66.195 30.146 66.195 30.4766C66.195 33.3996 65.3903 36.2182 63.8903 38.6618ZM65.7051 26.582L63.7708 28.6918C63.5506 27.0483 63.0312 25.4983 62.2683 24.099L62.5852 20.4821C64.0406 22.2355 65.1219 24.3099 65.7051 26.582ZM41.726 14.8047C40.5698 15.4563 39.4923 16.2317 38.5123 17.1136C38.0543 17.1232 37.6012 17.1522 37.1535 17.2001L36.2339 14.8826C36.7725 14.832 37.3159 14.8047 37.8636 14.8047H41.726ZM26.7054 18.9278C28.7849 17.1415 31.2486 15.8895 33.9057 15.2638L34.8418 17.6229C33.6645 17.9309 32.5406 18.3718 31.4862 18.9278H26.7054ZM38.5368 40.5606L39.6372 38.2255C40.5934 39.565 41.7908 40.7207 43.1647 41.6302L43.4963 44.4819C41.5876 43.5204 39.9017 42.1802 38.5368 40.5606ZM45.9303 45.4612L45.6347 42.9181C46.849 43.3969 48.1497 43.7028 49.5062 43.8053L51.4534 46.1216C51.1452 46.1393 50.8351 46.1484 50.5234 46.1484C48.9257 46.1484 47.3834 45.9076 45.9303 45.4612ZM54.1369 45.7323L52.4343 43.7071C54.0355 43.4803 55.5662 42.969 56.9762 42.1874V44.7615C56.0568 45.1784 55.109 45.5031 54.1369 45.7323ZM59.281 61.417V58.2243C59.703 58.1851 60.1246 58.0684 60.5247 57.8648L61.5857 57.3248V61.417H59.281Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
      <Path
        d="M21.1084 26.2207C21.4115 26.2207 21.7088 26.0975 21.9231 25.8831C22.1374 25.6687 22.2607 25.3714 22.2607 25.0684C22.2607 24.7653 22.1374 24.468 21.9231 24.2538C21.7076 24.0394 21.4115 23.916 21.1084 23.916C20.8053 23.916 20.508 24.0393 20.2937 24.2538C20.0782 24.468 19.9561 24.7653 19.9561 25.0684C19.9561 25.3714 20.0782 25.6687 20.2937 25.8831C20.508 26.0974 20.8053 26.2207 21.1084 26.2207Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
    </G>
    <Defs>
      <clipPath id="clip0_8951_53415">
        <Rect
          width="59"
          height="59"
          fill="white"
          transform="translate(9.5 12.5)"
        />
      </clipPath>
    </Defs>{" "}
  </Svg>
);