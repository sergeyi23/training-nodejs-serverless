export class UpdatePersonRequest {
  public id: number = 0;

  public name: string;

  public active: boolean;

  constructor(req: any) {
    if (req.params.id) {
      this.id = req.params.id;
    }
    this.name = req.body.name;
    this.active = req.body.active;
  }
}
