import React, { useContext, useEffect, useState } from 'react'
import { FilledByProvider, FilledByContext } from '../providers/FilledByProvider'

import Box from './Box'

function getNextPlayer (currentPlayer){
  return (currentPlayer=="○")?"✗":"○"
}

function GameBoard() {
  const filledBy = useContext(FilledByContext)
  const [currentPlayer, setCurrentPlayer] = useState("○")
  
  {/*
  useEffect(
    setCurrentPlayer(getNextPlayer(currentPlayer))
  ,[filledBy])
  */}

  return (
    <table>
      <tbody>
        <tr>
        <FilledByProvider playerSize={2}>
          <Box filledByIndex={0} currentPlayer={currentPlayer}></Box>
        </FilledByProvider>
        </tr>
      </tbody>
    </table>
    )
}

export default GameBoard