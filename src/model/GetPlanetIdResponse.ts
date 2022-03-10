import { PlanetEntity } from 'src/core/db/entities/PlanetEntity';
import { Planet } from 'src/model/Planet';

export class GetPlanetIdResponse {
  public planet: Planet | string;

  constructor(planet: PlanetEntity | undefined) {
    if (planet === undefined) {
      this.planet = '404';
    } else {
      this.planet = new Planet(planet.name, planet.active);
    }
  }
}
