/* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/

export function maxSequence (arr) {
  // for each num in arr add one additional number to sub array
  var max = 0
  var beg
  var end
  var sum = ''
  var solution 

  for (var i = 0; i < arr.length ; i++) {
    for (var j = 0; j < arr.length + 1; j++) {
      sum = arr.slice(i, j).join('+')
      sum = eval(sum)
      if (sum > max) {
        max = sum
        beg = i
        end = j
      }
    }
  }

 // solution = arr.slice(beg,end)

  return max
}

var arr = [25, 1, 0, -1000, -1, -1, 100]
console.log(maxSequence(arr))