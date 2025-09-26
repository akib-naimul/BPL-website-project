import React from 'react';

const SelectedCard = ({player}) => {
    return (
        
            <div className='border-2 border-grey-400 p-3 flex justify-between items-center'>
                <div><img src={player.player_img} className='h-[50px] w-[50px] rounded-2xl' alt="" /></div>
                
                <div className='ml-2'>
                    <h1>{player.player_name}</h1>
                    <p className='text-xs'>{player.batting_style}</p>
                </div>
                <div><button>Delete</button></div>
            </div>
            
    
    );
};

export default SelectedCard;