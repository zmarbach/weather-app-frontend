import { Weather } from './weather';
import { Main } from './main-metrics';
import { Wind } from './wind';
import { ICity } from './city-interface';

export class City implements ICity{
    name: String;
    weather: Weather;
    main: Main;
    wind: Wind;

    constructor(city:City){
        this.name = city.name;
        this.weather = city.weather;
        this.main = city.main;
        this.wind = city.wind;
    }
}