export class GetPlanetsRequest {
  public active: boolean = true;

  constructor(req: any) {
    if (req.query.active) {
      this.active = req.query.active;
    }
  }
}
