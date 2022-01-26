const keyLetters = "abcdefghijklmnopqrstuvwxyz"

let keyboard = null
let keys = {}
let listeners = {
    letter: null,
    backspace: null,
    enter: null
}

function createKey(id, text, classes, clickEvent) {
    let key = document.createElement('div')
    keys[id] = key
    key.innerText = text
    if (classes != '') {
        key.classList.add(classes)
    }
    key.addEventListener('click', clickEvent)
    keyboard.appendChild(key)
    return key
}

export function load() {
    // Get elements
    keyboard = document.getElementById('keyboard-wrapper')

    // Generate letter keys
    for (const k of keyLetters) {
        createKey(k, k.toUpperCase(), '', () => listeners.letter(k))
    }

    // Create hidden key
    createKey('hidden', '', 'hidden', null)

    // Generate special keys    
    createKey('del', '←', 'backpsace', () => listeners.backspace()) //backspace
}

export function letterListener(listener) {
    listeners.letter = listener
}

export function backspaceListener(listener) {
    listeners.backspace = listener
}

function addClassToKey(char, classname) {
    let key = keys[char]
    key.classList.add(classname)
}

export function updateKeys(score, word) {

    for (let i in score) {
        if (score[i] == 0) {
            addClassToKey(word[i], 'disabled')
        }
        else if (score[i] == 1) {
            addClassToKey(word[i], 'offset')
        }
        else if (score[i] == 2) {
            addClassToKey(word[i], 'correct')
        }
    }
}