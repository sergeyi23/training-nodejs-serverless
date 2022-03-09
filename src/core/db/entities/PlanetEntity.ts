export class PlanetEntity {
  public id: string;

  public name: string;

  public diameter: number;

  public createTimestamp: number;

  constructor(id: string, name: string, diameter: number, created: number) {
    this.id = id;
    this.name = name;
    this.diameter = diameter;
    this.createTimestamp = created;
  }
}
