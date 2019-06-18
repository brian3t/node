const reducer = (accumulate, current) => {
    if (! accumulate.hasOwnProperty(current)) {
        accumulate[current] = 0
    }
    accumulate[current]++
    return accumulate
}

function countWords(inputWords) {
    // SOLUTION GOES HERE
    return inputWords.reduce(reducer, {})
}

module.exports = countWords
