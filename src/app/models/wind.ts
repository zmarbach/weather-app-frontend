import { IWind } from './wind-interface';

export class Wind implements IWind {
    speed: number;

    constructor(wind:Wind){
        this.speed = wind.speed;
    }
}