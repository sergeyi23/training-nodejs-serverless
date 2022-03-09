export class UpdatePlanetRequest {
  public id: string;

  public name: string;

  public habitable: boolean;

  constructor(req: any) {
    this.id = req.params.id;
    this.name = req.body.name;
    this.habitable = req.body.habitable;
  }
}
