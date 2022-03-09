export class CreatePlanetRequest {
  public id: number;

  public name: string;

  public active: boolean;

  constructor(req: any) {
    this.id = req.body.id;
    this.name = req.body.name;
    this.active = req.body.active;
  }
}
