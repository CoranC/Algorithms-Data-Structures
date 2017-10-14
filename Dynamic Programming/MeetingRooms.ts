let arrOfObjs = [
  {start: 900, end: 910},
  {start: 940, end: 1200},
  {start: 950, end: 1120},
  {start: 1100, end: 1130},
  {start: 1500, end: 1900},
  {start: 1800, end: 2000}]

function minRoomsRequired(meetingRooms: Object[]): number{
  let start = []; let end = [];
  arrOfObjs.forEach((item)=>{
    start.push(item.start);
    end.push(item.end)}
  );
  start.sort();
  end.sort();
  let startIndex = 0, endIndex = 0;
  let maxRoomsNeeded = 0;
  let currentRoomsNeeded = 0
  while(startIndex < start.length && endIndex < end.length){
    if(start[startIndex] < end[endIndex]){
      currentRoomsNeeded++;
      startIndex++;
    }else{
      currentRoomsNeeded--
      endIndex++;
    }
    if(currentRoomsNeeded > maxRoomsNeeded){
      maxRoomsNeeded = currentRoomsNeeded;
    }
  }

  return maxRoomsNeeded;
}

console.log(minRoomsRequired(arrOfObjs));