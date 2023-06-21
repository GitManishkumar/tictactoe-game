import React from "react"
const StatusMessage=({isXnext,winner,squares})=>{

const noMovesLeft=squares.every(squareValue=>squareValue!==null)

  const nextPlayer=isXnext? 'X':'0'

  const renderdStatusMessage=()=>{
    if(winner){
      return <>
        winner is{' '} 
      <span className={winner=="X"? "text-green":"text-orange"}>{winner}</span>
      </>
    }

    if(!winner&&noMovesLeft){
      return <>
              <span className="text-orange">0</span> and{''}
              <span className="text-green">X</span> tied
              </>
    }

    if(!winner&&!noMovesLeft){
      return <>
        next player is <span className={isXnext? "text-green":"text-orange"}>{nextPlayer}</span>
        </>
    }

    return null

  }

  return <h2 className="status-messag">
    {renderdStatusMessage()}
    </h2>
}
export default StatusMessage