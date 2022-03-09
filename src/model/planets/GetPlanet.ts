import { PlanetEntity } from 'src/core/db/entities/PlanetEntity';
import { Planet } from './Planet';

export class GetPlanetRequest {
  public id: string;

  constructor(req: any) {
    this.id = req.params.id;
  }
}

export class GetPlanetResponse {
  public planet: Planet;

  constructor(planet: PlanetEntity) {
    this.planet = new Planet(planet.name, planet.diameter);
  }
}