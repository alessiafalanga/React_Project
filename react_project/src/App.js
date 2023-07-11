//sembra un html ma in realtà è codice JSX:
//className è una proprietà o prop
import Navbar from "./components/navbar";
import Card from "./components/card";
import React, { Component } from "react";

import nighiri from './img/nighiri.jpg';
import bool from './img/bool.jpg';
import hossomaki from './img/hossomaki.jpg';
import nighiriSet from './img/nighiri set.jpg';
import rollTonno from './img/roll tonno.jpg';
import roll from './img/roll.jpg';
import spicyRoll from './img/spicy roll.jpg';
import udon from './img/udon.jpg';




class App extends Component{ 
  state = {
    cards:[ 
      { id: 0, nome: "Nighiri", prezzo: 1.99, immagine: nighiri, quantità: 0 }, //oggetto JS
      { id: 1, nome: "Bool", prezzo: 7.99, immagine: bool, quantità: 0 },
      { id: 2, nome: "Hossomaki", prezzo: 7.99, immagine: hossomaki, quantità: 0 },
      { id: 3, nome: "Nighiri Set", prezzo: 4.99, immagine: nighiriSet, quantità: 0 },
      { id: 4, nome: "Roll Tonno", prezzo: 5.99, immagine: rollTonno, quantità: 0 },
      { id: 5, nome: "Roll", prezzo: 6.99, immagine: roll, quantità: 0 },
      { id: 6, nome: "Spicy Roll", prezzo: 6.99, immagine: spicyRoll, quantità: 0 },
      { id: 7, nome: "Udon", prezzo: 6.99, immagine: udon, quantità: 0 },

  ]}


//funzione per eliminare la card 
handleDelete= cardId => {
  const cards = this.state.cards.filter(card => card.id !== cardId);
  this.setState({ cards });//aggiorna stato
}

handleIncrement = card => {
  const cards = [...this.state.cards];
  const id = cards.indexOf(card);
  cards[id] = { ...card };
  cards[id].quantità++;
  this.setState({ cards });
}

  render(){
    return ( //per inserire componenti e HTML nello stesso return, devo inserire tutto in tag vuoti <> </>
    <> 
      <Navbar/> 
      <div className="container">
        <h1>Cosa desideri ordinare?</h1>
        <hr/>
        <div className="row">
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                onDelete={this.handleDelete} //elimina quando clicco sul pulsante.
                onIncrement={this.handleIncrement}
                card={card} />
            ))}
        </div>
      </div>
    </>
    );
  }
}

export default App; // il componente va sempre esportato
//per vederlo a schermo, va renderizzato (vai in index,js)