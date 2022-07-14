export class Card {

  number: number = 1;
  face: string = 'Ace';
  suit: string = 'Spades';
  name: string = 'Ace of Spades';

  // generate a random card info
  constructor() {
  }

  copy(card: Card): void {
    this.number = card.number;
    this.face = card.face;
    this.suit = card.suit;
    this.name = card.name;
  }
}
