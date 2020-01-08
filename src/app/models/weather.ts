import { IWeather } from './weather-interface';

export class Weather implements IWeather{
    main: String;
    description: String;

    constructor(weather: Weather){
        this.main = weather.main;
        this.description = weather.description;
    }
}