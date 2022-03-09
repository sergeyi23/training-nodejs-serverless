import { PlanetEntity } from 'src/core/db/entities/PlanetEntity';
import { Planet } from './Planet';

export class UpdatePlanetRequest {
  public id: string;

  public name: string;

  public diameter: number;

  constructor(req: any) {
    this.id = req.params.id;
    this.name = req.body.name;
    this.diameter = req.body.diameter;
  }
}

export class UpdatePlanetResponse {
  public planet: Planet;

  constructor(planet: PlanetEntity) {
    this.planet = new Planet(planet.name, planet.diameter);
  }
}