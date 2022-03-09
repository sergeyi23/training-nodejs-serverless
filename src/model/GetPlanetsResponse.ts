import { PlanetEntity } from 'src/core/db/entities/PlanetEntity';

import { Planet } from './Planet';

export class GetPlanetsResponse {
  public planets: Planet[];

  constructor(planets: PlanetEntity[]) {
    this.planets = planets.map((pl) => new Planet(pl.id, pl.name, pl.active));
  }
}
