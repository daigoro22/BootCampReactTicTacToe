import React, { useContext, useEffect, useState } from 'react'
import { FilledByProvider, FilledByContext } from '../providers/FilledByProvider'
import {Box} from './Box'

const players = ["○","✗"]

export const getCurrentPlayer = (pNum)=>{
  if(pNum>players.length-1){
    return players[pNum%players.length]
  }else{
    return players[pNum]
  }
}

export const GameBoard = ()=> {
  return (
    <table>
      <tbody>
        <tr>
        <FilledByProvider playerSize={2}>
          <Box filledByIndex={0}></Box>
          <Box filledByIndex={1}></Box>
          <Box filledByIndex={2}></Box>
        </FilledByProvider>
        </tr>
      </tbody>
    </table>
    )
}