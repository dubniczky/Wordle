import * as keyboard from './keyboard'
import * as generator from './generator'
import WordElement from './word-element'

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

