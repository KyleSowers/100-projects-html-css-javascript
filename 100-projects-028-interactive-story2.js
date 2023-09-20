'use strict'

//call for html id's
const storyText = document.getElementById('story-text')
const optionButtons = document.getElementById('option-buttons')

let state = {}

//create function to call game
function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode =textNodes.find(textNode => textNode.id === textNodeIndex)
    storyText.innerText = textNode.text
    while (optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtons.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        showTextNode(nextTextNodeId)
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'You are at a crossroads. If you go left, you head towards the mountains. If you go right, you head into the forest.',
        options: [
            {
                text: 'Go towards the mountains',
                setState: {mountains: true},
                nextText: 2
            },
            {
                text: 'Go into the forest',
                setState: {forest: true},
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: 'You arrive at the mountains. There is a small cave nearby.',
        options: [
            {
                text: 'Enter the cave',
                requiredState: (currentState) => currentState.mountains,
                setState: {cave: true},
                nextText: 4
            },
            {
                text: 'Return to the crossroads',
                nextText: 1
            }
        ]
    },
    {
        id: 3,
        text: 'You walk into the forest and find a stream',
        options: [
            {
                text: 'Follow the stream',
                requiredState: (currentState) => currentState.forest,
                setState: {stream: true},
                nextText: 5
            },
            {
                text: 'Return to the crossroads',
                nextText: 1
            }
        ]
    },
    {
        id: 4,
        text: 'You discover a small treasure chest inside the cave!',
        options: [
            {
                text: "Take what you want",
                nextText: 6
            },
            {
                text: "Report to authorities",
                nextText: 1
            }
        ]
    },
    {
        id: 5,
        text: 'You follow the stream and discover a waterfall with a rainbow.',
        options: [
            {
                text: 'Return to the crossroads',
                nextText: 1
            },
            {
                text: "Go swimming",
                nextText: 7
            }
        ]
    },
    {
        id: 6,
        text: 'There appears to be an accenting path leading into the far distance of the cave.',
        options: [
            {
                text: 'Go further into the darkness',
                requiredState: (currentState) => currentState.mountains,
                setState: {stream: true},
                nextText: 8
            },
            {
                text: 'Return to the crossroads with treasures safely',
                nextText: 1
            }
        ]
    },
    {
        id: 7,
        text: 'You find the red/yellow/black healing flower in the brush...or is it the death by contact red/yellow/black flower...cant remember!',
        options: [
            {
                text: 'Risk it, people needs it',
                requiredState: (currentState) => currentState.forest,
                setState: {stream: true},
                nextText: 9
            },
            {
                text: 'No risk, someone also need you! Lets return to the crossroads, alive',
                nextText: 1
            }
        ]
    },
    {
        id: 8,
        text: 'You weren\'t worried about loosing wealth over adventure...and it paid. You have reach a secret path to the peak of the mountain for the best view of the lands!',
        options: [
            {
                text: 'Return to the crossroads once you\'ve enjoyed the view',
                nextText: 1
            },
            {
                text: "End story on with this perfect view!",
                nextText: 10
            }
        ]
    },
    {
        id: 9,
        text: 'Sometimes risk lead to bad outcomes....But you win today!!! You will be a hero for others!!!',
        options: [
            {
                text: 'Return to the crossroads',
                nextText: 1
            }
        ]
    },
    {
        id: 10,
        text: 'It truly was beautiful',
        options: [
            {
                text: 'Return to restart adventure',
                nextText: 1
            }
        ]
    }
]

startGame();
