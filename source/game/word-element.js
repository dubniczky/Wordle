export default class WordElement {
    selectedClass = 'current'
    correctClass = 'correct'
    offsetClass = 'offset'
    shadowClass = 'shadow-letter'

    container = null
    letters = null
    shadow = null

    constructor(wrapper, correctLetters) {
        this.shadow = correctLetters

        if (wrapper != null) {
            this.generate(wrapper)
            this.addShadowAll(correctLetters)
        }
        
    }

    generate = (wrapper) => {
        //Create container
        this.container = document.createElement('div')
        this.container.classList.add('word-line')
        setTimeout(() => this.container.classList.add('show'), 0)

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
        let l = this.letters[index]
        l.innerText = letter.toUpperCase()
        l.classList.remove(this.shadowClass)
    }

    removeLetter = (index) => {
        if (this.shadow[index] == ' ') {
            this.letters[index].innerText = ''
        }
        else {
            this.addShadow(index)
        }
    }

    setColors = (score) => {
        for (let i in this.letters)
        {
            if (score[i] == 1) {
                this.letters[i].classList.add(this.offsetClass)
            }
            else if (score[i] == 2) {
                this.letters[i].classList.add(this.correctClass)
            }
        }
    }

    addShadow = (index) => {
        this.addLetter(this.shadow[index], index)
        this.letters[index].classList.add(this.shadowClass)
    }

    addShadowAll = () => {
        for (let i in this.shadow) {
            if (this.shadow[i] != ' ') {
                this.addShadow(i)
            }
        }
    }
}