import { random } from './generator'

// WordElement class
export class WordElement {
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
}

let wordElements = []

export function load() {
    const guesses = document.getElementById('guess-wrapper')
    wordElements.push( new WordElement(guesses) )
    wordElements[0].select()
}

//console.log(random())