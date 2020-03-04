export const name: string = 'Susan';

export interface IPerson {
  name: string;
  married?: boolean;
  doctor?: boolean;
}

export const males: IPerson[] = [{
  name: 'John',
  doctor: true
}, {
  name: 'Jack'
}, {
  name: 'David'
}, {
  name: 'Oskar',
  doctor: true,
}, {
  name: 'Merlin'
}, {
  name: 'Mark'
}, {
  name: 'Paul'
}];

export const females: IPerson[] = [{
  name: 'Jane',
  married: false
}, {
  name: 'Mary',
  married: true
}, {
  name: 'Linda',
}, {
  name: 'Susan',
  married: true
}, {
  name: 'Lisa',
  married: false
}, {
  name: 'Nancy',
}, {
  name: 'Betty',
  married: true
}];
