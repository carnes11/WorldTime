import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldTimeApiService {

  constructor(private http: HttpClient) { }

  getTime = (location) => {
    return this.http.get('http://worldtimeapi.org/api/timezone/' + location);
  }
}
