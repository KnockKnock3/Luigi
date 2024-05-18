const insults = [   "Wagie",
                    "Burger Flipper",
                    "Luigi",
                    "Waffler",
                    "Brokie",
                    "Megatron",
                    "Aldi cleaner",
                    "Non-Bugatti Owner",
                    "Beta male",
                    "Low G",
                    "Rizzless",
                    "Gigatron Waffler",
                    "Poverty",
                    "Old agatha",
                    "Tesco worker",
                    "Bitchless",
                    "EPAIS student",
                    "Stinky individual",
                    "Homeless"
                ];
let history = [];

const insultDisplay = document.getElementById("insult")
const burgerFlipperAudio = document.getElementById("burgerFlipper")
const wagieAudio = document.getElementById("wagie")

function getRandomElement(list, history, historySize = 3) {
    let randomElement;
    let attempts = 0;
    const maxAttempts = list.length * 2;

    do {
        const randomIndex = Math.floor(Math.random() * list.length);
        randomElement = list[randomIndex];
        attempts++;
    } while (history.includes(randomElement) && attempts < maxAttempts);

    history.push(randomElement);
    if (history.length > historySize) {
        history.shift();
    }

    return randomElement;
}

function reroll() {

    let chosen_insult = getRandomElement(insults, history);

    if (chosen_insult == "Wagie") {
        wagieAudio.play()
    } else if (chosen_insult == "Burger Flipper") {
        burgerFlipperAudio.play()
    }

    insultDisplay.innerHTML = chosen_insult;
}