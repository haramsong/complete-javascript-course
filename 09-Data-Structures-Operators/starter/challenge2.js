/*
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
  along with the goal number(Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console(We already
studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5

4. Get the team names directly from the game object, don't hardcode them
  (except for "draw").Hint: Note how the odds and the game objects have the
same property names 😉

Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value.In this
game, it will look like this:
{
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
}
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
for (const [i, scorer] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${scorer}`);
}

// 2
const odds = Object.values(game.odds)
let sum = 0;
for (const odd of odds) {
  sum += odd;
}
console.log(sum / odds.length);

// 3
// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(`Odd of ${team !== 'x' ? `victory ${game[team]}` : 'draw'}: ${odd}`);
// }

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// 4
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(`Odd of ${team !== 'x' ? `victory ${game[team]}` : 'draw'}: ${odd}`);
}

// Bonus
const scorers = game.scored.reduce((allScorers, scorer) => {
  console.log(allScorers);
  console.log(scorer);
  allScorers[scorer] = (allScorers[scorer] || 0) + 1;
  return allScorers;
}, {});

// const scorers = {
//   [game.scored]: '1'
// };
console.log(scorers);