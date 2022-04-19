import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/model/quote';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newQuote = new Quote(0, '', '', '', 0, 0, new Date())
  @Output() addQuote = new EventEmitter<Quote>();

  submitGoal() {
    this.addQuote.emit(this.newQuote);

    //Reset Form
    this.newQuote = new Quote(0, '', '', '', 0, 0, new Date())
  }
  constructor() { }

  ngOnInit(): void {
  }

}
