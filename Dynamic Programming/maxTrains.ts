// http://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/

/*
Given arrival and departure times of all trains that reach a railway station,
find the minimum number of platforms required for the railway station so that no train waits.
We are given two arrays which represent arrival and departure times of trains that stop
*/

/*
Input:
arr[]  = [900,  940, 950,  1100, 1500, 1800]
dep[]  = [910, 1200, 1120, 1130, 1900, 2000]
*/

let arr = [900,  940, 950,  1100, 1500, 1800];
let dep = [910, 1200, 1120, 1130, 1900, 2000];


// O(nLgn) based on the time to sort the arrays
function maxTrains(arrivalArr: number[], departureArr: number[]): number {
  let maxPlatformsNeeded = 0;
  arrivalArr.sort();
  departureArr.sort();
  let currentPlatformsNeeded = 0;
  let a = 0, d = 0;
  while(a < arrivalArr.length && d < departureArr.length){
    if(arrivalArr[a] < departureArr[d]){
      currentPlatformsNeeded++;
      a++;
    }else{
      currentPlatformsNeeded--;
      d++;
    }
    if(currentPlatformsNeeded > maxPlatformsNeeded){
      maxPlatformsNeeded = currentPlatformsNeeded;
    }
  }

  return maxPlatformsNeeded;
}

console.log(maxTrains(arr, dep));