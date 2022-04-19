import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Life isn\'t about getting and having, it\'s about giving and being.', 'Kevin Kruse', 'Kevin Kruse', 0, 0, new Date()),
    new Quote(2, 'Whatever the mind of man can conceive and believe, it can achieve.', 'Napoleon Hill', 'Napoleon Hill', 0, 0, new Date()),
    new Quote(3, 'Strive not to be a success, but rather to be of value.', 'Albert Einstein', 'Albert Einstein', 0, 0, new Date()),
    new Quote(4, 'I attribute my success to this: I never gave or took any excuse.', 'Florence Nightingale', 'Florence Nightingale', 0, 0, new Date()),
  ];
  prevNum!: number;
  lastNum!: number;

  toggleDetails(index: number) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }

  deleteQuoteFunction(deleteQuote: boolean, index: number) {
    if (deleteQuote) {
      this.quotes.splice(index, 1);
    }
  }

  highestUpVote() {
    this.prevNum = 0;
    this.lastNum = 0;
    for (let i = 0; i < this.quotes.length; i++) {
      this.lastNum = this.quotes[i].upVotes;
      if (this.lastNum > this.prevNum) {
        this.prevNum = this.lastNum;
      }
    }
    return this.prevNum;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
