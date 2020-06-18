import { Component, OnChanges, Input, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnChanges, OnInit {
  @Input() newLocation: Date;

  constructor() { }

  time = new Date();

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.newLocation.currentValue) {;
        this.displayTime(changes.newLocation.currentValue);
      }
  }

  ngOnInit(): void {
    setInterval(() => {
       this.time = new Date(this.time.getTime() + 1000);
    }, 1000);
  }

  displayTime = (data) => {
    this.time = new Date(data);
  }

}
