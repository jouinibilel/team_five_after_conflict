import React , {useState, useEffect}  from "react";

import "./Cards.css";
import CardItem from "./CardItem.jsx";
import axios from "axios";
import ret from "bluebird/js/release/util";
function Cards() {
  
    var [games,setdata] = useState([]);

    useEffect(()=>{axios.get("http://localhost:5000/api/games").then(({data})=>{
       
        setdata(data)
        console.log(games ,"hooks data")
        
    }).catch(err=>{console.log(err);})

},[])
/////check redering after addin a game

    return (
        <div className="cards">
            <h1>Check out these EPIC GAMES!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">


     {games.map((game,i)=>{

         if(i%3===0)
          return( <ul className="cards__items">
          <CardItem
              src={game.img}
              text={game.gameName}
              label={game.price}
              path="/services"
          />
             <CardItem
              src={game.img}
              text={game.gameName}
              label={game.price}
              path="/services"
          />
             <CardItem
              src={game.img}
              text={game.gameName}
              label={game.price}
              path="/services"
          />
      </ul>)
      return (<ul className="cards__items">
      <CardItem
          src={game.img}
          text={game.gameName}
          label={game.price}
          path="/services"
      />
  </ul>)
     })}
                    <ul className="cards__items">
                        <CardItem
                            src="images/fortnite.jpg"
                            text="       Fortnite           "
                            label="Shooter"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/battlefield.jpeg"
                            text="               BattleField        "
                            label="Shooter"
                            path="/services"
                        />
                        <CardItem
                            src="images/Valorant.jpg"
                            text="               Valorant          "
                            label="Adventure"
                            path="/products"
                        />
                        <CardItem
                            src="images/pubg.png"
                            text="PUBG player uknown battlegrounds"
                            label="Survival shooter"
                            path="/sign-up"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
