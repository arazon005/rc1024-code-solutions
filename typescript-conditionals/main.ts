/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  } else return false;
}

console.log('5 is under 5?', isUnderFive(5));
console.log('2 is under 5?', isUnderFive(2));

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else return false;
}
console.log('is 4 even?', isEven(4));
console.log('is 5 even?', isEven(5));

function startsWithJ(string: string): boolean {
  if (string.charAt(0) === 'J') {
    return true;
  } else return false;
}
console.log('Jonathan starts with J', startsWithJ('Jonathan'));
console.log('jumbo starts with J', startsWithJ('jumbo'));
console.log('Tea starts with J', startsWithJ('Tea'));

interface Person {
  name: string;
  age: number;
}

function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  } else return false;
}
const me: Person = {
  name: 'Abraham',
  age: 25,
};
console.log(me);
console.log(`${me.name} is old enough to drink?`, isOldEnoughToDrink(me));

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age >= 16) {
    return true;
  } else return false;
}
console.log(`${me.name} is old enough to drive?`, isOldEnoughToDrink(me));

function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  if (isOldEnoughToDrink(person) && isOldEnoughToDrive(person)) {
    return false;
  }
  return false;
}
console.log(
  `${me.name} is old enough to drink and drive?`,
  isOldEnoughToDrinkAndDrive(me)
);

function categorizeAcidity(pH: number): string {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else return 'invalid pH level';
}
console.log('the acidity of 7 is', categorizeAcidity(7));
console.log('the acidity of 0 is', categorizeAcidity(0));
console.log('the acidity of 9 is', categorizeAcidity(9));
console.log('the acidity of 15 is', categorizeAcidity(15));

function introduceWarnerBro(name: string): string {
  name = name.toLowerCase();
  switch (name) {
    case 'yakko':
      return `"We're the warner brothers!`;
    case 'dot':
      return `"I'm cute~"`;
    case 'wakko':
      return `"We're the warner brothers!`;
    default:
      return `"Goodnight everybody!"`;
  }
}
console.log('yakko', introduceWarnerBro('yakko'));
console.log('wakko', introduceWarnerBro('wakko'));
console.log('dot', introduceWarnerBro('dot'));
console.log('Bruce', introduceWarnerBro('Bruce'));

function recommendMovie(genre: string): string {
  genre = genre.toLowerCase();
  switch (genre) {
    case 'action':
      return 'Mission Impossible';
    case 'comedy':
      return `I don't know`;
    case 'horror':
      return 'Saw';
    case 'drama':
      return 'Interstellar';
    case 'musical':
      return 'High School Musical';
    case 'sci-fi':
      return 'Everything Everywhere All at Once';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
console.log('I want to watch sci-fi', recommendMovie('sci-fi'));
console.log('I want to watch horror', recommendMovie('horror'));
console.log('I want to watch anime', recommendMovie('anime'));
