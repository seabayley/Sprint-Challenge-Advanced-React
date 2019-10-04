import React from 'react'
import { useToggle } from '../hooks/useToggle'

export const PlayerCard = (props) => {
    const [open, toggle] = useToggle(false);
    const name = props.player.name
    const country = props.player.country
    const searches = props.player.searches

    return (
        <div>
            <p onClick={toggle}>{props.player.name}</p>
            {open ? (<p>{name} is from {country}. She has been searched for {searches} time{searches > 1 ? 's.' : '.'}</p>) : <p />}
        </div>
    )
}