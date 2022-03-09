export class GetPersonByIdRequest {
  public id: string;

  constructor(req: any) {
    this.id = req.params.id;
  }
}
