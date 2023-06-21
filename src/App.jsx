import './styles.scss'
import { useState } from "react"
import Board from './components/Board'
import { calculateWinner } from './winner'


function App() {
  const[squares,setSquares]=useState(Array(9).fill(null))
  const[isXnext,setIsXNext]=useState(false)

  const winner=calculateWinner(squares)
  const nextPlayer=isXnext? 'X':'0'
  const statusMessage=winner?`winner is ${winner}`:`next player is ${nextPlayer}`

  const handleSquareClick=clickedPosition=>{
    //null,x,0src/components/Board.jsx
  
    if(squares[clickedPosition]||winner){
      return
    }
  
    setSquares((currentSquares)=>{
  
      return currentSquares.map((saquareValue,position)=>{
         if(clickedPosition==position)
         {
          return isXnext? 'X': '0'
         }
         return saquareValue
      })
    })
  
    setIsXNext((currentIsXNext)=>!currentIsXNext)
  }

  return( 
  <div className="app"> 
          <h2>{statusMessage}</h2>

     <Board squares={squares} handleSquareClick={handleSquareClick}/>
  </div>
  )
}

export default App
 