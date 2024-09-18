import React from "react";
import Svg, { Defs, G, Path, Rect } from "react-native-svg-web";
import { colorSymbolNotSelected } from "../../../global/Settings";

const lowerOpacityColour = colorSymbolNotSelected;

export const IconTypeWhiskeydefault = ({ lower_opacity }) => (
  <Svg
    width="78"
    height="84"
    viewBox="0 0 78 84"
    fill={lower_opacity ? lowerOpacityColour : "black"}
  >
    <G clipPath="url(#clip0_8951_53482)">
      <G clipPath="url(#clip1_8951_53482)">
        <Path
          d="M30.5097 36.2036C30.9126 37.1867 32.3687 37.1057 32.6762 36.0974C32.9742 35.1197 31.8893 34.264 31.0062 34.7609C30.5065 35.0418 30.2891 35.6747 30.5097 36.2036Z"
          fill={lower_opacity ? lowerOpacityColour : "black"}
        />
        <Path
          d="M55.3486 66.0646C55.1595 65.6114 54.69 65.3201 54.1998 65.3566C53.6993 65.3944 53.2721 65.7635 53.1614 66.2528C52.9345 67.2593 54.1026 68.0385 54.9479 67.4475C55.3855 67.1418 55.5502 66.5571 55.3486 66.0646Z"
          fill={lower_opacity ? lowerOpacityColour : "black"}
        />
        <Path
          d="M62.4471 44.6183C62.2306 44.4023 61.9376 44.2807 61.632 44.2807H44.5768C44.5953 44.1421 44.6061 44.0021 44.6061 43.8621V38.4411C44.6061 36.867 43.4771 35.5513 41.9228 35.3123L37.4665 34.6249C37.1014 34.5682 36.8124 34.2864 36.7485 33.9227L35.169 25.0024C35.1681 24.9947 35.1659 24.9866 35.165 24.979L35.1605 24.9529C35.16 24.9511 35.1596 24.9493 35.1591 24.9479C35.1528 24.9137 35.1452 24.8799 35.1357 24.8457C35.1339 24.8394 35.1321 24.8336 35.1303 24.8273C35.1217 24.7985 35.1123 24.7697 35.1015 24.7413C35.0974 24.7309 35.0929 24.721 35.0889 24.7107C35.083 24.6967 35.0781 24.6823 35.0718 24.6679L34.3835 23.1865L35.0601 21.8123C35.1375 21.6556 35.1789 21.4778 35.1789 21.3032V15.5212C35.1789 14.1312 34.0477 13 32.6577 13H26.1348C24.7443 13 23.6132 14.1312 23.6132 15.5212V21.3032C23.6132 21.4778 23.655 21.6556 23.732 21.8123L24.409 23.1865L23.7203 24.6679C23.7194 24.6702 23.7189 24.672 23.718 24.6742C23.7045 24.7039 23.6924 24.7341 23.6811 24.7652C23.6784 24.7724 23.6757 24.7796 23.6735 24.7868C23.6645 24.8138 23.6564 24.8412 23.6496 24.8696C23.6465 24.8808 23.6438 24.8921 23.6411 24.9034C23.6388 24.9142 23.6352 24.925 23.6334 24.9358L21.9031 33.938C21.8351 34.2927 21.5493 34.5686 21.1923 34.6254L16.8589 35.3082C15.31 35.5526 14.1855 36.8684 14.1855 38.4366V43.8621C14.1855 44.8186 14.6105 45.7117 15.3518 46.3158C15.3581 46.3212 15.364 46.3261 15.3703 46.3311C15.5675 46.4895 15.6849 46.7254 15.6926 46.9784L15.7232 48.0159C15.7232 48.0222 15.7228 48.0285 15.7228 48.0344L16.1643 62.9658C16.1643 62.9699 16.1652 62.9739 16.1652 62.978L16.2287 65.1314C16.235 65.3281 16.1724 65.5226 16.0523 65.6797L15.8182 65.9862C15.3338 66.6204 15.1079 67.4073 15.1817 68.2027L15.2681 69.1254C15.4203 70.7644 16.7752 72 18.4209 72H58.0345C60.6538 72 62.7843 69.8691 62.7843 67.2502V45.4331C62.7843 45.1274 62.6632 44.8344 62.4471 44.6183ZM60.4796 53.1101H56.7908V51.7368C56.7908 51.1007 56.2749 50.5844 55.6384 50.5844H50.5884C49.9519 50.5844 49.436 51.1007 49.436 51.7368V53.1101H37.0929V46.5854H60.4796V53.1101ZM54.4861 54.2535C54.4861 54.2566 54.4856 54.2598 54.4856 54.2625V55.6345H51.7407V54.2625C51.7407 54.2611 51.7407 54.2598 51.7407 54.258V52.8891H54.4861V54.2535ZM45.7836 58.1404L43.8422 60.0818L41.9008 58.1404L43.8422 56.1989L45.7836 58.1404ZM18.0626 49.153H34.7882V61.7793H18.4357L18.0626 49.153ZM25.9178 15.5212C25.9178 15.4019 26.0151 15.3047 26.1344 15.3047H32.6573C32.777 15.3047 32.8742 15.4019 32.8742 15.5212V20.1508H25.9178V15.5212ZM16.4902 38.4366C16.4902 38.0095 16.7963 37.6512 17.2181 37.5845L21.4633 36.9152H27.0288C27.6653 36.9152 28.1811 36.3993 28.1811 35.7628C28.1811 35.1268 27.6653 34.6105 27.0288 34.6105H24.1106C24.1322 34.5322 24.1506 34.4525 24.1664 34.3715L25.8692 25.5133L26.7312 23.6569C26.878 23.3409 26.8739 22.975 26.7195 22.6621L26.6178 22.4551H32.1738L32.0721 22.6621C31.9181 22.975 31.9136 23.3409 32.0604 23.6569L32.9165 25.4993L34.479 34.3238C34.7144 35.658 35.7731 36.6942 37.114 36.9021L41.5717 37.5899C41.9944 37.6548 42.3009 38.0131 42.3009 38.4411V43.8621C42.3009 43.9908 42.2717 44.1196 42.2168 44.2348C42.2091 44.2501 42.2015 44.2654 42.1929 44.2803H35.9405C35.304 44.2803 34.7882 44.7966 34.7882 45.4326V46.8478H17.9923C17.9487 45.9507 17.5282 45.1166 16.831 44.5481C16.8251 44.5432 16.8188 44.5382 16.8125 44.5333C16.6077 44.3685 16.4902 44.1241 16.4902 43.8621V38.4366ZM17.5629 68.9116L17.4765 67.9884C17.4562 67.7723 17.5179 67.5581 17.6502 67.3852L17.8839 67.0787C18.3241 66.503 18.5546 65.7863 18.5325 65.0621L18.5037 64.0839H34.7882V67.1908V67.1939V67.2502C34.7882 68.1441 35.0367 68.9805 35.4679 69.6953H18.4209C17.973 69.6953 17.6043 69.3591 17.5629 68.9116ZM58.0345 69.6953H39.5974C39.5578 69.6953 39.5182 69.694 39.479 69.6922C39.4723 69.6922 39.4655 69.6917 39.4588 69.6913C38.2907 69.6273 37.3342 68.759 37.1329 67.6328L49.671 67.6323C49.6737 67.6323 49.6768 67.6319 49.6795 67.6319H49.8533C50.4893 67.6319 51.0056 67.116 51.0056 66.4796C51.0056 65.8435 50.4893 65.3272 49.8533 65.3272H37.0933V55.4148H41.3669L39.4561 57.3256C39.0064 57.7753 39.0064 58.505 39.4561 58.9551L43.0275 62.5265C43.2435 62.7425 43.5366 62.8641 43.8422 62.8641C44.1478 62.8641 44.4409 62.7425 44.6569 62.5265L48.2279 58.9551C48.678 58.5054 48.678 57.7758 48.2279 57.3256L46.3175 55.4148H49.4356V56.7873C49.4356 57.4238 49.9519 57.9396 50.5879 57.9396H55.6384C56.2749 57.9396 56.7908 57.4238 56.7908 56.7873V55.4148H60.4796V65.3272H58.7547C58.1182 65.3272 57.6024 65.8435 57.6024 66.4796C57.6024 67.116 58.1182 67.6319 58.7547 67.6319H58.942V67.6323H60.4467C60.2626 68.7991 59.2525 69.6953 58.0345 69.6953Z"
          fill={lower_opacity ? lowerOpacityColour : "black"}
        />
      </G>
    </G>
    <Defs>
      <clipPath id="clip0_8951_53482">
        <Rect
          width="59"
          height="59"
          fill="white"
          transform="translate(9.5 12.5)"
        />
      </clipPath>
      <clipPath id="clip1_8951_53482">
        <Rect width="59" height="59" fill="white" transform="translate(9 13)" />
      </clipPath>
    </Defs>
  </Svg>
);
