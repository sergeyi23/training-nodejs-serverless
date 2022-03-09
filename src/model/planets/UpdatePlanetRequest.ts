export class UpdatePlanetRequest {
  public id: number;

  public name: string;

  public mass: number;

  constructor(req: any) {
    this.id = req.params.id;
    this.name = req.body.name;
    this.mass = req.body.mass;
  }
}
