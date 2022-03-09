export class CreatePlanetRequest {
  public name: string;

  public mass: number;

  constructor(req: any) {
    this.name = req.body.name;
    this.mass = req.body.mass;
  }
}
