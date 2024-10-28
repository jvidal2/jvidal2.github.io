function displayDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    document.getElementById('date-display').textContent = `Today is ${now.toLocaleDateString('en-US', options)}`;
}
window.onload = displayDate;

function displayGreeting() {
    const name = document.getElementById('username').value;
    const mood = document.getElementById('user-mood').value;
    const company = "Jaded Vulture";
    alert(`The ${company} welcomes you, ${name}! We're glad you are doing ${mood}!`);
}

function displayPolygon() {
    let num = Math.abs(Math.round(parseFloat(document.getElementById('favorite-number').value)));
    const polygons = ["","monogon", "digon", "trigon", "tetragon", "pentagon", "hexagon", "heptagon", "octagon", "enneagon", "decagon"];
    if (num >= 0 && num <= 10) {
        alert(polygons[num] || "No polygon with that number of sides.");
    } else {
        alert("Please enter a valid number between 0 and 10.");
    }
}

function figureFound() {
    const rareFigures = ["Limited Edition Eren Yeager", "Kakuja Form Ken Kaneki", "Exclusive Inoske Hashibira", "Signed Ryomen Sukuna Figure"];
    const randomFigure = rareFigures[Math.floor(Math.random() * rareFigures.length)];
    alert("The vulture has found: " + randomFigure + "!");
}

function vultureFact() {
    const facts = [
        "Vultures can see up to 5 miles away!",
        "They have excellent color vision.",
        "Vultures can spot a carcass from great heights."
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    alert("Did you know? " + randomFact);
}

function rumblingResult() {
    const outcomes = ["You survived the Rumbling!", "You did not survive the Rumbling."];
    const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
    alert(randomOutcome);
}

function vultureTips() {
    const tips = [
        "Always wear a cape while collecting to boost your powers!",
        "Whistle the theme song of your favorite anime to attract rare figures!",
        "Keep your figures in a fridge to maintain their freshness!",
        "Train your pet to guard your collection, it's the best defense!"
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    alert("Vulture's Collecting Tip: " + randomTip);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit-button").addEventListener("click", displayGreeting);
    document.getElementById("polygon-button").addEventListener("click", displayPolygon);
    document.getElementById("figure-button").addEventListener("click", figureFound);
    document.getElementById("fact-button").addEventListener("click", vultureFact);
    document.getElementById("rumbling-button").addEventListener("click", rumblingResult);
    document.getElementById("tips-button").addEventListener("click", vultureTips);
});
