const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];
console.log(people);

let userName = "";
people.forEach((curPerson, i) => {
  // console.log(curPerson.name);
  userName += `${curPerson.name} `;
  })
  console.log(userName);


// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'