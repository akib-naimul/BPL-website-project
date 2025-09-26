import React, { useState } from 'react';

const PlayerCard = ({player, setavailableBalance, availableBalance}) => {
    const [isSelected, setIsSelected]= useState(false)

    const handleSelected = (playerData) =>{
        const playerPrice = parseInt(playerData.price)
        if(availableBalance < playerPrice){
            alert("Not have Sufficient Coins")
            return 
        }
         setIsSelected(true);setavailableBalance(availableBalance - playerPrice
         )
    }
    return (
             <div className="card bg-base-100 shadow-sm p-4">
  <figure>
    <img className='w-full h-[300px] object-cover'
      src={player.player_img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{player.player_name}</h2>
    
    <div className='flex justify-between font-bold'><span>Rating</span>
    <span>{player.rating}</span></div>

    <div className='flex justify-between font-bold'><span>{player.batting_style}</span>
    <span>{player.bowling_style}</span></div>
    <div className="card-actions mt-4 flex justify-between items-center">
        <p>Price: {player.price}</p>
      <button disabled={isSelected} onClick={()=>{handleSelected(player)}} className="btn ">{isSelected ? "Selected": "Choose Player"}</button>
    </div>
  </div>
             </div>
    );
};

export default PlayerCard;