const fs = require('fs')

const length = 5
const infile = 'list.txt'
const outfile = 'list.json'

//Read
let lines = fs.readFileSync(infile, 'utf8').split('\r\n')
console.log('Imported from: ', infile)

//Process
let words = []
for (l of lines)
{
    if (l.length == length) {
        words.push(l)
    }    
}

//Write
fs.writeFileSync(outfile, JSON.stringify(words))
console.log('Extracted to: ', outfile)
console.log('Lines: ', words.length)