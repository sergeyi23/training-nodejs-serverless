import { PlanetEntity } from 'src/core/db/entities/PlanetEntity';
import { Planet } from './Planet';

export class CreatePlanetRequest {
  public name: string;

  public diameter: number;

  constructor(req: any) {
    this.name = req.body.name;
    this.diameter = req.body.diameter;
  }
}

export class CreatePlanetResponse {
  public planet: Planet;

  constructor(planet: PlanetEntity) {
    this.planet = new Planet(planet.name, planet.diameter);
  }
}
