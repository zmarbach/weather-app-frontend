import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { ICity, City } from '../models';


@Injectable({
    providedIn: 'root'
  })
  export class WeatherService{
    private baseUrl = environment.baseUrl;
    
    constructor(private httpClient: HttpClient){
      
    }

    getCityWeatherInfoByCityName(cityName: String) : Promise<City>{
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

      return this.httpClient.get<City>(`${this.baseUrl}/search/${cityName}`, {headers: headers})
        .toPromise()
        .then(city => new City(city));
    }



  } 