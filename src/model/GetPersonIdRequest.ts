export class GetPersonIdRequest {
  public id: number;

  constructor(req: any) {
    this.id = req.params.id;
  }
}
