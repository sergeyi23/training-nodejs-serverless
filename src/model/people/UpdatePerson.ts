import { PersonEntity } from 'src/core/db/entities/PersonEntity';
import { Person } from './Person';

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


export class UpdatePersonResponse {
  public person: Person;

  constructor(person: PersonEntity) {
    this.person = new Person(person.name, person.active);
  }
}