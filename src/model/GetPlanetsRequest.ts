export class GetPlanetsRequest {
  public habitable: boolean = false;

  constructor(req: any) {
    if (req.query.habitable) {
      this.habitable = req.query.habitable;
    }
  }
}
