export class PlanetEntity {
  public id: number;

  public name: string;

  public mass: number;

  public createTimestamp: number;

  constructor(id: number, name: string, mass: number, created: number) {
    this.id = id;
    this.name = name;
    this.mass = mass;
    this.createTimestamp = created;
  }
}
