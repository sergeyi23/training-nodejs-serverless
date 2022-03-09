export class Planet {
  public id: number;

  public name: string;

  public active: boolean;

  constructor(id: number, name: string, active: boolean) {
    this.id = id;
    this.active = active;
    this.name = name;
  }
}
