const arr = [5,3,7,6,2,1,4];

/*
[5,3,7,6,2,1,4] original
[1,3,7,6,2,5,4]
*/


function quickSort(array) {
  const arrLen = array.length;
  let pivot = array[arrLen-1];
  let i = 0;
  let j = arrLen - 2;
  while(i < arrLen && j >= 0) {
    console.log(array[i], array[j], pivot)
    if (array[i] < pivot) {
      i++;
    }

    if (array[j] > pivot) {
      j--;
    }

    if (array[i] > pivot && array[j] < pivot) {
      [array[i], array[j]] =[array[j], array[i]];
      i++, j--;
    }

    if (i === j) {

    }
  }
}

quickSort(arr);