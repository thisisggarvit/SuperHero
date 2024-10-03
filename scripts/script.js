// Array of superhero names
let superheroNames = [
    "Captain Marvelous", "Mighty Hawk", "Shadow Phantom", 
    "Invisible Star", "Quantum Night", "Galactic Storm", 
    "Iron Wasp", "Turbo Comet", "Vortex Guardian"
];

// Game state variables
let score = 0;

// Event listener for button click to generate superhero name
$("#btnGetHero").on("click", function() {
    let heroName = $("#heroName").val(); // Get the user name from input
    if (heroName.trim() === "") {
        $("#greetingArea").text("Please enter your name to get your superhero name.");
        $("#heroArea").text("");
    } else {
        $("#greetingArea").text("Hi there, " + heroName + "!");
        let randomHero = superheroNames[Math.floor(Math.random() * superheroNames.length)];
        $("#heroArea").text("Your superhero name is: " + randomHero);
        $("#gamePiece").show(); // Display the game piece
    }
});

// Making the game piece draggable
$("#gamePiece").draggable({
    containment: "body",
    stop: function() {
        score += 10;
        $("#score").text("Score: " + score);
    }
});

// Reset the game state
$("#resetGame").on("click", function() {
    $("#gamePiece").css({ top: 0, left: 0 });
    score = 0;
    $("#score").text("Score: 0");
    $("#greetingArea").text("");
    $("#heroArea").text("");
    $("#heroName").val("");
});
