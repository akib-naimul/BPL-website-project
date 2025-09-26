
import { Suspense, useState } from 'react'
import './App.css'

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const fetchPlayers = async () =>{
  const res = await fetch("/players.json")
  return res.json()
}

const playersPromise = fetchPlayers()

function App() {
  const [toggle, setToggle] = useState(true)

  const [availableBalance, setavailableBalance] = useState(600000000000000)

  const [purchasedPlayers, setPurchasedPlayers] = useState([])

  
  

  return (
    <>
      
    <Navbar availableBalance={availableBalance}></Navbar>
    <div className=' max-w-[1200px] mx-auto flex justify-between items-center'>
      <h1 className='font-bold text-2xl'>Available Players</h1>

       <div>
        <button onClick={()=>setToggle(true)} className={`py-3 px-4 border-l border-grey-400 rounded-l-2xl border-r-0 ${toggle === true?" bg-amber-950":""}`}>Available <span>(0)</span></button>
        <button onClick={()=>setToggle(false)} className={`py-3 px-4 border-l border-grey-400 rounded-l-2xl border-l-0 ${toggle === false?" bg-amber-950":""}`}>Selected</button>
       </div>

    </div>

    {
      toggle === true ? <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setavailableBalance={setavailableBalance} playersPromise={playersPromise} ></AvailablePlayers>
    </Suspense> : <SelectedPlayers purchasedPlayers={purchasedPlayers}></SelectedPlayers>
    }
       
    


    
    </>
  )
}

export default App
