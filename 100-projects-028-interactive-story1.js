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
                text: "Return to the crossroads",
                nextText: 1
            },
            {
                text: "End story",
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
                text: "End story",
                nextText: 1
            }
        ]
    }
]

startGame();
