// test('Poke API', () => {
//     const result = makeUrl('pikachu');
//     const expected = "https://pokeapi.co/api/v2/pikachu";
//     equal(result, expected, 'makeUrl should return `https://pokeapi.co/api/v2/ + ${name}`');
//   });

// *******************************

// test('Converts string to object', () => {
//     const result = searchParamsToObject("name=oliver&email=hello@oliverjam.es").email;
//     const expected = 'hello@oliverjam.es';
//     equal(result, expected, 'email value should be hello@oliverjam.es')
// });

// *******************************

test ('does not accept string', () => {
const actual = isLeapYear('dogs with string');
const expected = false;
equal(actual, expected);
})

test ('no negative years', () => {
const actual = isLeapYear(-1);
const expected = false;
equal(actual, expected);
})