import { PlanetEntity } from 'src/core/db/entities/PlanetEntity';
import { Planet } from './Planet';

export class DeletePlanetRequest {
  public id: string;

  constructor(req: any) {
    this.id = req.params.id;
  }
}

export class DeletePlanetResponse {
  public planet: Planet;

  constructor(planet: PlanetEntity) {
    this.planet = new Planet(planet.name, planet.diameter);
  }
}