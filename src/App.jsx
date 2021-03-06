import {GameBoard} from './tic-tac-toe/GameBoard'
import {FilledByProvider} from './providers/FilledByProvider'
import {PlayerSelector} from './tic-tac-toe/PlayerSelector'
import 'bootstrap/dist/css/bootstrap.min.css';

export const players = ["π‘","π­"]//TODO: γγ¬γ€γ€γΌγιΈζγ§γγγγγ«γγ
export const boxSize = 3//TODO: γγ¬γ€γ€γΌγιΈζγ§γγγγγ«γγ

function App() {

  return (
    <div className="App">
      <FilledByProvider boxSize={boxSize}>
      <PlayerSelector players={players}/>
      <GameBoard/>
      </FilledByProvider>
    </div>
  )
}

export default App
