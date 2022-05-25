import {GameBoard} from './tic-tac-toe/GameBoard'
import {FilledByProvider} from './providers/FilledByProvider'
import {PlayerSelector} from './tic-tac-toe/PlayerSelector'
import 'bootstrap/dist/css/bootstrap.min.css';

export const players = ["💩","😭"]//TODO: プレイヤーが選択できるようにする
export const boxSize = 3//TODO: プレイヤーが選択できるようにする

function App() {

  return (
    <div className="App">
      <FilledByProvider boxSize={boxSize}>
      <PlayerSelector players={players}></PlayerSelector>
      <GameBoard></GameBoard>
      </FilledByProvider>
    </div>
  )
}

export default App
