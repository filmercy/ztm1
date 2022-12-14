import { Component } from "react";

import "./Card.css";

class Card extends Component{

    render(){
        const { name, id, email } = this.props.monster;
        return(
            <div className="card-container" key={id}>
              <img
                alt={name}
                src={`https://robohash.org/${id}?set=1&size=180x180`} />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
        );
    }

}

export default Card;