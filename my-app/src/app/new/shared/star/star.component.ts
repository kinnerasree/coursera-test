import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  // @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
  onClick(): void {
    console.log(`the rating ${this.rating} was clicked! `)
  }
  // onClick(){
  //   this.notify.emit('clicked!');
  // }
  ngOnInit() {
  }

}
