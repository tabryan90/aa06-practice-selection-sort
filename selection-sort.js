

function selectionSort(arr) {

  let copy = [...arr];

  let sorted = [];

  while (copy.length) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = 0;
    for (let i = 1; i < copy.length; i++) {
      if (copy[i] < copy[minIndex]) {
        minIndex = i;
      }
    }

    // Add the min value to the end of the sorted array
    sorted.push(copy[minIndex]);

    // Save and remove the value at the min index
    copy.splice(minIndex, 1);

  }

  return sorted;


  // // Copy the original array
  // let copy = [...arr];

  // // Create an array to store the sorted values
  // let sorted = [];

  // // While the array is not empty...
  // while (copy.length) {
  //   // Do not move this console.log
  //   console.log(sorted.join(","));

  //   // Find the index of the minimum value in the unsorted half
  //   minIndex = copy.indexOf(Math.min(...copy))

  //   // Save and remove the value at the min index
  //   min = copy.splice(minIndex, 1);

  //   // Add the min value to the end of the sorted array
  //   sorted.push(...min);
  // }

  // return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero dividing the array into sorted and unsorted halves
  let divider = 0;

  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = divider;

    for (let i = divider + 1; i < arr.length; i++ ) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    // Save the min value
    let min = arr[minIndex];

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let j = minIndex; j > divider; j--) {
      arr[j] = arr[j - 1];
    }

    // Put the min value at the divider
    arr[divider] = min;


    // Increment the divider and repeat
    divider++;

  }

  return arr;


  // // Set a pointer at zero dividing the array into sorted and unsorted halves
  // let pointer = 1;

  // // Repeat while the unsorted half is not empty:
  // while (pointer < arr.length) {
  //   // Do not move this console.log
  //   console.log(arr.join(","));

  //   // Find the index of the minimum value in the unsorted half
  //   minIndex = arr.indexOf(Math.min(...arr.slice(pointer, arr.length)));

  //   // Save the min value
  //   min = arr[minIndex];

  //   // Shift every unsorted value to the left of the min value to the right by 1
  //   while (pointer > 0) {

  //     if (arr[pointer - 1] < min) {
  //       break;
  //     } else {
  //       arr[pointer] = arr[pointer - 1];
  //       pointer--;
  //     }
  //   }

  //   // Put the min value at the divider
  //   arr[pointer] = min;

  //   // Increment the divider and repeat
  //   pointer++;

  // }

  // return arr;
}

module.exports = [selectionSort, selectionSortInPlace];
