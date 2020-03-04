import { name, IPerson, males, females } from './data';
import { isNil } from 'lodash';

function getGreeting(name: string, males: IPerson[], females: IPerson[]): string {
  if (isNil(name)) {
    return 'nothing';
  }

  const male = males.find(male => male.name === name);
  if (isNil(male)) {
    const female = females.find(female => female.name === name);
    if (isNil(female)) {
      return 'nothing';
    }

    if (isNil(female.married)) {
      return `ms. ${name}`
    }

    return female.married ? `mrs. ${name}` : `miss ${name}`;
  }

  return male.doctor ? `dr. ${name}` : `mr. ${name}`;
}

console.log(`Hello ${getGreeting(name, males, females)}`)
