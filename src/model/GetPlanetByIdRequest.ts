export class GetPlanetByIdRequest {
  public id: string;

  constructor(req: any) {
    this.id = req.params.id;
  }
}
