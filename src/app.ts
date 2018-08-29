interface IPerson {
  firstName: string | null;
  lastName: string;
}

const user = { firstName: "Jesse", lastName: "Stolwijk" };

const greeter = (person: IPerson) =>
  `Hello ${person.firstName} ${person.lastName}`;

console.log(greeter(user));
