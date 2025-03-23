//Project: Affirmation generator
//Description: Generates daily affirmations for young black boys

function generateRandNum(num) {
    return Math.floor(Math.frandom() * num)
}

function operationButton() {
const blackBoyJoy = {
    affirmation: [
        "I have a POWERFUL voice!",
        "I am incredibly special!",
        "I am a leader!",
        "I am worthy!",
        "I am valuable!",
        "I am proud to be Black!",
        "I am allowed to express my feelings and emotions."
    ],

    scripture: [
        "Psalm 145:9 - 'The LORD is good to all, and his mercy is over all that He has made.'",
        "Joshua 1:9 - 'Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your GOD is with you wherever you go.'",
        "Numbers 6:24 - 'The LORD bless you and keep you.'",
        "Proverbs 30:5 - 'Every word of God proves true; He is a shield to those who take refuge in him.'",
        "Psalm 56:3 - 'When I am afraid, I put my trust in you.'",
        "Psalm 136:1 - 'Give thanks to the LORD, for He is good, for His steadfast love endures forever.'",
        "Philippians 4:13 'I can do all things through Him who strengthens me.'",
        "2 Timothy 1:7 - 'For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.'"
    ],

    confirmation: [
        "You have the right to be heard!",
        "There is no one else like you!",
        "You were born to lead and be set apart from others!",
        "Don't let anyone tell you differently!",
        "Your value is your greatest asset!",
        "Be proud of who you are and your culture!",
        "Expressing your emotions and feelings helps you be heard!"
    ]
    }
}

//Stored the 'message' in an empty array
let dailyAffirmation = [];

// Iterate over the object
for (let item in blackBoyJoy) {
    let messageIdx = generateRandNum(blackBoyJoy[item].length);
}

//Use of the object's properties to customize my daily affirmation output
switch(item) {
    case 'affirmation':
        dailyAffirmation.push(`Daily affirmation: ${blackBoyJoy}[item][messageIdx]}.`);
        break;
    case 'scripture':
        dailyAffirmation.push(`Daily scripture: ${blackBoyJoy}[item][messageIdx].`);
        break;
    case 'confirmation':
        dailyAffirmation.push(`Your confirmation: ${blackBoyJoy}[item][messageIdx].`);
        break;
    default: 
    dailyAffirmation.push('Always believe in yourself!')
}

function formatAffirmation(message) {
    const formatted = dailyAffirmation.join('\n')
    console.log(formatted)
}

formatAffirmation(dailyAffirmation);
operationButton();