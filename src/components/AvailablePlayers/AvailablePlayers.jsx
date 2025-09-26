import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({playersPromise}) => {
    const playerData = use(playersPromise)
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                playerData.map(player=> <PlayerCard player={player}></PlayerCard>)
            }
        </div>
        
    );
};

export default AvailablePlayers;