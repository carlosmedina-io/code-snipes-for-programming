const alphabetSort = (arr) => {
    return arr.sort((a,b) => a.localeCompare(b))
}

const array = ['x', 'c', 'f', 'a']
console.log(alphabetSort(array))