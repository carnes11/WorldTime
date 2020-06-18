import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldTimeApiService {

  constructor(private http: HttpClient) { }

  getTime = (location) => {
    return this.http.get('https://worldtimeapi.org/api/timezone/' + location);
  }
}
