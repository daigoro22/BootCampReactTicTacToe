import { createContext, useState } from "react";

export const FilledByContext = createContext({});

export const FilledByProvider = (props) => {
  // 何でも囲めるようにPropsとしてchildrenを受け取るようにする。
  const { children, boxSize } = props;

  const [filledBy, setFilledBy] = useState(Array(boxSize**2).fill("　"))
  const [currentPlayerNum, setCurrentPlayerNum] = useState(0)

  return (
    // AdminFlagContextには、Providerが用意されているのを返却する。
    // valueの中にグローバルに扱う実際の値を設定する
    <FilledByContext.Provider value={{filledBy,setFilledBy,currentPlayerNum,setCurrentPlayerNum}}>
      {children}
    </FilledByContext.Provider>
  );
};