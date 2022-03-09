import { PersonEntity } from 'src/core/db/entities/PersonEntity';
import { Person } from './Person';

export class DeletePersonRequest {
  public id: string;

  constructor(req: any) {
    this.id = req.params.id;
  }
}

export class DeletePersonResponse {
  public person: Person;

  constructor(person: PersonEntity) {
    this.person = new Person(person.name, person.active);
  }
}