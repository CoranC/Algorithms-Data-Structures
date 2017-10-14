/*
A magic index in an array A[0..n-1] is defined to be an index such that A[i] = i.
Given a sorted array of distinct integers, write a method to find a mafic index, 
if one exists, in an array A.
*/

/**
 * Represents a book.
 * @param {array} number[] The array of sorted numbers.
 * @param {left} number The left side of the array.
 * @param {right} number[] The left side of the array..
 * @returns {number} The index of the number in the array.
 */
function findMagicIndex(array: number[], left: number, right: number): number {
  let mid = Math.floor((left + right) / 2);
  console.log(`Checking if ${mid} == ${array[mid]}`);
  if(right < left || left < 0 || right > array.length -1){
    return -1;
  }
  if(mid == array[mid]){
    return mid;
  }
  if(mid < array[mid]){
    return findMagicIndex(array, left, mid-1);
  }
  if(mid > array[mid]){
    return findMagicIndex(array, mid+1, right);
  }
}


let a = [-45, -11, -9, -3, -1, 5, 13, 19, 34, 46, 74, 88, 1001];
console.log(findMagicIndex(a, 0, a.length-1));