import {React,useContext} from 'react'
import { FilledByContext } from '../providers/FilledByProvider'
import { getCurrentPlayer } from './GameBoard'

export const Box = (props) => {
  const {filledBy, setFilledBy, currentPlayerNum, setCurrentPlayerNum} = useContext(FilledByContext)
  const {filledByIndex} = props

  const fill = ()=>{
    {/*
    //これだと、splice が破壊的なのでダメ
    // filledBy を直接編集していることになってしまう
    filledBy.splice(filledByIndex,1,currentPlayer)
    setFilledBy(filledBy)
  */}
    if(filledBy[filledByIndex]!="　"){
      return
    }
    const filled = Array.from(filledBy)
    filled.splice(filledByIndex,1,getCurrentPlayer(currentPlayerNum))
    setFilledBy(filled)
    setCurrentPlayerNum(currentPlayerNum+1)
  }

  return (
    <td onClick={fill}>{filledBy[filledByIndex]}</td>
  )
}