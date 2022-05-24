import {React,useContext} from 'react'

import { FilledByContext } from '../providers/FilledByProvider'

export const Box = (props) => {
  const {filledBy, setFilledBy} = useContext(FilledByContext)
  const {filledByIndex, currentPlayer} = props

  const fill = ()=>{
    {/*
    //これだと、splice が破壊的なのでダメ
    // filledBy を直接編集していることになってしまう
    filledBy.splice(filledByIndex,1,currentPlayer)
    setFilledBy(filledBy)
  */}
    const filled = Array.from(filledBy)
    filled.splice(filledByIndex,1,currentPlayer)
    setFilledBy(filled)
  }

  return (
    <td onClick={fill}>{filledBy[filledByIndex]}</td>
  )
}

export default Box