// Load components

class Word {
    container = null
    letters = null

    constructor(container) {
        this.container = container
        this.letters = container.children
    }
}

const wrapper = document.getElementById('wrapper')

let w1 = new Word(wrapper.children[0])
console.log(w1)