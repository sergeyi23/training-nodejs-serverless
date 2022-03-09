import { PlanetEntity } from 'src/core/db/entities/PlanetEntity';
import { Planet } from './Planet';

export class GetPlanetsRequest {
  public _req: any;

  constructor(req: any) {
    this._req = req;
  }}

export class GetPlanetsResponse {
  public planets: Planet[];

  constructor(planets: PlanetEntity[]) {
    this.planets = planets.map((pl) => new Planet(pl.name, pl.diameter));
  }
}