import React, { Component } from "react";
import './card.styles.css';

class Card extends Component {

    render() {
        const { id, name, email } = this.props.monster

        return (
            <div className='card-container'>
                <img 
                    src={`https://robohash.org/${id}?set=set2&size=180x180`} 
                    alt={`Monster ${name}`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card;
