import React from 'react';
import './Card.css';

class Card extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            faceUp: false,
        };
    }

    flip(){
        this.setState({ faceUp: !this.state.faceUp })
    }
    
    render(){
        let content;

        if(this.state.faceUp){
            content = this.props.content;
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