export class CeratePersonRequest {
  public name: string;

  public active: boolean;

  constructor(req: any) {
    this.name = req.body.name;
    this.active = req.body.active;
  }
}
