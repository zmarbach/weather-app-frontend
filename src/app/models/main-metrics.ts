import { IMain } from './main-metrics-interface';

export class Main implements IMain{
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;

    constructor(main: Main){
        this.temp = main.temp;
        this.feels_like = main.feels_like;
        this.temp_min = main.temp_min;
        this.temp_max = main.temp_max;
        this.pressure = main.pressure;
        this.humidity = main.humidity;
    }
}