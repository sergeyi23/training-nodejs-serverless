export class GetPlanetRequest {
  public id: number = 0;
  public mass: number = 0;

  constructor(req: any) {
    if (req.query.mass) {
      this.mass = req.query.mass;
    }
    if (req.params.id) {
      this.id = req.params.id;
    }
  }
}
