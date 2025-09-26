import React, { use } from 'react';

const AvailablePlayers = ({playersPromise}) => {
    const playerData = use(playersPromise)
    return (
        <div>
            <p>Available</p>
        </div>
    );
};

export default AvailablePlayers;