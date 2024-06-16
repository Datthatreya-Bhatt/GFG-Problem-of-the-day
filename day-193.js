//      https://www.geeksforgeeks.org/problems/check-if-two-line-segments-intersect0017/1




class Solution {
    /**
    * @param number[] p1
    * @param number[] q1
    * @param number[] p2
    * @param number[] q2

    * @returns number
    */
    doIntersect(p1, q1, p2, q2) {
      function onSegment(p, q, r) {
        // Check if point r lies on segment pq
        if (
          Math.min(p[0], q[0]) <= r[0] &&
          r[0] <= Math.max(p[0], q[0]) &&
          Math.min(p[1], q[1]) <= r[1] &&
          r[1] <= Math.max(p[1], q[1])
        ) {
          return true;
        }
        return false;
      }
    
      function orientation(p, q, r) {
        // Find the orientation of the ordered triplet (p, q, r)
        const val =
          (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
        if (val === 0) {
          return 0; // collinear
        } else if (val > 0) {
          return 1; // clockwise
        } else {
          return 2; // counterclockwise
        }
      }
    
      const o1 = orientation(p1, q1, p2);
      const o2 = orientation(p1, q1, q2);
      const o3 = orientation(p2, q2, p1);
      const o4 = orientation(p2, q2, q1);
    
      // General case
      if (o1 !== o2 && o3 !== o4) {
        return true;
      }
    
      // Special cases
      // p1, q1, p2 are collinear and p2 lies on segment p1q1
      if (o1 === 0 && onSegment(p1, q1, p2)) {
        return true;
      }
    
      // p1, q1, q2 are collinear and q2 lies on segment p1q1
      if (o2 === 0 && onSegment(p1, q1, q2)) {
        return true;
      }
    
      // p2, q2, p1 are collinear and p1 lies on segment p2q2
      if (o3 === 0 && onSegment(p2, q2, p1)) {
        return true;
      }
    
      // p2, q2, q1 are collinear and q1 lies on segment p2q2
      if (o4 === 0 && onSegment(p2, q2, q1)) {
        return true;
      }
    
      return false;
    }

}
