const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let keyboard = null

export function load() {
    //Get elements
    keyboard = document.getElementById('keyboard-wrapper')

    //Generate keyboard
    for (const k of keys) {
        let div = document.createElement('div')
        div.innerText = k
        keyboard.appendChild(div)
    }
}