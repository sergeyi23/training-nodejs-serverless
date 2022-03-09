import { PlanetEntity } from "src/core/db/entities/PlanetEntity";
import { Planet } from "./Planet";

export class GetPlanetsResponse {
  public planets: Planet[];

  constructor(planets: PlanetEntity[]) {
    this.planets = planets.map((p) => new Planet(p.name, p.mass));
  }
}
