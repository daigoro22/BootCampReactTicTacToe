import {React,useContext} from 'react'
import { FilledByContext } from '../providers/FilledByProvider'

export const PlayerSelector = (props) =>{
  const {players} = props
  const {filledBy, setFilledBy, currentPlayerNum, setCurrentPlayerNum,winner,setWinner} = useContext(FilledByContext)

  return (
    <div>
    <p>先行プレイヤー</p>
    {
    players.map(
      (p,i)=>{return (
        <div>
          <input type="radio" id={p} value={p} name="players" onClick={()=>setCurrentPlayerNum(i)}></input>
          <label>{p}</label>
          </div>)
        })
    }
    </div>
  )
}