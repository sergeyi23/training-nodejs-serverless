export class Planet {
  public name: string;

  public habitable: boolean;

  constructor(name: string, habitable: boolean) {
    this.habitable = habitable;
    this.name = name;
  }
}
