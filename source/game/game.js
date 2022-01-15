import * as keyboard from './keyboard'
import * as generator from './generator'
import WordElement from './word-element'

// Loading

export function load() {
    guessesWrapper = document.getElementById('guess-wrapper')
    createWord()

    targetWord = generator.random()
    console.log(targetWord)
}

// Events

function onLetterClick(letter, button) {
    console.log(letter, button)

    if (cursor.letter < 5) {
        wordElements[cursor.word].addLetter(letter, cursor.letter)
        cursor.letter++
        currentWord += letter
    }
}

function onEnterClick() {
    console.log('enter')

    if (cursor.letter == 5) {
        checkResult()
    }
}

function onBackspaceClick() {
    console.log('backspace')
    
    if (cursor.letter > 0) {
        cursor.letter--
        wordElements[cursor.word].removeLetter(cursor.letter)
        currentWord = currentWord.slice(0, -1)
    }
}

// Methods

function createWord() {
    let index = wordElements.length
    wordElements.push( new WordElement(guessesWrapper) )
    wordElements[index].select()

    cursor.word = index
    cursor.letter = 0
    currentWord = ''
}

function checkResult() {
    if (currentWord == targetWord) {        
        return wictory()
    }

    let score = calculateCurrentScore()
    wordElements[cursor.word].setColors(score)

    createWord()
}

function calculateCurrentScore() {
    let score = [ 0, 0, 0, 0, 0 ]

    //Check offset splacements
    for (let i in currentWord) {
        if (targetWord.indexOf(currentWord[i]) > -1) {
            score[i] = 1
        }
    }

    //Check correct placements
    for (let i in currentWord) {
        if (currentWord[i] == targetWord[i]) {
            score[i] = 2
        }
    }

    return score
}

function wictory() {
    // Color last row correct
    wordElements[cursor.word].setColors([2,2,2,2,2])

    console.log('wictory!')
    console.log('Steps: ', wordElements.length)
}

// Define variables
let guessesWrapper = null
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