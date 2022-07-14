import { Component } from '@angular/core';
import {Card} from './card';
import {CardFactory} from "./card-factory";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  card: Card;
  imageSrc: string;
  private cardFactory = new CardFactory();
  private nextCard: Card;
  private nextImage: HTMLImageElement;
  constructor() {
    this.card = this.cardFactory.randomCard;
    this.imageSrc = AppComponent.cardImageSrc(this.card.number);
    this.nextCard = this.cardFactory.randomCard;
    this.nextImage = new Image();
    this.preload();
  }
  private static cardImageSrc(num: number) : string {
    return `assets/images/cards/${num}.png`;
  }
  private preload(): void {
    this.nextImage.src = AppComponent.cardImageSrc(this.nextCard.number);
  }
  next() : void {
    this.card.copy(this.nextCard);
    this.imageSrc = AppComponent.cardImageSrc(this.card.number);
    this.nextCard = this.cardFactory.randomCard;
    this.preload();
  }
}
