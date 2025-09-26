import React, { use } from 'react';

const AvailablePlayers = ({playersPromise}) => {
    const playerData = use(playersPromise)
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                playerData.map(player=><div className="card bg-base-100 shadow-sm p-4">
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
      <button className="btn ">Choose Player</button>
    </div>
  </div>
             </div>)
            }
            
        </div>
    );
};

export default AvailablePlayers;