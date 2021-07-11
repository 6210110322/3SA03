import React from 'react';
import Card from './Card.js';

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
            firstCard: null,
        }
    }

    flipCardTo(cardIndex, faceUp){
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

    flip(cardIndex){
        if(this.state.firstCard === null){
            this.setState({firstCard: cardIndex});

        }else{
            const firstCardContent = this.state.deck[this.state.firstCard].content;
            const secondCardContent = this.state.deck[cardIndex].content;
            if(firstCardContent === secondCardContent){
                this.setState({firstCard: null});
            }else{
                setTimeout(() => {
                    this.flipCardTo(this.state.firstCard, false)
                    this.flipCardTo(cardIndex, false)
                    this.setState({firstCard: null});
                }, 1000)
            }
        }

        this.flipCardTo(cardIndex, this.state.deck[cardIndex].faceUp)

    }

    render(){
        console.log(this.state.firstCard);
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