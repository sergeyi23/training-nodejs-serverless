export class PlanetEntity {
  public id: string;

  public name: string;

  public habitable: boolean;

  public createTimestamp: number;

  constructor(id: string, name: string, habitable: boolean, created: number) {
    this.id = id;
    this.name = name;
    this.habitable = habitable;
    this.createTimestamp = created;
  }
}
