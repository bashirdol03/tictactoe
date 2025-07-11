import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Button = ({children, activePlayer, grid, handleGridLog, handleGridInput, handleActivePlayer}) => {
  const [show, setShow] = useState(false)
  const [disableButton, setDisableButton] = useState(false)
  console.log(grid)
  console.log(show)

  console.log("CHILDREN")
  console.log(children)

  return (<>
    <button disabled={disableButton} onClick={() => {setShow(!show); handleGridLog(grid); handleGridInput(grid, activePlayer); handleActivePlayer(); setDisableButton(!disableButton)}}>{show && `${children}`}</button>
    </>
  )
}


function App() {

  
  const [gameOver, setGameOver] = useState(false)

  const [activePlayer, setActivePlayer] = useState("X")

  const [currentGrid, setCurrentGrid] = useState([])

  const handleActivePlayer = () => {
    console.log("inside active player")
    setActivePlayer((curActive)=>{
      return curActive === "X" ? "O" : "X"  
    })

  }

  const handleGridLog = (grid) => {
    setCurrentGrid(grid)
    
  }

  const [gameData, setGameData] = useState({
    gd0101 : "",
    gd0102 : "",
    gd0103 : "",
    gd0201 : "",
    gd0202 : "",
    gd0203 : "",
    gd0301 : "",
    gd0302 : "",
    gd0303 : "",

  })

  const handleGameOver = () => {

    const values = Object.values(gameData)
    
    
    
    const drawChecker = values.every(Boolean)
    
    

    if(gameData.gd0101 && gameData.gd0101 === gameData.gd0102 && gameData.gd0102 === gameData.gd0103 ||
      gameData.gd0201 && gameData.gd0201 === gameData.gd0202 && gameData.gd0202 === gameData.gd0203 ||
      gameData.gd0301 && gameData.gd0301 === gameData.gd0302 && gameData.gd0302 === gameData.gd0303 ||
      gameData.gd0101 && gameData.gd0101 === gameData.gd0201 && gameData.gd0201 === gameData.gd0301 ||
      gameData.gd0102 && gameData.gd0102 === gameData.gd0202 && gameData.gd0202 === gameData.gd0302 ||
      gameData.gd0103 && gameData.gd0103 === gameData.gd0203 && gameData.gd0203 === gameData.gd0303 ||
      gameData.gd0101 && gameData.gd0101 === gameData.gd0202 && gameData.gd0202 === gameData.gd0303 ||
      gameData.gd0103 && gameData.gd0103 === gameData.gd0202 && gameData.gd0202 === gameData.gd0301 
      )
      {
        setGameOver((curGameover)=>{
          return true
        })
        return setGameData({
          gd0101 : "",
          gd0102 : "",
          gd0103 : "",
          gd0201 : "",
          gd0202 : "",
          gd0203 : "",
          gd0301 : "",
          gd0302 : "",
          gd0303 : "",
      
        })
      }


      if (drawChecker) {
        setActivePlayer("NOBODY ITS A DRAW!!")
        setGameOver((curGameover)=>{
          return true
        })
        setGameData({
          gd0101 : "",
          gd0102 : "",
          gd0103 : "",
          gd0201 : "",
          gd0202 : "",
          gd0203 : "",
          gd0301 : "",
          gd0302 : "",
          gd0303 : "",
      
        })
       
       }
      
  }

  const handleGridInput = (grid, value) => {
    console.log("ACTIVEPLAYER")
    console.log(activePlayer)
    /*if(gameData.gd0101 && gameData.gd0101 === gameData.gd0102 && gameData.gd0102 === gameData.gd0103 ||
      gameData.gd0201 && gameData.gd0201 === gameData.gd0202 && gameData.gd0202 === gameData.gd0203 ||
      gameData.gd0301 && gameData.gd0301 === gameData.gd0302 && gameData.gd0302 === gameData.gd0303)
      {
        setGameOver((curGameover)=>{
          return true
        })
        return setGameData({
          gd0101 : "",
          gd0102 : "",
          gd0103 : "",
          gd0201 : "",
          gd0202 : "",
          gd0203 : "",
          gd0301 : "",
          gd0302 : "",
          gd0303 : "",
      
        })
      }*/
    setGameData((prevGameData)=>{
     return {...prevGameData, 
        [grid] : value.activePlayer}
    })
    
    console.log("GAME OVER STATUS");
    console.log(gameOver)
   
  }


  useEffect(()=>{
    console.log(gameData)
    handleGameOver()
    console.log(gameOver)
  },[gameData, gameOver])

  
  





  return (
    <>

      
      
      <h1>TIC TAC TOE</h1>
      {gameOver ? <div><h1>GAME OVER</h1> <button onClick={()=>{setGameOver(!gameOver); setActivePlayer('X');}}>Restart game, the winner is {activePlayer  === "X" ? "O" : activePlayer === "O" ? "X" : activePlayer } </button></div>:
      <>
      <div className='container'>
        <Button grid={"gd0101"} handleGridLog={handleGridLog} activePlayer={activePlayer} handleGridInput={()=>handleGridInput("gd0101", {activePlayer})} handleActivePlayer={handleActivePlayer}>{gameData.gd0101}</Button>
        <Button grid={"gd0102"} handleGridLog={handleGridLog} activePlayer={activePlayer} handleGridInput={()=>handleGridInput("gd0102", {activePlayer})} handleActivePlayer={handleActivePlayer}>{gameData.gd0102}</Button>
        <Button grid={"gd0103"} handleGridLog={handleGridLog} activePlayer={activePlayer} handleGridInput={()=>handleGridInput("gd0103", {activePlayer})} handleActivePlayer={handleActivePlayer}>{gameData.gd0103}</Button>
        <Button grid={"gd0201"} handleGridLog={handleGridLog} activePlayer={activePlayer} handleGridInput={()=>handleGridInput("gd0201", {activePlayer})} handleActivePlayer={handleActivePlayer}>{gameData.gd0201}</Button>
        <Button grid={"gd0202"} handleGridLog={handleGridLog} activePlayer={activePlayer} handleGridInput={()=>handleGridInput("gd0202", {activePlayer})} handleActivePlayer={handleActivePlayer}>{gameData.gd0202}</Button>
        <Button grid={"gd0203"} handleGridLog={handleGridLog} activePlayer={activePlayer} handleGridInput={()=>handleGridInput("gd0203", {activePlayer})} handleActivePlayer={handleActivePlayer}>{gameData.gd0203}</Button>
        <Button grid={"gd0301"} handleGridLog={handleGridLog} activePlayer={activePlayer} handleGridInput={()=>handleGridInput("gd0301", {activePlayer})} handleActivePlayer={handleActivePlayer}>{gameData.gd0301}</Button>
        <Button grid={"gd0302"} handleGridLog={handleGridLog} activePlayer={activePlayer} handleGridInput={()=>handleGridInput("gd0302", {activePlayer})} handleActivePlayer={handleActivePlayer}>{gameData.gd0302}</Button>
        <Button grid={"gd0303"} handleGridLog={handleGridLog} activePlayer={activePlayer} handleGridInput={()=>handleGridInput("gd0303", {activePlayer})} handleActivePlayer={handleActivePlayer}>{gameData.gd0303}</Button>

        

      </div>
      <h2>{currentGrid}</h2>
      </>}

      
     
        
    </>
  )
}

export default App
