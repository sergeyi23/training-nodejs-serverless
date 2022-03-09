import { Person } from './Person';

export class UpdatePersonResponse {
  public person: Person;

  constructor(person: any) {
    this.person = new Person(person.name, person.active);
  }
}
