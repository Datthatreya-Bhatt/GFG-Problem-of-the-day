//     https://www.geeksforgeeks.org/problems/magical-box5306/1 



class Solution {
    /**
    * @param float p
    * @param float s

    * @returns float
    */
    maxVolume(perimeter, area) {
        let part1 = (perimeter - Math.sqrt(perimeter ** 2 - 24 * area)) / 12;
        let part2 = perimeter / 4 - 2 * part1;
        let ans = part1 ** 2 * part2;
        return ans;
    }

}