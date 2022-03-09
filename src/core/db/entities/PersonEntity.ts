export class PersonEntity {
  public id: string;

  public name: string;

  public active: boolean;

  public createTimestamp: number;

  constructor(id: string, name: string, active: boolean, created: number) {
    this.id = id;
    this.name = name;
    this.active = active;
    this.createTimestamp = created;
  }
}
