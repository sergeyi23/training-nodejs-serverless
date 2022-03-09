export class UpdatePersonRequest {
  public id: string;

  public name: string;

  public active: boolean;

  constructor(req: any) {
    this.id = req.params.id;
    this.name = req.body.name;
    this.active = req.body.active;
  }
}
