import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import ScratchCardLeft from "./ScratchCardLeft";
import ScratchGame from "./ScratchGame";
import ScratchCard from "./ScratchCard";
import { eraserShouldBeScratched, heightScratch } from "../global/Settings";
import { useGame } from "../context/GameContext";

const scratchForeground = require("./../assets/image/scratch_foreground.jpg");

const ScratchLayout = ({
  reset,
  setReset,
  scratched,
  setScratched,
  setScratchStarted,
  scratchCardLeft,
  timerGame,
  setWinLuckySymbolVideo,
  setCollectLuckySymbolVideo,
  clickCount,
  setClickCount,
  nextCard,
}) => {
  const { luckySymbolCount } = useGame();

  const [imageLoading, setImageLoading] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [isLuckySymbolTrue, setIsLuckySymbolTrue] = useState(false);
  const [triggerAutoPop, setTriggerAutoPop] = useState(false);
  const [isScratchCardVisible, setIsScratchCardVisible] = useState(true);
  const [autoScratch, setAutoScratch] = useState(false);
  const [scratchedStarted, setScratchedStarted] = useState(false);

  const setScratchedCard = () => {
    if (isLuckySymbolTrue) {
      setIsLuckySymbolTrue(false);
      setTimeout(() => {
        setScratched(true);
        setIsScratchCardVisible(false);
      }, 5300);
    } else {
      setScratched(true);
      setIsScratchCardVisible(false);
    }
  };

  const handleScratch = (scratchPercentage) => {
    if (scratchPercentage >= eraserShouldBeScratched && isScratchCardVisible) {
      setScratchedCard();
    } else {
      if (scratchPercentage > 0) {
        setScratchedStarted(true);
      }
    }
  };

  useEffect(() => {
    if (reset) {
      setIsScratchCardVisible(true);
      setTriggerAutoPop(false);
      setIsWinner(false);
      setScratchedStarted(false);
      setScratched(false);
      setAutoScratch(false);
      setReset(false);
    }
  }, [reset, setReset, setScratched]);

  return (
    <View style={styles.container}>
      <View style={styles.bottomView}>
        <ScratchGame
          //score={score}
          //setScore={setScore}
          isWinner={isWinner}
          setIsWinner={setIsWinner}
          onAutoPop={triggerAutoPop}
          scratched={scratched}
          reset={reset}
          nextCard={nextCard}
          setIsLuckySymbolTrue={setIsLuckySymbolTrue}
          timerGame={timerGame}
          setWinLuckySymbolVideo={setWinLuckySymbolVideo}
          luckySymbolCount={luckySymbolCount}
          setCollectLuckySymbolVideo={setCollectLuckySymbolVideo}
          clickCount={clickCount}
          setClickCount={setClickCount}
        />
        {isScratchCardVisible && (
          <View style={styles.scratchCardContainer}>
            <ScratchCard
              setReset={setReset}
              imageSource={scratchForeground}
              autoScratch={autoScratch}
              onScratch={handleScratch}
              onLoading={setImageLoading}
              setScratchStarted={setScratchStarted}
            />
          </View>
        )}

        <Image style={styles.arrowImage} source={null} />
      </View>

      <View
        //ref={buttonRef}
        //onLayout={handleLayout}
        style={{ marginTop: 5, overflow: "hidden", alignSelf: "stretch" }}
      >
        <ScratchCardLeft scratchCardLeft={scratchCardLeft} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 12,
    marginTop: "-10%",
    //overflow: "hidden",
  },
  bottomView: {
    width: "100%",
    height: heightScratch,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  scratchCardContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  arrowImage: {
    position: "absolute",
    marginTop: 10,
    top: -10,
    zIndex: 1,
  },
  transparentVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    //height: windowHeight,
    //width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  transparentOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0)",
    // height: windowHeight,
    //width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    elevation: 10,
  },
});

export default ScratchLayout;
