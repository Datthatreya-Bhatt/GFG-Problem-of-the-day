//  https://www.geeksforgeeks.org/problems/gray-to-binary-equivalent-1587115620/1




class Solution {
    // function to convert a given Gray equivalent n to Binary equivalent.
    grayToBinary(n) {
        // function to convert binary to gray code
        function toBinary(gray) {
            let binary = gray[0];
            for (let i = 1; i < gray.length; i++) {
                binary += (parseInt(binary[binary.length - 1]) ^ parseInt(gray[i])).toString();
            }
            return binary;
        }

        // function to convert decimal to binary
        function toBinaryFromDec(n) {
            return n.toString(2);
        }

        // function to convert binary to decimal
        function toDecimal(binary) {
            binary = binary.split('').reverse().join('');
            let res = 0;
            for (let i = 0; i < binary.length; i++) {
                res += parseInt(binary[i]) * Math.pow(2, i);
            }
            return res;
        }

        // function to convert decimal to gray code
        function toGray(decimal) {
            let binary = toBinaryFromDec(decimal);
            let gray = binary[0];
            for (let i = 1; i < binary.length; i++) {
                gray += (parseInt(binary[i]) ^ parseInt(binary[i - 1])).toString();
            }
            return gray;
        }

        return toDecimal(toBinary(toBinary(toGray(n))));
    }
}
