import React, { useContext, useEffect, useState } from 'react'
import { FilledByContext } from '../providers/FilledByProvider'
import {Box} from './Box'
import {players, boxSize} from '../App'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

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

function judgeWinner(toBoxFunc){
  const boxes = [
    makeIndices(boxSize,(ir,ic)=>ir*boxSize+ic).map(toBoxFunc), //行ごとのマスの値
    makeIndices(boxSize,(ir,ic)=>ic*boxSize+ir).map(toBoxFunc), //列ごとのマスの値
    [Array(boxSize).fill("").map((_,i)=>i*(boxSize+1))].map(toBoxFunc), // 対角要素のマスの値
    [Array(boxSize).fill("").map((_,i)=>i*(boxSize-1)+(boxSize-1))].map(toBoxFunc) // 逆の対角要素のマスの値
  ]

  const w =  boxes.map(
    arrs=>arrs.map(
      arr=>arr.reduce(
        (p,c)=>(c==p)?c:"　") // 全て同じだった場合の要素
      ).filter(
        v=>v!="　")).filter( // 空白マスは除く
          arr=>arr.length>0)[0]

    if(w!=undefined){//勝者が決まった場合
      return w
    }

    return (boxes[0].every(arr=>arr.filter(v=>v!="　").length==boxSize))?"引き分け":undefined
}

export const GameBoard = ()=> {
  const indexArray = Array(boxSize).fill("")
  const {filledBy, setFilledBy, currentPlayerNum, setCurrentPlayerNum,winner,setWinner,isStarted,setIsStarted} = useContext(FilledByContext)

  const toFilledBy = arr=>arr.map(i=>filledBy[i])

  useEffect(()=>{
    const w = judgeWinner(toFilledBy)

    if(w!=undefined){
      setWinner(w)// GameBoard の中で更新すると無限ループになるので、コンポーネントがレンダリングされた後で setState する必要がある
    }
  },[currentPlayerNum])// プレイヤーが変わった時のみ呼び出す

  let gameStatusMessage = ""
  if(winner==""){
    gameStatusMessage = `${getCurrentPlayer(currentPlayerNum)}さんの番です`
  }else if(winner!="引き分け"){
    gameStatusMessage = `${winner}さんの勝利です`
  }else{
    gameStatusMessage = "引き分けです"
  }

  const resetGame=()=>{
    setFilledBy(Array(boxSize**2).fill("　"))
    setCurrentPlayerNum(0)
    setWinner("")
    setIsStarted(false)
  }

  const startButtonOnClick=()=>{
    if(isStarted){
      resetGame()
      return
    }
    setIsStarted(true)
  }

  return (
    <div>
      <Button variant="outline-primary" onClick={startButtonOnClick}>{(!isStarted)?"ゲームスタート":"リセット"}</Button>
      <p>{gameStatusMessage}</p>
      <Table  bordered hover>
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
      </Table>
    </div>
    )
}