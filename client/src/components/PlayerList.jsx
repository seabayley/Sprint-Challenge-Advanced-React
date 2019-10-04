import React from 'react'
import { PlayerCard } from './PlayerCard'

export const PlayerList = (props) => {

    return (
        <div>
            {props.playerData.map(player => {
                return <PlayerCard player={player} key={player.id} />
            })}
        </div>
    )
}