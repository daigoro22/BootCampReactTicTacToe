import React, { useContext, useEffect, useState } from 'react'
import { FilledByProvider, FilledByContext } from '../providers/FilledByProvider'
import {Box} from './Box'

const players = ["○","✗"]//TODO: プレイヤーが選択できるようにする
const boxSize = 5 //TODO: プレイヤーが選択できるようにする

export const getCurrentPlayer = (pNum)=>{
  if(pNum>players.length-1){
    return players[pNum%players.length]
  }else{
    return players[pNum]
  }
}

export const GameBoard = ()=> {
  const indexArray = Array(boxSize).fill("")

  return (
    <table>
      <tbody>
      <FilledByProvider boxSize={boxSize}>
        {indexArray.map((_,ir)=>{
          return (
            <tr>{indexArray.map((_,id)=>{
              return <Box filledByIndex={ir*boxSize+id}></Box>
            })}
            </tr>
          )
        })}
        </FilledByProvider>
      </tbody>
    </table>
    )
}