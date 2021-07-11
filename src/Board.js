import React from 'react';
import Card from './Card.js';
import './Board.css'

class Board extends React.Component{
    constructor(props){
        super(props)
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
        .map(f => {return{
            content: f,
            faceUp: false,
        }})
        this.state = {
            deck: deck,
        }
    }

    flip(cardIndex){
        this.setState({
            deck: this.state.deck.map((f, i) => {
                if(i === cardIndex){
                    return {
                        content: f.content,
                        faceUp: !f.faceUp,
                    }
                }else{
                    return f;
                }
            })
        })
    }

    render(){
        return(
            this.state.deck.map((f, i) => {
                return(
                    <div className="Board">
                        <Card flip={() => {this.flip(i)}} content={f.content} faceUp={f.faceUp} />
                    </div>
                )
            })
        )
    }
}

export default Board;