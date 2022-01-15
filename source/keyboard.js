const keyLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let keyboard = null
let keys = {}

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

