import { Planet } from 'src/model/Planet';

export class UpdatePlanetResponse {
  public planet: Planet;

  constructor(planet: any) {
    this.planet = new Planet(planet.name, planet.active);
  }
}
