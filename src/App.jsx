import './styles.scss'
import { useState } from "react"
import Board from './components/Board'
import { calculateWinner } from './winner'
import History from './components/History'
import StatusMessage from './components/StatusMessage'

const NEW_GAME=[{squares:Array(9).fill(null), isXnext:false}]


function App() {

  const[history,setHistory]=useState(NEW_GAME)
  const[currentMove,setCurrentMove]=useState(0)

  const gamingBoard=history[currentMove]

  const {winner,winningSquares}=calculateWinner(gamingBoard.squares)
  
  const handleSquareClick=clickedPosition=>{
    //null,x,0src/components/Board.jsx
  
    if(gamingBoard.squares[clickedPosition]||winner){
      return
    }
  
    setHistory(currentHistory=>{

      const isTraversing=currentMove+1 !==currentHistory.length

      const lastGamingState=isTraversing? currentHistory[currentMove]: 
      history[history.length-1]

      const nextSquareState=lastGamingState.squares.map((squareValue,position)=>{
  
         if(clickedPosition==position)
         {
          return lastGamingState.isXnext? 'X': '0'
         }
         return squareValue
      })

      const base= isTraversing ? currentHistory.slice(0,currentHistory.indexOf(lastGamingState)+1):currentHistory

      return base.concat({squares:nextSquareState, 
        isXnext:!lastGamingState.isXnext})
    })
    setCurrentMove(move=>move+1)
   }

   const moveTo=move=>{
    setCurrentMove(move)
   }

  const onNewGameStart=()=>{
    setHistory(NEW_GAME)
    setCurrentMove(0)
  }

  return ( 
  <div className="app">
    <h1>TIC <span className="text-green">TAC</span> TOE</h1>
    <StatusMessage winner={winner} gamingBoard={gamingBoard}/>
    <Board squares={gamingBoard.squares} 
    handleSquareClick={handleSquareClick}
    winningSquares={winningSquares}
    />


    <button type="button"  className={`btn-reset ${winner?"active":""}`} onClick={onNewGameStart}>Start new Game</button>

     <h4 style={{fontWeight:"normal"}}>Current Game History</h4>
     <History history={history} moveTo={moveTo} currentMove={currentMove}/>
  </div>
  )
}

export default App
 