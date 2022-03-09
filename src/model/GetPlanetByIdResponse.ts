import { PlanetEntity } from 'src/core/db/entities/PlanetEntity';
import { Planet } from 'src/model/Planet';

export class GetPlanetByIdResponse {
  public planet: Planet | string;

  constructor(planet: PlanetEntity | undefined) {
    if (planet === undefined) {
      this.planet = 'NOT FOUNDED';
    } else {
      this.planet = new Planet(planet.name, planet.habitable);
    }
  }
}
