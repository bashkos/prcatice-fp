import * as O from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';
import { name, IPerson, males, females } from './data';

const optionalName = O.fromNullable(name);

function getGreeting(name: O.Option<string> = O.none, males: IPerson[] = [], females: IPerson[] = []): string {
  return pipe(
    name,
    O.mapNullable(name => males.find(male => male.name === name)),
    O.fold(
      () => pipe(
        name,
        O.mapNullable(name => females.find(male => male.name === name)),
        O.fold(
          () => 'nothing',
          female => pipe(
            O.fromNullable(female.married),
            O.mapNullable(married => married ? `mrs. ${female.name}` : `miss ${female.name}`),
            O.getOrElse(() => `ms. ${female.name}`)
          )
        )
      ),
      male => pipe(
        O.fromNullable(male.doctor),
        O.mapNullable(doctor => doctor ? `dr. ${male.name}` : `mr. ${male.name}`),
        O.getOrElse(() => `mr. ${male.name}`)
      )
    )
  );
}

console.log(`Hello ${getGreeting(optionalName, males, females)}`)
