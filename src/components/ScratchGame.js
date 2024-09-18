import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Easing,
  Platform,
} from "react-native";
import AnimatedIcon from "./AnimatedIcon";
import LottieView from "react-native-web-lottie";

import { Howl } from "howler";

import {
  generateRandomLuckySymbolPercentage,
  finishPopUpToVideoTimer,
  maxCountWin,
  maxOtherCount,
  totalIcons,
  totalPositions,
  columns,
  maxRepeatedIcons,
} from "../global/Settings";
import themes from "../global/themeConfig";
import { currentTheme } from "../global/Assets";


const scratchBackground = require("./../assets/image/scratch_background.png");

const lottieAnimations = {
  lottieScratchieBubbleBlue: require("./../assets/lotties/lottieScratchieBubblePopBlue.json"),
  lottieScratchieBubbleGreen: require("./../assets/lotties/lottieScratchieBubblePopGreen.json"),
  lottieScratchieBubblePink: require("./../assets/lotties/lottieScratchieBubblePopPink.json"),
  lottieScratchieBubbleOrange: require("./../assets/lotties/lottieScratchieBubblePopOrange.json"),
  lottieScratchieBubblePopError: require("./../assets/lotties/lottieScratchieBubblePopError.json"),
};

const ScratchGame = ({
  score,
  setScore,
  isWinner,
  setIsWinner,
  scratched,
  reset,
  setReset = { setReset },
  onLoading,
  setIsLuckySymbolTrue,
  timerGame,
  setWinLuckySymbolVideo,
  //setCollectLuckySymbolVideo,
  luckySymbolCount,
  setLuckySymbolCount,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [iconsArray, setIconsArray] = useState([]);
  const [winningIcons, setWinningIcons] = useState([]);
  const [clickedIcons, setClickedIcons] = useState([]);
  const [clickedCount, setClickedCount] = useState({});
  const [lastClickedIcon, setLastClickedIcon] = useState(null);
  const [clickCount, setClickCount] = useState(0);
  const [soundShouldPlay, setSoundShouldPlay] = useState(1);

  const [arrayBobble, setArrayBobble] = useState();
  const [arrayIcon, setArrayIcon] = useState();

  const [iconComponentsDefault, setIconComponentsDefault] = useState([]);

  useEffect(() => {    
    if (themes[currentTheme] && themes[currentTheme].iconsDefault) {
      const iconComponentsDefaultNew = themes[currentTheme].iconsDefault;

      const updatedIcons = iconComponentsDefaultNew.map((icon, index) =>
        React.cloneElement(icon, { lower_opacity: scratched, key: index })
      );
      setIconComponentsDefault(updatedIcons);
    }
  }, [scratched, currentTheme]); 


  const generateRandomLuckySymbol = () => {
    const result = Math.random() < generateRandomLuckySymbolPercentage;
    console.log("Generated result:", result); 
    return result;
  };

  useEffect(() => {
    setClickedIcons([]);
    setClickedCount({});
    setClickCount(0);
    setLastClickedIcon(null);
    setSoundShouldPlay(1);
    
    // Generate lucky symbol once and use it
    const icons = generateRandomLuckySymbol();
  
    setArrayIcon(icons); // Set the arrayIcon with the result of generateRandomLuckySymbol
    setIsLuckySymbolTrue(icons); // Set if the lucky symbol is true
  
    const generatedArray = generateIconsArray(icons); // Generate icons array based on the result of generateRandomLuckySymbol
    const booblePositions = findBoobleColor(generatedArray); // Find the bubble colors for the array
    setArrayBobble(booblePositions); // Set the bubble positions
    
    setIconsArray(generatedArray); // Set the icons array
    const winners = checkWinCondition(generatedArray); // Check for win condition
    setWinningIcons(winners); // Set the winning icons
    setIsWinner(winners.length > 0); // Determine if it's a winner
  }, [setIsWinner, reset, setIsLuckySymbolTrue]);

  
  const generateIconsArray = (winLuckySymbol) => {
    let iconCounts = Array(totalIcons).fill(0);
    let resultArray = new Array(totalPositions).fill(null);
    let iconWithMaxCount = null;
    let columnIconMap = {};
  
    let luckyPosition = -1;
    // Add lucky symbol
    if (winLuckySymbol) {
      luckyPosition = Math.floor(Math.random() * totalPositions);
      resultArray[luckyPosition] = 12;
      iconCounts[12] = 1;
    }
  
    for (let i = 0; i < totalPositions; i++) {
      if (resultArray[i] !== null) continue;
  
      let columnIndex = i % columns;
      if (!columnIconMap[columnIndex]) {
        columnIconMap[columnIndex] = new Set();
      }
  
      let availableIcons = iconCounts
        .map((count, index) => {
          if (
            count < maxCountWin &&
            count < maxRepeatedIcons &&
            (iconWithMaxCount === null ||
              count < maxOtherCount ||
              index === iconWithMaxCount) &&
            !columnIconMap[columnIndex].has(index) &&
            (winLuckySymbol === false || index !== 12) // Lucky symbol can't be repeated
          ) {
            return index;
          }
          return null;
        })
        .filter((index) => index !== null);
  
      if (availableIcons.length === 0) {
        break;
      }
  
      let selectedIcon =
        availableIcons[Math.floor(Math.random() * availableIcons.length)];
  
      resultArray[i] = selectedIcon;
      iconCounts[selectedIcon]++;
      columnIconMap[columnIndex].add(selectedIcon);
  
      if (iconCounts[selectedIcon] === maxCountWin) {
        iconWithMaxCount = selectedIcon;
      }
    }
  
    return resultArray;
  };

  const findBoobleColor = (arr) => {

    const cores = [
    { cor: 'Blue', animacao: 'lottieScratchieBubbleBlue' },
    { cor: 'Green', animacao: 'lottieScratchieBubbleGreen' },
    { cor: 'Pink', animacao: 'lottieScratchieBubblePink' },
    { cor: 'Orange', animacao: 'lottieScratchieBubbleOrange' },
  ];
  
  let contador = {};
  let corMap = {}; 
  let animacaoMap = {};
  let corIndex = 0;

  arr.forEach(num => {
    if (contador[num]) {
      contador[num]++;
    } else {
      contador[num] = 1;
    }
  });

  Object.keys(contador).forEach(num => {
    if (contador[num] === 3) {
      corMap[num] = cores[corIndex].cor;           
      animacaoMap[num] = cores[corIndex].animacao;
      corIndex = (corIndex + 1) % cores.length;
    }
  });

  const arrayAnimacoes = arr.map(num => {
    return animacaoMap[num] || null;
  });

  return arrayAnimacoes;
};

  const checkWinCondition = (array) => {
    const iconCounts = Array(totalIcons).fill(0);
    array.forEach((icon) => {
      if (icon !== null) {
        iconCounts[icon]++;
      }
    });

    const winners = [];
    iconCounts.forEach((count, index) => {
      if (count === maxCountWin) {
        winners.push(index);
      }
    });
    return winners;
  };

  const checkResults = () => {
    setTimeout(() => {
        
      if (arrayIcon) {
        if(luckySymbolCount!==3){
          setWinLuckySymbolVideo(true);
        }
      }
      else {
        setReset(true); //NEXT CARD
      }
    }, 1500);
  };

  useEffect(() => {
    if (
      winningIcons.length * 3 === clickedIcons.length &&
      winningIcons.length > 0
    ) {
      console.log("ALL ICONS CLIKED");
      checkResults();
    }
  }, [clickedIcons, iconsArray]);

  useEffect(() => {
    if (
      scratched && winningIcons.length === 0
    ) {
      checkResults();
    }
  }, [scratched]);

  const handleIconClick = (index) => {
    const icon = iconsArray[index];

    if (!clickedIcons.includes(index)) {
      if (
        lastClickedIcon !== null &&
        lastClickedIcon !== icon &&
        clickedCount[lastClickedIcon] < 3
      ) {
        playSoundError();
        setClickCount(1);
        setSoundShouldPlay(1);

        setClickedIcons([...clickedIcons, index]);
        setLastClickedIcon(icon);
        
        //Add bobble error
        const newArrayBobble = [...arrayBobble];
        newArrayBobble[index] = "lottieScratchieBubblePopError";
        setArrayBobble(newArrayBobble);

        return;
      }

      const newClickedIcons = [...clickedIcons, index];
      setClickedIcons(newClickedIcons);
      setScore(score + timerGame * 100);
      console.log("SCORE: ", score + timerGame * 100);
      const newClickedCount = {
        ...clickedCount,
        [icon]: (clickedCount[icon] || 0) + 1,
      };
      setClickedCount(newClickedCount);

      switch (soundShouldPlay) {
        case 1:
          playSound1();
          updateSounds();
          break;
        case 2:
          playSound2();
          updateSounds();
          break;
        case 3:
          playSound3();
          updateSounds();
          break;
        case 4:
          playSound4();
          updateSounds();
          break;
        case 5:
          playSound5();
          updateSounds();
          break;
        case 6:
          playSound6();
          updateSounds();
          break;
        case 7:
          playSound7();
          updateSounds();
          break;
        case 8:
          playSound8();
          updateSounds();
          break;
        case 9:
          playSound9();
          updateSounds();
          break;
        case 10:
          playSound10();
          updateSounds();
          break;
        case 11:
          playSound11();
          updateSounds();
          break;
        case 12:
          playSound12();
          updateSounds();
          setClickCount(0);
          setSoundShouldPlay(1);
          break;
        default:
          break;
      }

      if (newClickedCount[icon] === 3) {
        setTimeout(() => {}, finishPopUpToVideoTimer);
      }

      setLastClickedIcon(icon);
    }
  };

  const updateSounds = () => {
    setSoundShouldPlay(soundShouldPlay + 1);
  };

  useEffect(() => {
    if (onLoading) {
      fadeAnim.setValue(0);
    } else {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2400,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: Platform.OS !== 'web',
      }).start();
    }
  }, [fadeAnim, onLoading]);

  const sound1 = new Howl({
    src: [require("./../assets/audio/1_C.mp3")],
    preload: true,
  });
  const sound2 = new Howl({
    src: [require("./../assets/audio/2_D.mp3")],
    preload: true,
  });
  const sound3 = new Howl({
    src: [require("./../assets/audio/3_E.mp3")],
    preload: true,
  });

  const sound4 = new Howl({
    src: [require("./../assets/audio/4_E.mp3")],
    preload: true,
  });
  const sound5 = new Howl({
    src: [require("./../assets/audio/5_F_.mp3")],
    preload: true,
  });
  const sound6 = new Howl({
    src: [require("./../assets/audio/6_G_.mp3")],
    preload: true,
  });
  const sound7 = new Howl({
    src: [require("./../assets/audio/7_G_.mp3")],
    preload: true,
  });
  const sound8 = new Howl({
    src: [require("./../assets/audio/8_A_.mp3")],
    preload: true,
  });
  const sound9 = new Howl({
    src: [require("./../assets/audio/9_C_plus.mp3")],
    preload: true,
  });

  const sound10 = new Howl({
    src: [require("./../assets/audio/10_C_plus.mp3")],
    preload: true,
  });
  const sound11 = new Howl({
    src: [require("./../assets/audio/11_D_plus.mp3")],
    preload: true,
  });
  const sound12 = new Howl({
    src: [require("./../assets/audio/12_E_plus.mp3")],
    preload: true,
  });
  const error = new Howl({
    src: [require("./../assets/audio/sfx_autopopup.wav")],
    preload: true,
  });

  const playSound1 = () => {
    sound1.play();
  };
  const playSound2 = () => {
    sound2.play();
  };
  const playSound3 = () => {
    sound3.play();
  };
  const playSound4 = () => {
    sound4.play();
  };
  const playSound5 = () => {
    sound5.play();
  };
  const playSound6 = () => {
    sound6.play();
  };
  const playSound7 = () => {
    sound7.play();
  };
  const playSound8 = () => {
    sound8.play();
  };
  const playSound9 = () => {
    sound9.play();
  };
  const playSound10 = () => {
    sound10.play();
  };
  const playSound11 = () => {
    sound11.play();
  };
  const playSound12 = () => {
    sound12.play();
  };

  const playSoundError = () => {
    error.play();
  };



  return (
    <ImageBackground source={scratchBackground} style={styles.background_view}>
      <View style={styles.container}>
        <Animated.View style={[styles.gridContainer, { opacity: fadeAnim }]}>
          {iconsArray.map((icon, index) => (
            <View key={index} style={styles.iconContainer}>
              {icon !== null && (
                <View style={styles.iconWrapper}>
                  {winningIcons.includes(icon) &&
                  !clickedIcons.includes(index) &&
                  scratched ? (
                    <AnimatedIcon
                      iconIndex={icon}
                      onClick={() => handleIconClick(index)}
                      timerGame={timerGame}
                      bobble={arrayBobble[index]}
                    />
                  ) : clickedIcons.includes(index) ? (
                    <View style={[styles.lottieContainer]}>
                      <LottieView
                        style={styles.lottieAnimation}
                        source={lottieAnimations[arrayBobble[index]]}
                        autoPlay
                        loop={false}
                        resizeMode="cover"
                      />
                    </View>
                  ) : (
                    iconComponentsDefault[icon]
                  )}
                </View>
              )}
            </View>
          ))}
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
  },
  iconContainer: {
    flexBasis: "18%",
    minWidth: "18%",
    aspectRatio: 1,
    marginTop: "1.2%",
    marginLeft: "2%",
    marginRight: "2%",
    boxSizing: "border-box",
  },
  iconWrapper: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  lottieContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  lottieAnimation: {
    width: "100%",
    height: "100%",
  },
  background_view: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    flex: 1,
    resizeMode: "cover",
  },
});

export default ScratchGame;
