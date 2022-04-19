import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';
import { Quote } from '../model/quote';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() quote!: Quote;
  @Output() deleteQuote = new EventEmitter<boolean>();

  quoteDelete(sureDelete: boolean) {
    this.deleteQuote.emit(sureDelete);
  }
  upVoteQuote() {
    this.quote.upVotes++;
  }

  downVoteQuote() {
    this.quote.downVotes++;
  }
  constructor() { }


  ngOnInit(): void {
  }

}
