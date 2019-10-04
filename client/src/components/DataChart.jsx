import React from 'react'
import { VictoryBar, VictoryChart } from 'victory';

export const DataChart = props => {
    const data = [
    ];

    /*     const tallyData = () => {
            let newData = []
            props.playerData.ForEach(player => {
                newData.forEach(elem, index => {
                    if (player.country in newData[index]) {
                        newData[index][searches] += player.searches
                    }
                    else {
    
                    }
                })
            })
        } */


    return (
        <div className='victory_chart'>
            <VictoryChart>
                <VictoryBar
                    data={data}
                    x="country"
                    y="searches"
                />
            </VictoryChart>
        </div>
    )
}