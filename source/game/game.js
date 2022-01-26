import * as keyboard from './keyboard'
import * as generator from './generator'
import WordElement from './word-element'


// Define variables
let guessesWrapper = null
let wordElements = []
let cursor = {
    word: 0,
    letter: 0
}
let currentWord = [ ' ', ' ', ' ', ' ', ' ' ]
let correctLetters = [ ' ', ' ', ' ', ' ', ' ' ]
let targetWord = ''


// Loading

export function load() {
    guessesWrapper = document.getElementById('guess-wrapper')
    reset(true)
}

function reset(first) {
    // Reset correct letters
    correctLetters = [ ' ', ' ', ' ', ' ', ' ' ]
    // Generate new word
    targetWord = generator.random()
    // If not first game
    if (!first) {
        // Reset word fields
        for (let e in wordElements) {
            e.remove()
        }
        // Reset cursor
        cursor.word = 0
        cursor.letter = 0
        // Reset current word letters
        currentWord = [ ' ', ' ', ' ', ' ', ' ' ]
        correctLetters = [ ' ', ' ', ' ', ' ', ' ' ]
        // Reset keyboard
        keyboard.reset()
    }

    // Create word fields
    createWord()
}

// Events

function onLetterClick(letter, button) {
    if (cursor.letter < 5) {
        wordElements[cursor.word].addLetter(letter, cursor.letter)        
        currentWord[cursor.letter] = letter
        cursor.letter++
    }
    if (cursor.letter == 5) {
        checkResult()
    }
}

function onBackspaceClick() {
    if (cursor.letter > 0) {
        cursor.letter--
        wordElements[cursor.word].removeLetter(cursor.letter)
        currentWord[cursor.letter] = ' '
    }
}

function onResetClick() {
    reset(false)
}

// Methods

function createWord() {
    let index = wordElements.length
    wordElements.push( new WordElement(guessesWrapper, correctLetters) )
    wordElements[index].select()

    cursor.word = index
    cursor.letter = 0
    currentWord = [ ' ', ' ', ' ', ' ', ' ' ]
}

function fixCorrectLetters(score)
{
    for (let i in score) {
        if (score[i] == 2) {
            correctLetters[i] = currentWord[i]
        }
    }
}

function checkResult() {
    if (currentWord.join('') == targetWord)
        return wictory()

    let score = calculateCurrentScore()

    // Update guess colors
    wordElements[cursor.word].setColors(score)

    // Disable keyboard keys
    keyboard.updateKeys(score, currentWord)

    // Fix correct letters
    fixCorrectLetters(score)

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
}




// Load keyboard
keyboard.load()
keyboard.letterListener(onLetterClick)
keyboard.backspaceListener(onBackspaceClick)
keyboard.resetListener(onResetClick)