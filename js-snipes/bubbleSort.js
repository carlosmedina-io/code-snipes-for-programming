function bubbleSorting(array) {
  const arrLen = array.length
  let swapped = false
  
  for (let i = 0; i < arrLen; i++) {
    let currentValue = array[i];
    let nextValue = array[i+1];
    if (currentValue > nextValue) {
      [array[i], array[i+1]] = [array[i+1], array[i]]
      swapped = true
    }
  }

  if (swapped) {
    bubbleSorting(array)
  }

  return array
}

const arr = [9,3,12,2]
const sortedArray = bubbleSorting(arr)
console.log(sortedArray);