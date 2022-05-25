import {GameBoard} from './tic-tac-toe/GameBoard'
import {FilledByProvider} from './providers/FilledByProvider'

export const players = ["😡","😭"]//TODO: プレイヤーが選択できるようにする
export const boxSize = 3 //TODO: プレイヤーが選択できるようにする

function App() {

  return (
    <div className="App">
      <FilledByProvider boxSize={boxSize}>
      <GameBoard></GameBoard>
      </FilledByProvider>
    </div>
  )
}

export default App
