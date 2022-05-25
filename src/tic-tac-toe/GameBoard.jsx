import React, { useContext, useEffect, useState } from 'react'
import { FilledByContext } from '../providers/FilledByProvider'
import {Box} from './Box'
import {players, boxSize} from '../App'

export const getCurrentPlayer = (pNum)=>{
  if(pNum>players.length-1){
    return players[pNum%players.length]
  }else{
    return players[pNum]
  }
}

function makeIndices(size,func){
  return Array(size).fill("").map(
    (_,ir)=>{
      return Array(size).fill("").map((_,ic)=>{
        return func(ir,ic)
      })
    }
  )
}

function judgeWinner(boxes){
  return boxes.map(
    arrs=>arrs.map(
      arr=>arr.reduce(
        (p,c)=>(c==p)?c:"　") // 全て同じだった場合の要素
      ).filter(
        v=>v!="　")).filter( // 空白マスは除く
          arr=>arr.length>0)[0]
}

export const GameBoard = ()=> {
  const indexArray = Array(boxSize).fill("")
  const {filledBy, setFilledBy, currentPlayerNum, setCurrentPlayerNum,winner,setWinner} = useContext(FilledByContext)

  const toFilledBy = arr=>arr.map(i=>filledBy[i])

  useEffect(()=>{
    const allBoxesToBeJudged = [
      makeIndices(boxSize,(ir,ic)=>ir*boxSize+ic).map(toFilledBy), //行ごとのマスの値
      makeIndices(boxSize,(ir,ic)=>ic*boxSize+ir).map(toFilledBy), //列ごとのマスの値
      [Array(boxSize).fill("").map((_,i)=>i*(boxSize+1))].map(toFilledBy), // 対角要素のマスの値
      [Array(boxSize).fill("").map((_,i)=>i*(boxSize-1)+(boxSize-1))].map(toFilledBy) // 逆の対角要素のマスの値
    ]

    const w = judgeWinner(allBoxesToBeJudged)
    if(w!=undefined){
      setWinner(w)// GameBoard の中で更新すると無限ループになるので、コンポーネントがレンダリングされた後で setState する必要がある
    }
  },[currentPlayerNum])// プレイヤーが変わった時のみ呼び出す

  const gameStatusMessage = (winner!="")?`${winner}さんの勝利です`:`${getCurrentPlayer(currentPlayerNum)}さんの番です`

  return (
    <div>
      <p>{gameStatusMessage}</p>
      <table>
        <tbody>
          {indexArray.map((_,ir)=>{
            return (
              <tr>
                {indexArray.map((_,id)=>{
                  return <Box filledByIndex={ir*boxSize+id}></Box>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    )
}