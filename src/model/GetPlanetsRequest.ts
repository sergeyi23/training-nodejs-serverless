export class GetPlanetsRequest {
  public active: boolean = false;

  constructor(req: any) {
    if (req.query.active) {
      this.active = req.query.active;
    }
  }
}
