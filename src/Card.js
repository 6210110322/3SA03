import React from 'react';
import './Card.css';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            faceUp: false,
        };
    }

    flip(){
        console.log(`Flipping from ${this.state.faceUp}`);
        this.setState({ faceUp: !this.state.faceUp })
        console.log(`Flipped to ${this.state.faceUp}`);
    }
    
    render(){
        let content;

        if(this.state.faceUp){
            content = '🍕'
        }else{
            content = 'test'
        }

        return(
            <div className="Card" onClick={this.flip.bind(this)}>
                {content}
            </div>
        )
    } 
}

export default Card;