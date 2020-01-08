import { Weather } from './weather';
import { Main } from './main-metrics';
import { Wind } from './wind';

export interface ICity{
    name: String;
    weather: Weather;
    main: Main;
    wind: Wind;
}