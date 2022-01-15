import * as keyboard from './keyboard'
import * as generator from './generator'

// WordElement class
class WordElement {
    selectedClass = 'current'

    container = null
    letters = null

    constructor(wrapper) {
        if (wrapper != null) {
            this.generate(wrapper)
        }
    }

    generate = (wrapper) => {
        //Create container
        this.container = document.createElement('div')
        this.container.classList.add('word-line')

        //Create letters
        this.letters = []
        for (let i = 0; i < 5; i++) {
            let letter = document.createElement('div')
            letter.classList.add('letter')
            letter.innerText = ''

            this.container.appendChild(letter)
            this.letters.push(letter)
        }

        //Add to wrapper
        wrapper.appendChild(this.container)
    }

    select = () => {
        this.container.classList.add(this.selectedClass)
    }

    deselect = () => {
        this.container.classList.remove(this.selectedClass)
    }

    addLetter = (letter, index) => {
        this.letters[index].innerText = letter.toUpperCase()
    }

    removeLetter = (index) => {
        this.letters[index].innerText = ''
    }
}

// Loading

export function load() {
    const guesses = document.getElementById('guess-wrapper')
    wordElements.push( new WordElement(guesses) )
    wordElements[0].select()

    targetWord = generator.random()
}

// Events

function onLetterClick(letter, button) {
    console.log(letter, button)

    if (cursor.letter < 5) {
        wordElements[cursor.word].addLetter(letter, cursor.letter)
        cursor.letter++
    }
}

function onEnterClick() {
    console.log('enter')
}

function onBackspaceClick() {
    console.log('backspace')
    
    if (cursor.letter > 0) {
        cursor.letter--
        wordElements[cursor.word].removeLetter(cursor.letter)
    }
}

// Define variables
let wordElements = []
let cursor = {
    word: 0,
    letter: 0
}
let currentWord = ''
let targetWord = ''


// Load keyboard
keyboard.load()
keyboard.letterListener(onLetterClick)
keyboard.enterListener(onEnterClick)
keyboard.backspaceListener(onBackspaceClick)

