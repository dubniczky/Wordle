export default class WordElement {
    currentWordClass = 'current'
    correctClass = 'correct'
    offsetClass = 'offset'
    shadowClass = 'shadow-letter'
    selectedLetterClass = 'rainbow'

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

        //Add selected effect
        this.letters[0].classList.add(this.selectedLetterClass)

        //Add to wrapper
        wrapper.appendChild(this.container)
    }

    select = () => {
        this.container.classList.add(this.currentWordClass)
    }

    deselect = () => {
        this.container.classList.remove(this.currentWordClass)
    }

    addLetter = (letter, index, rollSelect=true) => {
        let l = this.letters[index]
        l.innerText = letter.toUpperCase()
        l.classList.remove(this.shadowClass)

        if (rollSelect) {
            l.classList.remove(this.selectedLetterClass)        
            if (index < 4) {
                this.letters[index+1].classList.add(this.selectedLetterClass)
            }
        }
    }

    removeLetter = (index, rollSelect=true) => {
        if (this.shadow[index] == ' ') {
            this.letters[index].innerText = ''
        }
        else {
            this.addShadow(index)
        }
        
        if (rollSelect && index > 0) {
            this.letters[index+1].classList.remove(this.selectedLetterClass)
            this.letters[index].classList.add(this.selectedLetterClass)
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
        this.addLetter(this.shadow[index], index, false)
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