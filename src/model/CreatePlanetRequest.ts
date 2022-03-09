export class CreatePlanetRequest {
  public name: string;

  public habitable: boolean;

  constructor(req: any) {
    this.name = req.body.name;
    this.habitable = req.body.habitable;
  }
}
