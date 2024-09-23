import React from "react";
import Svg, { Defs, G, Path , Rect} from "react-native-svg-web";
import { colorSymbolNotSelected } from "../../../global/Settings";

const lowerOpacityColour = colorSymbolNotSelected;

export const IconTypeOlivedefault = ({ lower_opacity }) => (
  <Svg
    width="78"
    height="84"
    viewBox="0 0 78 84"
    fill={lower_opacity ? lowerOpacityColour : "black"}
  >
    <G clipPath="url(#clip0_7563_52789)">
      <Path
        d="M36.2548 54.2C35.1408 52.6091 33.3141 51.6593 31.3683 51.6593C30.8842 51.6593 30.3653 51.6873 30.1327 52.1865C30.0832 52.2931 30.0383 52.4012 29.9954 52.5097C29.5572 50.5347 28.1315 48.8959 26.2182 48.1972C25.7674 48.0325 25.4072 48.2841 25.0932 48.5809C25.5289 46.6071 24.927 44.521 23.4893 43.0802C23.1481 42.7384 22.715 42.8174 22.3029 42.955C23.534 41.3497 23.8732 39.2041 23.1785 37.2894C23.0142 36.8365 22.5868 36.7239 22.1563 36.6744C23.9505 35.74 25.1646 33.9387 25.3441 31.9098C25.3868 31.4283 25.0517 31.1507 24.6819 30.9225C26.7014 30.8327 28.5608 29.7114 29.5804 27.9496C29.738 27.6773 29.738 27.3415 29.5804 27.0691C28.5168 25.2312 26.5393 24.0896 24.4195 24.0896C24.0533 24.0896 23.6917 24.1244 23.3379 24.1903C23.4035 23.8348 23.4391 23.4732 23.4391 23.1092C23.4391 20.9894 22.2975 19.012 20.4596 17.9483C20.1873 17.7907 19.8516 17.7907 19.5791 17.9483C17.7414 19.0119 16.5996 20.9894 16.5996 23.1092C16.5996 25.1512 17.6593 27.0608 19.38 28.149C19.8719 28.9267 20.5316 29.5695 21.2958 30.0404C20.5133 30.0733 19.7541 30.2577 19.0356 30.5927C18.7035 30.7476 18.3912 30.9333 18.0982 31.1426C18.0075 30.7922 17.8867 30.4489 17.7327 30.1185C16.8369 28.1972 14.9665 26.8877 12.8512 26.7004C12.5378 26.6726 12.2335 26.8145 12.0532 27.0725C10.8372 28.8132 10.6382 31.0879 11.534 33.0091C12.3958 34.8576 14.1607 36.1369 16.177 36.3981C16.9473 36.8947 17.8102 37.2041 18.7123 37.3097C18.0288 37.6662 17.413 38.1554 16.9042 38.7619C16.6686 39.0425 16.4641 39.3429 16.2871 39.6564C16.0567 39.3771 15.8023 39.117 15.523 38.8827C13.9084 37.5278 11.6345 37.1292 9.65429 37.8478C9.35851 37.9552 9.14266 38.2124 9.0884 38.5222C8.40567 42.4182 11.7908 45.9464 15.705 45.4657C16.0677 45.4212 16.4263 45.343 16.7745 45.2318C17.6732 45.3531 18.5947 45.268 19.4557 44.9829C18.985 45.5947 18.6304 46.3002 18.425 47.0663C18.3302 47.42 18.2704 47.7785 18.2423 48.1371C17.4432 47.7566 16.5652 47.5554 15.6797 47.5554C14.1154 47.5554 12.5803 48.1919 11.4681 49.3018C11.2455 49.5241 11.1585 49.8485 11.2403 50.1523C11.9301 52.7156 14.3451 54.5702 16.9992 54.5702C18.4873 54.5702 19.9482 53.993 21.0445 52.9812C21.9245 52.7063 22.7162 52.2343 23.369 51.6161C23.1989 52.3727 23.1749 53.1655 23.3131 53.9503C23.3768 54.311 23.4753 54.6606 23.6017 54.9977C23.24 54.9947 22.8773 55.0225 22.5179 55.0859C20.4302 55.454 18.6811 56.9218 17.9529 58.9164C17.8451 59.2118 17.9033 59.5425 18.1058 59.7834C19.4592 61.3935 21.6342 62.1867 23.7057 61.8215C25.7147 61.4672 27.4073 60.0931 28.1812 58.2128C28.8652 57.5915 29.3859 56.8271 29.7175 55.9891C29.8834 56.7449 30.1964 57.472 30.6523 58.1232C30.8622 58.4229 31.0975 58.6997 31.3541 58.9519C31.0256 59.1019 30.7094 59.2799 30.4115 59.4885C28.6752 60.7043 27.7102 62.7739 27.893 64.8893C27.9201 65.2028 28.1128 65.4778 28.3981 65.6105C30.3121 66.5006 32.6063 66.3012 34.3347 65.091C36.0093 63.9187 36.966 61.9524 36.8681 59.9164C37.6502 58.0395 37.4248 55.871 36.2548 54.2ZM27.7656 27.5092C26.9763 28.5454 25.7366 29.1712 24.4195 29.1712C23.1026 29.1712 21.8632 28.5456 21.0739 27.5097C21.076 27.5069 21.078 27.5038 21.0801 27.501C21.8676 26.472 23.1231 25.8473 24.4195 25.8473C25.7367 25.8474 26.9762 26.4732 27.7656 27.5092ZM20.0194 19.7632C21.0554 20.5524 21.6813 21.7921 21.6813 23.1092C21.6813 23.7758 21.5223 24.4327 21.2198 25.0228C20.9134 25.2182 20.6268 25.4418 20.3619 25.6883C20.3586 25.6913 20.3552 25.6944 20.3519 25.6975C20.1619 25.8745 19.9809 26.065 19.8166 26.2663C19.8128 26.271 19.8087 26.2756 19.8048 26.2803C18.8975 25.4893 18.3577 24.3328 18.3577 23.1093C18.3573 21.7919 18.9831 20.5525 20.0194 19.7632ZM19.7784 32.1858C20.9603 31.6347 22.3601 31.668 23.5134 32.2771C23.2362 33.5501 22.3771 34.6415 21.183 35.1982C20.0014 35.7492 18.6018 35.7161 17.4485 35.1073C17.4493 35.1035 17.4498 35.0998 17.4506 35.096C17.7315 33.8367 18.5994 32.7355 19.7784 32.1858ZM13.1271 32.266C12.5705 31.0722 12.6137 29.6843 13.2191 28.5311C14.4918 28.8086 15.5828 29.6675 16.1394 30.8612C16.4211 31.4653 16.5546 32.1282 16.5298 32.7906C16.3003 33.1514 16.1117 33.5355 15.9645 33.9345C15.9615 33.9426 15.9586 33.9506 15.9557 33.9587C15.8877 34.1456 15.8278 34.3354 15.7787 34.5281C14.6221 34.1947 13.6442 33.3748 13.1271 32.266ZM14.9533 43.7577C13.9692 43.7577 13.0115 43.4088 12.2565 42.7754C11.2475 41.9286 10.7001 40.6523 10.7617 39.3511C11.0673 39.2818 11.3802 39.2468 11.6965 39.2468C13.3638 39.2468 14.9152 40.277 15.5623 41.8127C15.5067 42.2369 15.4981 42.6649 15.5335 43.0892C15.534 43.0972 15.5349 43.1052 15.5356 43.1132C15.5529 43.3118 15.579 43.5097 15.6162 43.7058C15.3976 43.7403 15.1763 43.7577 14.9533 43.7577ZM17.3738 43.5233C17.3729 43.5197 17.3719 43.5162 17.3711 43.5126C17.0909 42.2717 17.422 40.8793 18.2507 39.8917C19.0856 38.8965 20.3776 38.3339 21.6745 38.3966C21.961 39.6674 21.6436 41.0193 20.7969 42.0282C19.9539 43.033 18.6899 43.5866 17.3738 43.5233ZM16.9989 52.8123C15.3089 52.8123 13.748 51.7589 13.1072 50.1969C13.8409 49.6305 14.7533 49.3132 15.6797 49.3131C16.7135 49.3131 17.7318 49.7046 18.4982 50.3984C18.6872 50.9964 18.9722 51.5657 19.3366 52.0763C19.3399 52.081 19.3431 52.0858 19.3464 52.0905C18.6552 52.5551 17.8328 52.8123 16.9989 52.8123ZM20.8628 51.1832C20.8605 51.1804 20.8581 51.1778 20.856 51.1749C20.0679 50.1499 19.788 48.7714 20.123 47.5214C20.4639 46.2492 21.3891 45.2137 22.5942 44.7194C23.3907 45.75 23.6743 47.1093 23.3334 48.3815C22.9928 49.6536 22.0677 50.6887 20.8628 51.1832ZM23.4002 60.0902C22.1151 60.3169 20.7735 59.9226 19.8161 59.0352C20.4134 57.8774 21.5256 57.0456 22.8231 56.8169C23.4815 56.7008 24.1547 56.7432 24.7875 56.939C25.0767 57.2542 25.3991 57.5361 25.7467 57.7816C25.7533 57.7864 25.7601 57.7911 25.7669 57.7957C25.9299 57.9099 26.098 58.0169 26.2718 58.1144C25.6503 59.1452 24.605 59.8777 23.4002 60.0902ZM27.2622 56.6508C27.2591 56.6491 27.2557 56.6478 27.2524 56.646C26.1027 56.0466 25.2696 54.923 25.0441 53.6446C24.8154 52.3476 25.2164 51.0181 26.0996 50.0608C27.2571 50.6582 28.0886 51.7703 28.3174 53.0674C28.5461 54.3646 28.1452 55.6936 27.2622 56.6508ZM31.5343 53.4203C32.8443 53.4719 34.0613 54.132 34.8148 55.2083C35.57 56.2868 35.7685 57.6606 35.373 58.9012C35.1844 58.8934 34.9961 58.8735 34.8099 58.8408C34.8066 58.8402 34.8033 58.8395 34.8001 58.839C33.711 58.6306 32.7309 58.027 32.0922 57.1147C31.3365 56.0357 31.1382 54.6613 31.5343 53.4203ZM33.3262 63.6511C32.2577 64.3992 30.8735 64.605 29.6321 64.2088C29.6845 62.9075 30.3409 61.6839 31.4198 60.9284C31.9658 60.5461 32.5953 60.2995 33.2522 60.209C33.3013 60.2293 33.3512 60.2479 33.4007 60.2668C33.7722 60.4081 34.1575 60.513 34.5494 60.5792C34.5984 60.5875 35.0926 60.6576 35.0937 60.6467C34.9663 61.8435 34.3285 62.9493 33.3262 63.6511Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
      <Path
        d="M68.9109 38.5222C68.8567 38.2123 68.6408 37.955 68.345 37.8477C66.3622 37.1285 64.0923 37.5267 62.4763 38.8826C62.1971 39.117 61.9425 39.377 61.7123 39.6563C61.5353 39.3428 61.3307 39.0424 61.0953 38.7618C60.5866 38.1554 59.9706 37.6662 59.2872 37.3096C60.1892 37.204 61.0521 36.8946 61.8223 36.398C63.8387 36.1368 65.6036 34.8574 66.4655 33.0091C67.3614 31.0878 67.1624 28.8132 65.9462 27.0725C65.766 26.8145 65.4608 26.6727 65.1483 26.7004C63.0331 26.8877 61.1626 28.1972 60.2668 30.1185C60.1128 30.4489 59.9919 30.7922 59.9012 31.1426C59.6083 30.9333 59.296 30.7476 58.9639 30.5927C58.2456 30.2577 57.4863 30.0733 56.7037 30.0404C57.4677 29.5696 58.1274 28.9268 58.6195 28.149C60.3401 27.0609 61.3997 25.1512 61.3997 23.1092C61.3997 20.9894 60.2581 19.012 58.4202 17.9483C58.1479 17.7907 57.8122 17.7907 57.5397 17.9483C55.7017 19.0119 54.5601 20.9894 54.5601 23.1092C54.5601 23.4731 54.5957 23.8347 54.6613 24.1903C54.3077 24.1244 53.9459 24.0896 53.5798 24.0896C51.46 24.0896 49.4826 25.2312 48.4189 27.0691C48.2613 27.3414 48.2613 27.6772 48.4189 27.9496C49.4384 29.7114 51.298 30.8328 53.3174 30.9225C53.2195 30.983 53.1223 31.0455 53.0273 31.1119C52.7694 31.2921 52.6274 31.5965 52.6552 31.9098C52.8349 33.9388 54.0489 35.74 55.8432 36.6744C55.7267 36.6879 55.6106 36.7034 55.4954 36.7235C55.1854 36.7778 54.9282 36.9936 54.821 37.2895C54.1264 39.2043 54.4655 41.3498 55.6966 42.9551C55.5858 42.9182 55.4742 42.883 55.3607 42.8525C55.0567 42.7707 54.7325 42.8577 54.5103 43.0803C53.0725 44.5209 52.4706 46.6072 52.9062 48.5811C52.8227 48.502 52.7369 48.4248 52.6483 48.3502C52.4075 48.1477 52.0769 48.0894 51.7812 48.1973C49.8679 48.8959 48.4422 50.535 48.0042 52.5098C47.9613 52.4012 47.9163 52.2931 47.8667 52.1865C47.6395 51.698 47.1049 51.6593 46.6311 51.6593C44.6853 51.6593 42.8587 52.6091 41.7446 54.2C40.5746 55.8711 40.3493 58.0396 41.1318 59.9166C41.0339 61.9525 41.9906 63.9187 43.6651 65.0911C44.6717 65.796 45.8517 66.1686 47.0776 66.1686C47.9438 66.1686 48.8166 65.9756 49.6017 65.6105C49.887 65.4778 50.0796 65.2028 50.1068 64.8893C50.3207 62.4167 48.9022 59.9822 46.6457 58.9519C46.9023 58.6997 47.1376 58.4228 47.3475 58.1232C47.8034 57.4718 48.1165 56.7449 48.2823 55.989C48.6139 56.8268 49.1345 57.5914 49.8186 58.2128C50.5925 60.0933 52.2854 61.4673 54.2941 61.8215C54.6378 61.8821 54.9877 61.9128 55.3342 61.9128C57.0939 61.9128 58.756 61.1365 59.8937 59.7834C60.0962 59.5425 60.1546 59.2118 60.0467 58.9163C59.3184 56.9215 57.5691 55.4539 55.4818 55.0858C55.1224 55.0224 54.7597 54.9946 54.398 54.9976C54.5244 54.6605 54.6229 54.3108 54.6865 53.9501C54.8248 53.1656 54.8008 52.3728 54.6308 51.616C55.2835 52.2343 56.0752 52.7063 56.9552 52.9811C58.0514 53.9929 59.5125 54.5701 61.0007 54.5701C61.5199 54.5701 62.0397 54.5014 62.5453 54.3659C64.5929 53.8172 66.2075 52.2025 66.7591 50.1521C66.8408 49.8482 66.754 49.524 66.5312 49.3017C65.4191 48.1918 63.8841 47.5551 62.3196 47.5551C61.4348 47.5551 60.5555 47.7567 59.757 48.1368C59.7291 47.7781 59.6691 47.4198 59.5743 47.0661C59.369 46.2999 59.0144 45.5946 58.5436 44.9825C59.1425 45.1808 59.7756 45.2858 60.4233 45.2858C60.6909 45.2858 60.9596 45.2672 61.225 45.2314C61.8136 45.4195 62.4251 45.5153 63.0465 45.5154C64.4429 45.5154 65.802 45.0204 66.8728 44.1218C68.4964 42.7594 69.2775 40.6137 68.9109 38.5222ZM44.7473 60.2087C45.404 60.2992 46.0337 60.5459 46.5797 60.9282C47.6585 61.6835 48.3151 62.9072 48.3673 64.2086C47.9511 64.3415 47.5131 64.4106 47.0772 64.4106C46.2143 64.4106 45.3829 64.1479 44.6733 63.651C43.671 62.9493 43.0331 61.8435 42.9057 60.6466C42.9076 60.6644 43.5385 60.5643 43.5914 60.554C43.9329 60.4879 44.2748 60.3961 44.5983 60.2668C44.6481 60.2478 44.6981 60.229 44.7473 60.2087ZM45.9071 57.1147C45.4585 57.7552 44.8452 58.2468 44.1463 58.552C44.0414 58.5978 42.6777 59.0627 42.6261 58.9011C41.7933 56.292 43.7337 53.5278 46.4648 53.4201C46.861 54.6612 46.6626 56.0356 45.9071 57.1147ZM61.8599 30.8611C62.4165 29.6675 63.5076 28.8084 64.7802 28.531C65.3857 29.6842 65.429 31.0721 64.8722 32.2659C64.3552 33.3746 63.3771 34.1947 62.2206 34.5281C62.1715 34.3353 62.1116 34.1453 62.0437 33.9584C62.0407 33.9504 62.0379 33.9424 62.035 33.9345C61.8878 33.5353 61.6991 33.1512 61.4696 32.7904C61.4446 32.1279 61.5782 31.4652 61.8599 30.8611ZM56.7795 25.0225C56.4769 24.4325 56.318 23.7754 56.318 23.109C56.318 21.7919 56.9437 20.5523 57.9801 19.7629C59.0161 20.5522 59.642 21.7919 59.642 23.109C59.642 24.3324 59.1021 25.489 58.195 26.2799C58.1911 26.2751 58.187 26.2707 58.1831 26.266C57.7824 25.7832 57.3087 25.36 56.7795 25.0225ZM50.2337 27.5091C51.0229 26.4729 52.2626 25.8472 53.5797 25.8472C54.4727 25.8472 55.3297 26.1354 56.0352 26.6437C56.3625 26.8795 56.6715 27.177 56.9192 27.5008C56.9214 27.5036 56.9233 27.5067 56.9254 27.5095C56.1361 28.5453 54.8967 29.1709 53.5797 29.1709C52.2626 29.1712 51.0232 28.5453 50.2337 27.5091ZM54.4859 32.277C55.0901 31.9579 55.76 31.7911 56.4502 31.7911C58.3668 31.7911 60.0815 33.1555 60.5288 35.0161C60.5352 35.0428 60.5427 35.0691 60.5486 35.0959C60.5494 35.0997 60.5499 35.1034 60.5507 35.1072C59.9467 35.426 59.2772 35.5927 58.5871 35.5927C57.9734 35.5927 57.3776 35.4599 56.8162 35.1981C55.6223 34.6412 54.7632 33.55 54.4859 32.277ZM49.6818 53.0675C49.9106 51.7703 50.7419 50.6582 51.8995 50.0608C52.7828 51.018 53.1837 52.3475 52.9551 53.6446C52.7322 54.909 51.8947 56.0633 50.7468 56.646C50.7435 56.6477 50.7401 56.6491 50.737 56.6508C49.854 55.6935 49.4531 54.3644 49.6818 53.0675ZM55.1764 56.8168C56.4736 57.0455 57.586 57.8771 58.1833 59.0351C57.4098 59.752 56.3969 60.1547 55.3341 60.1547C53.8705 60.1547 52.483 59.3672 51.7278 58.1143C51.9015 58.0168 52.0695 57.9098 52.2326 57.7956C52.2394 57.7908 52.2461 57.7861 52.2529 57.7815C52.6005 57.5359 52.9229 57.2541 53.2121 56.9389C53.8446 56.7429 54.5178 56.7006 55.1764 56.8168ZM54.6658 48.3814C54.3249 47.1092 54.6085 45.7499 55.405 44.7193C56.6102 45.2135 57.5355 46.2488 57.8763 47.5213C58.1076 48.3847 58.0506 49.288 57.7415 50.1017C57.5956 50.486 57.393 50.8485 57.1431 51.1749C57.141 51.1777 57.1386 51.1803 57.1363 51.1831C55.9317 50.6886 55.0066 49.6535 54.6658 48.3814ZM61.2299 49.4574C62.4905 49.1196 63.8596 49.3997 64.892 50.1969C64.3978 51.4018 63.3626 52.3271 62.0903 52.6679C60.9214 52.9811 59.6568 52.7651 58.653 52.0905C58.6565 52.0856 58.6596 52.0807 58.6632 52.0757C59.0273 51.5655 59.3123 50.9962 59.5012 50.3983C59.9927 49.9535 60.5862 49.6298 61.2299 49.4574ZM60.4232 43.5281C59.1763 43.5281 58.0023 42.9813 57.2024 42.0281C56.3558 41.0191 56.0383 39.6673 56.3248 38.3965C57.6275 38.3337 58.9102 38.8923 59.7487 39.8916C60.5809 40.8833 60.9089 42.25 60.6284 43.5125C60.6276 43.5162 60.6265 43.5197 60.6257 43.5232C60.5581 43.5265 60.4906 43.5281 60.4232 43.5281ZM65.7428 42.7753C64.8203 43.5494 63.5722 43.8939 62.3833 43.7057C62.4204 43.5092 62.4466 43.311 62.4639 43.112C62.4645 43.1046 62.4652 43.0973 62.4659 43.09C62.5013 42.6655 62.4927 42.2372 62.4371 41.8127C62.6944 41.2018 63.0955 40.6577 63.6061 40.2293C64.6033 39.3927 65.9688 39.0636 67.2376 39.3512C67.2993 40.6523 66.752 41.9285 65.7428 42.7753Z"
        fill={lower_opacity ? lowerOpacityColour : "black"}
      />
    </G>
    <Defs>
      <clipPath id="clip0_7563_52789">
        <Rect width="60" height="60" fill="white" transform="translate(9 12)" />
      </clipPath>
    </Defs>
  </Svg>
);
