import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Comic } from '../models/Comic';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  API_URI = 'https://gateway.marvel.com/v1/public';
  APIKEY = '?ts=1&apikey=2a37762a73e78b33ac584ee482247bbd&hash=df5c743b8b745bdbd55be562b632ba58';

  constructor(private http: HttpClient) { }

  getComics() {
    return this.http.get(`${this.API_URI}/comics${this.APIKEY}`);
  }

}
