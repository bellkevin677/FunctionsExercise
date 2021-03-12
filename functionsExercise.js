function fozzieBear(){
    console.log(`Wocka Wocka!`);
}
fozzieBear();

console.log("===================");

function beaker(){
    console.log(`Meep`);
    console.log(`Meep`);
    console.log(`Meep`);
    console.log(`Meep`);
}
beaker();

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
        return (true);
    }
    return (false);
}
console.log(muppetShowSeasons(5));
console.log(muppetShowSeasons(4));

console.log("===================");

const muppets = [`Kermit the frog`, `Miss Piggy`, `Fozzie Bear`, `The Great Gonzo`]

function showMuppets(names){
    console.log(muppets[0]);
    console.log(muppets[1]);
    console.log(muppets[2]);
    console.log(muppets[3]);
}
console.log(showMuppets(muppets));

console.log("===================");

const manOrMuppet = function(muppets){
    console.log(`Am I a man or am I a Muppet?`);
}

rainbowConnection = () => `Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`;
const test = rainbowConnection();
console.log(test);

console.log("===================");

// Question 9: No
// Question 10: Yes

const newMuppetMovies = [
    `The Muppets`,
    `Muppets Most Wanted`
]

upperMovies = newMuppetMovies.map(function upper() {
    ``.toUpperCase;
})
console.log(upperMovies);

console.log("===================");

const oldMuppetMovies = [
    "The Muppet Movie", "The Muppets Take Manhattan", "The Great Muppet Caper", "The Muppet Christmas Carol", "Muppet Treasure Island", "Muppets From Space"
]
