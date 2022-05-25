import {React,useContext} from 'react'
import { FilledByContext } from '../providers/FilledByProvider'

export const PlayerSelector = (props) =>{
  const {players} = props
  const {setCurrentPlayerNum,isStarted} = useContext(FilledByContext)

  const selectorOnClick = (i)=>{
    if(isStarted){
      return
    }
    setCurrentPlayerNum(i)
  }

  return (
    <div>
    <p>先行プレイヤー</p>
    {
    players.map(
      (p,i)=>{return (
        <div>
          <input type="radio" id={p} value={p} name="players" onClick={()=>selectorOnClick(i)} defaultChecked={i==0}></input>
          <label>{p}</label>
          </div>)
        })
    }
    </div>
  )
}