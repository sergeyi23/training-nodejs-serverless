export class GetPersonRequest {
  public active: boolean = false;
  public id: number = 0;

  constructor(req: any) {
    if (req.query.active) {
      this.active = req.query.active;
    }
    if (req.params.id) {
      this.id = req.params.id;
    }
  }
}
