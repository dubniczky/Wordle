import wordlist from '../../wordlist/list.json'

function randint(ceiling) {
    return Math.floor( Math.random() * ceiling )
}

export function random() {
    return wordlist[ randint(wordlist.length) ]
}