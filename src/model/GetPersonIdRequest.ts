export class GetPersonIdRequest {
  public id: number = 0;

  constructor(req: any) {
    if (req.params.id) {
      this.id = req.params.id;
    }
  }
}
