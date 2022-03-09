import { PlanetEntity } from 'src/core/db/entities/PlanetEntity';
import { Planet } from 'src/model/Planet';

export class GetPlanetsResponse {
  public planets: Planet[];

  constructor(planets: PlanetEntity[]) {
    this.planets = planets.map(
      (planet) => new Planet(planet.name, planet.habitable)
    );
  }
}
