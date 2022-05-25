import { createContext, useState } from "react";

export const FilledByContext = createContext({});

export const FilledByProvider = (props) => {
  // 何でも囲めるようにPropsとしてchildrenを受け取るようにする。
  const { children, boxSize } = props;

  const [filledBy, setFilledBy] = useState(Array(boxSize**2).fill("　"))//盤面の状態を表す
  const [currentPlayerNum, setCurrentPlayerNum] = useState(0)//現在のプレイヤー番号を表す
  const [winner, setWinner] = useState("")//勝者を表す
  const[isStarted,setIsStarted] = useState(false) //ゲームがスタートしたかどうかを表す

  return (
    // AdminFlagContextには、Providerが用意されているのを返却する。
    // valueの中にグローバルに扱う実際の値を設定する
    <FilledByContext.Provider value={{filledBy,setFilledBy,currentPlayerNum,setCurrentPlayerNum, winner, setWinner, isStarted, setIsStarted}}>
      {children}
    </FilledByContext.Provider>
  );
};