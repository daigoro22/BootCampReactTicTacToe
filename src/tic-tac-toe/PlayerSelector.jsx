import {React,useContext} from 'react'
import { FilledByContext } from '../providers/FilledByProvider'
import { InputGroup } from 'react-bootstrap'
import { DropdownButton } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'

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
    <InputGroup>
    <DropdownButton variant="outline-primary" title="先攻プレイヤーを選択">
    {
    players.map(
      (p,i)=>{return (
          <DropdownItem onClick={()=>selectorOnClick(i)}>{p}</DropdownItem>
        )
        })
    }
    </DropdownButton>
    </InputGroup>
    </div>
  )
}