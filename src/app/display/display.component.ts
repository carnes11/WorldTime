import { Component, OnChanges, Input, SimpleChanges, OnInit } from '@angular/core';
import { WorldTimeApiService } from '../services/world-time-api.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnChanges, OnInit {
  @Input() newLocation: string;

  constructor(private worldTimeApiService:WorldTimeApiService) { }

  time = new Date();

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.newLocation.currentValue) this.getTime();
  }

  ngOnInit(): void {
    setInterval(() => {
       this.time = new Date(this.time.getTime() + 1000);
    }, 1000);
  }

  getTime = () => {
    this.worldTimeApiService
    .getTime(this.newLocation)
    .subscribe(res => {
      this.displayTime(res);
    });
  }

  displayTime = (data) => {
    this.time = new Date(data.datetime.slice(0,19));
  }

}
