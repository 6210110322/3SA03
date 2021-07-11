import React from 'react';
import Card from './Card.js';
import './Board.css'

function Board(){
    const fronts = [
        '🍕',
        '🍔',
        '🍟',
        '🥪',
        '🍝',
        '🍨',
        '🍰',
        '🍮',
        '🍫',
        '🍩',
    ]

    const deck = fronts.concat(fronts).sort(() => Math.random() - 0.5)

    return(
        fronts.map((f) => {
            return(
                <div className="Board">
                    <Card content={f} />
                    <Card content={f} />
                </div>
            )
        })
    )
}

export default Board;