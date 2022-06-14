// BONUS ONLY: Look up docs to read about reduce, which takes an array and distills it into a single value.

let numbers = [1, 56, 2, 4, 1, 99, 3, 5];

// Your code here!

// Write something that takes the above array and returns the product of all the numbers
// via multiplication

const numberTotal = numbers.reduce((total, numbers) => {
    return numbers * total;
}, 1)

console.log(numberTotal)

const cities = [
    {
        name: 'Chicago',
        population: 2746388
    },
    {
        name: 'New York City',
        population: 8804190 
    },
    {
        name: 'Boston',
        population: 689326
    },
    {
        name: 'Atlanta',
        population: 497642
    },
    {
        name: 'Los Angeles',
        population: 3898747
    }
]

// Use reduce to get the sum of the population of all 5 cities

const populationTotal = cities.reduce((total, city) => {
    return city.population + total;
}, 0)

console.log(populationTotal)

// Use reduce to get the city with the highest population (output should be an object)
const highestPopulation = cities.reduce((acc, city) => {
    return (acc.population > city.population) ? acc : city;
})

console.log(highestPopulation)

// Even hungrier:

const developers = [
{
        name: 'Mike',
        languages: [
            'JavaScript',
            'Python'
        ]
},
{
        name: 'Maria',
        languages:  [
                'JavaScript',
                'Ruby'
            ]
},
{
        name: 'Becky',
        languages:    [
            'JavaScript',
            'Python',
            'Rust',
            'C'
        ]
},
{
        name: 'John',
        languages: [
            'JavaScript',
            'Python',
            'Ruby'
        ]
}
]

const languagesObject = developers.reduce((acc, variable) => {
    return 
})

  // Use reduce to return an object with each languages as a property
  // And the number of developers who know that language as that property's value

  // Expected outcome:
  // {
  //     JavaScript: 4,
  //     Python: 3,
  //     Ruby: 2,
  //     Rust: 1,
  //     C: 1
  // }

  // This one is HARD

  // Hint 1: the desired output is an object, you might want to use that as your initial value

  // Hint 2: Each developer's languages is stored in an array. You might need to iterate over it.

  // Instead of hardcoding the languages in your initial object, can you think of a way to do this programmatically?