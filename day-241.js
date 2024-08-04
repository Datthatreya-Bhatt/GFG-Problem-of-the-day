//      https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1




class Solution {
    // Function to find the maximum number of meetings that can
    // be performed in a meeting room.
    maxMeetings(n, start, end) {
      let meeting = [];
      for (let i = 0; i < n; i++) {
        meeting.push([start[i], end[i]]);
      }
      let meetingSorted = meeting.sort((a, b) => {
        if (a[1] === b[1]) {
          return a[0] - b[0];
        }
        return a[1] - b[1];
      });
    
      let numberM = 1;
      let endTime = meetingSorted[0][1];
      for (let i = 1; i < meetingSorted.length; i++) {
        if (meetingSorted[i][0] > endTime) {
          endTime = meetingSorted[i][1];
          numberM++;
        }
      }
    
      return numberM;
    }


}