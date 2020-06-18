import { Component, OnInit } from '@angular/core';
import { WorldTimeApiService } from '../services/world-time-api.service';

@Component({
  selector: 'app-time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.css']
})
export class TimeZoneComponent implements OnInit {

  constructor(private worldTimeApiService:WorldTimeApiService) { }

  ngOnInit(): void {
  }

  selectedLocation: Date;
  loading = false;

  timeZones = [
    "Europe/Warsaw",
    "America/New_York",
    "Asia/Tokyo",
    "Australia/Sydney",
    "Africa/Cairo"
  ];

  getTime = (data) => {
    this.loading = true;
    this.worldTimeApiService
    .getTime(data)
    .subscribe(res => {
      this.loading = false;
      this.changeLocation(res);
    });
  }

  changeLocation = (data) => {
    this.selectedLocation = new Date(data.datetime.slice(0,19));
  }

  onButtonGroupClick($event){
    let clickedElement = $event.target || $event.srcElement;
    if( clickedElement.nodeName === "BUTTON" ) {
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }
      clickedElement.className += " active";
    }
  }

}
