const keyLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let keyboard = null
let keys = {}
let listeners = {
    letter: null,
    backspace: null,
    enter: null
}
let letterListener = null

export function load() {
    //Get elements
    keyboard = document.getElementById('keyboard-wrapper')

    //Generate keyboard
    for (const k of keyLetters) {
        let div = document.createElement('div')
        div.innerText = k
        keys[k] = div
        keyboard.appendChild(div)
    }
}

export function letterListener(listener) {
    listeners.letter = listener
}

export function backspaceListener(listener) {
    listeners.backspace = listener
}

export function enterListener(listener) {
    listeners.enter = listener
}