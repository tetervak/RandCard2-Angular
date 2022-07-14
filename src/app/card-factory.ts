import {Card} from "./card";

export class CardFactory{

  // these arrays are used to generate the random card names
  private static SUITS = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
  private static FACES = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
    'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

  get randomCard(): Card {
    const rand = Math.floor(52 * Math.random());
    return CardFactory.makeCard(rand);
  }

  private static makeCard(index: number): Card {
    const card = new Card();
    // the name of the card determined via the math trick
    card.number = index + 1;
    card.face = CardFactory.FACES[index % 13];
    card.suit = CardFactory.SUITS[Math.floor(index / 13)];
    card.name = `${card.face} of ${card.suit}`;
    return card;
  }
}
