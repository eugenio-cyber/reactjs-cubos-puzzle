import React, { useState } from "react";

import cards from "../../cards";
import ImgCardBack from "../../assets/card-back.png";
import SideBar from "../../components/SideBar";
import "./style.css";

function Main() {
  const [card, setCard] = useState([...cards]);
  const [count, setCount] = useState(0);

  const handleTurned = (cardId) => {
    setCount(count + 1);

    card.forEach((element) => {
      if (element.id === cardId) {
        element.turned = true;
      }
    });

    setTimeout(verifyCards, 1000);
  };

  const verifyCards = () => {
    const otherCards = card.filter((card) => {
      return card.turned;
    });

    if (otherCards.length !== 2) {
      return;
    }

    let localCard = [...card];

    if (otherCards[0].slug !== otherCards[1].slug) {
      localCard.forEach((element) => {
        element.turned = false;
      });
    } else {
      localCard = localCard.filter((element) => {
        return element.turned === false;
      });
    }

    setCard(localCard);
    console.log(localCard);
  };

  const resetCards = () => {
    let localCard = [...cards];

    localCard.forEach((element) => {
      element.turned = false;
    });

    localCard.sort(() => {
      return Math.random() - 0.5;
    });

    setCard(localCard);
  };

  return (
    <div className="container">
      <SideBar resetCards={resetCards} />
      <div className="cards">
        {card.map((card) => {
          return (
            <div
              className="card"
              onClick={() => handleTurned(card.id)}
              key={card.id}
              style={{
                backgroundImage: `url(${
                  card.turned ? card.image : ImgCardBack
                })`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
