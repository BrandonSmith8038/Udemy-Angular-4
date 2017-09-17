import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  
  questions:Object[];

  constructor() { 
    this.questions = [
      {
        text:'What is your name',
        answer:'My name is brad'
      },
      {
        text:'What is your favorite color',
        answer:'My favorite color is blue'
      },
      {
        text:'What is your favorite language',
        answer:'My favorite language is Javascript'
      }
      ];
  }

  ngOnInit() {
  }

}
