import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private httpClient: HttpClient) { }

  public recuperarInfo(): Observable<any> {
    return this.httpClient.get<any>('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-09-15');
  }
}
