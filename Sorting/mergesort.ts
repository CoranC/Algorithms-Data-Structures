
let arr = [9, 2, 5, 3, 4, 7, 6];

function mergesort(arr: number[]) : number[] {
  if(arr.length <= 1){
    return arr;
  }
  let midPoint = Math.ceil(arr.length/2);
  let leftHalf: number[] = arr.slice(0, midPoint);
  let rightHalf: number[] = arr.slice(midPoint, arr.length);
  console.log(`left half: ${leftHalf}`);
  console.log(`right half: ${rightHalf}`);
  return merge(mergesort(leftHalf),  mergesort(rightHalf));
}

function merge(leftHalf: number[], rightHalf: number[]): number[] {
  let blankArr = [];
  let i=0, j=0, k=0;
  while(j < leftHalf.length && k < rightHalf.length){
    if(leftHalf[j] < rightHalf[k]){
      blankArr.push(leftHalf[j]);
      j++;
    }else{
      blankArr.push(rightHalf[k]);
      k++;
    }
    i++
  }
  while(j < leftHalf.length){
    blankArr.push(leftHalf[j]);
    j++;
    i++;
  }
  while(k < rightHalf.length){
    blankArr.push(rightHalf[k]);
    k++;
    i++;
  }
  console.log(`Merged: ${blankArr}\n`);
  return blankArr;
}

console.log(mergesort(arr));