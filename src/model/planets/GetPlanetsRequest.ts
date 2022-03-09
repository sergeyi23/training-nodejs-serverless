export class GetPlanetsRequest {
  public mass: number = 0;

  constructor(req: any) {
    if (req.query.mass) {
      this.mass = req.query.mass;
    }
  }
}
