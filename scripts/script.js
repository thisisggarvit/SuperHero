// Array of superhero names
let superheroNames = [
    "Captain Marvelous", "Mighty Hawk", "Shadow Phantom", 
    "Invisible Star", "Quantum Night", "Galactic Storm", 
    "Iron Wasp", "Turbo Comet", "Vortex Guardian"
];

// Event listener for button click
$("#btnGetHero").on("click", function() {
    let heroName = $("#heroName").val(); // Get the user name from input
    if (heroName.trim() === "") {
        $("#greetingArea").text("Please enter your name to get your superhero name.");
        $("#heroArea").text("");
    } else {
        $("#greetingArea").text("Hi there, " + heroName + "!");
        let randomHero = superheroNames[Math.floor(Math.random() * superheroNames.length)];
        $("#heroArea").text("Your superhero name is: " + randomHero);
    }
});