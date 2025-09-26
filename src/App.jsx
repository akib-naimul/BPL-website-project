
import { Suspense } from 'react'
import './App.css'

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const fetchPlayers = async () =>{
  const res = await fetch("/players.json")
  return res.json()
}

function App() {
  const playersPromise = fetchPlayers()
  

  return (
    <>
      
    <Navbar></Navbar>
    <div className=' max-w-[1200px] mx-auto flex justify-between items-center'>
      <h1 className='font-bold text-2xl'>Available Players</h1>

       <div>
        <button className='py-3 px-4 border-l border-grey-400 rounded-l-2xl border-r-0 bg-amber-950'>Selected <span>(0)</span></button>
        <button className='py-3 px-4 border-l border-grey-400 rounded-l-2xl border-l-0'>Available</button>
       </div>

    </div>
       
    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <AvailablePlayers playersPromise={playersPromise} ></AvailablePlayers>
    </Suspense>


    <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
