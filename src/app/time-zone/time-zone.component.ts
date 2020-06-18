import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.css']
})
export class TimeZoneComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  selectedLocation: string;

  timeZones = [
    "Europe/Warsaw",
    "America/New_York",
    "Asia/Tokyo",
    "Australia/Sydney",
    "Africa/Cairo"
  ];

  changeLocation = (location: string) => {
    this.selectedLocation = location;
  }

}
