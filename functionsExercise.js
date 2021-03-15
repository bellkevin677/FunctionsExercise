function fozzieBear(){
    console.log(`Wocka Wocka!`);
}
fozzieBear();

console.log("===================");

function beaker(speak){
    console.log(speak);
    console.log(speak);
    console.log(speak);
    console.log(speak);
}
beaker(`Meep`);

console.log("===================");

function werewolf(a, b){
    if (a === `Muppet` && b === `Show`){
        console.log(`It's time to play the music. It's time to light the lights.`);
    }
}
werewolf('Muppet', 'Show');

console.log("===================");

function kermit(){
    return `Kermit the Frog`;
}
console.log(kermit());

console.log("===================");

function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    }
    return false;
}

console.log(muppetShowSeasons(5));

console.log("===================");

const muppets = [
    `Kermit the frog`, 
    `Miss Piggy`, 
    `Fozzie Bear`, 
    `The Great Gonzo`
];

function showMuppets(names){
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
}
showMuppets(muppets);

console.log("===================");

const manOrMuppet = function(){
    console.log(`Am I a man or am I a Muppet?`);
}
manOrMuppet();

console.log("===================");

rainbowConnection = () => (`Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`);

console.log(rainbowConnection());

console.log("===================");

// Question 9: No
// Question 10: Yes

const newMuppetMovies = [
    `The Muppets`,
    `Muppets Most Wanted`
];

function toUpperMovie(movie){
    return movie.toUpperCase();
}
const upperMovies = newMuppetMovies.map(toUpperMovie);
console.log(upperMovies);

console.log("===================");

const oldMuppetMovies = [
    "The Muppet Movie", "The Muppets Take Manhattan", "The Great Muppet Caper", "The Muppet Christmas Carol", "Muppet Treasure Island", "Muppets From Space"
]

const twoMovies = oldMuppetMovies.filter(title => title === "The Great Muppet Caper" || title === "Muppet Treasure Island");
console.log(twoMovies);

console.log("===================");

const charactersOne = ["Statler", "Waldorf"];

const charactersTwo = ["Swedish Chef", "Animal", "Rowlf"];

function randomMuppet(characters){
    console.log(characters[Math.floor (Math.random() * characters.length)]);
}

randomMuppet(charactersOne);
randomMuppet(charactersTwo);

console.log("===================");




