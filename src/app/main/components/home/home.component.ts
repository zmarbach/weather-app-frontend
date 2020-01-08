import { Component, OnInit } from '@angular/core';
import { City, Weather, Main } from 'src/app/models';
import { WeatherService } from 'src/app/services/weather-service';
import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  city:City;

  searchedName:string;

  isFarenheit: boolean;

  currentTime: Date = new Date();

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    //maybe load default data for city based on current location?
  }

  searchByCityName() {
    this.weatherService.getCityWeatherInfoByCityName(this.searchedName)
      .then((city) => {
        this.city = this.convertDegreesToFarenheitFromKelvin(city);
      });

  }

  convertDegreesToFarenheitFromKelvin(city: City): City{
    city.main.temp = (city.main.temp - 273.15) * 9/5 + 32;
    city.main.feels_like = (city.main.feels_like - 273.15) * 9/5 + 32;
    city.main.temp_min = (city.main.temp_min- 273.15) * 9/5 + 32;
    city.main.temp_max = (city.main.temp_max - 273.15) * 9/5 + 32;

    this.isFarenheit = true;

    return city;
  }

  //add method to convert farenheit to Celius
  //convertBetweenCeliusAndFarenheit(){
      //if isFarenheit (then run math to convert to C)
      //else run math to conver to F

}
