export class PersonEntity {
  public id: number;

  public name: string;

  public active: boolean;

  public createTimestamp: number;

  constructor(id: number, name: string, active: boolean, created: number) {
    this.id = id;
    this.name = name;
    this.active = active;
    this.createTimestamp = created;
  }
}
