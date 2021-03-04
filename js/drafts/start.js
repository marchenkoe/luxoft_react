const dataSource = [
  {id: 1, firstName: "John", lastName: "Doe", active: false},
  {id: 2, firstName: "Mary", lastName: "Moe", active: false},
  {id: 3, firstName: "Peter", lastName: "Noname", active: true}
];

const id = 2;

const newArr1 = dataSource.map(person => person.id === id ? {...person, active: !person.active} : person)
const newArr2 = dataSource.map(person => {
  if (person.id === id) {
    return {...person, active: !person.active};
  } else {
    return person;
  }
})
