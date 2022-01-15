const keyLetters = "abcdefghijklmnopqrstuvwxyz"

let keyboard = null
let keys = {}
let listeners = {
    letter: null,
    backspace: null,
    enter: null
}

export function load() {
    // Get elements
    keyboard = document.getElementById('keyboard-wrapper')

    // Generate letter keys
    for (const k of keyLetters) {
        let div = document.createElement('div')
        div.innerText = k.toUpperCase()
        keys[k] = div

        div.addEventListener('click', (e) =>
        {
            //Pass letter and dom element
            listeners.letter(k, div)
        })

        keyboard.appendChild(div)
    }

    // Generate special keys
    //backspace
    let backspace = document.createElement('div')
    backspace.classList.add('backpsace')
    backspace.innerText = '<'
    backspace.addEventListener('click', () => listeners.backspace())
    keyboard.appendChild(backspace)
}

export function letterListener(listener) {
    listeners.letter = listener
}

export function backspaceListener(listener) {
    listeners.backspace = listener
}