import React from "react";
import Card from "../card/Card";
import "./cardList.css";    

const CardList = (props) =>{
    return (
        <div className="card-list">
             {props.monsters.map(monsters => (
              <Card key={monsters.id} monsters={monsters}/>
            ))}
        </div>
    )
}


export default CardList;