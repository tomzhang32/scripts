// A linear-time solution to the maximum subarray problem
function maximumSubarray(arr) {
  // Track the maximum subarray that ends at position i, and the maximum so far
  // (ie, regardless of position)
  var maxEndingHere = {start: 0, len: 0, val: 0};
  var maxSoFar = {start: 0, len: 0, val: 0};

  for (var i = 0; i < arr.length; i++) {
    // Increment the max that ends at i
    maxEndingHere.val += arr[i];
    maxEndingHere.len++;
    // If the total ever drops below 0, we would be better off starting over
    // with a 0-length subarray with sum 0
    if (maxEndingHere.val < 0) {
      maxEndingHere = {start: i+1, len: 0, val: 0};
    }
    // If the max ending at i surpasses the max thus far, update the latter
    // I guess it would be cleaner to create a new object but ¯\_(ツ)_/¯
    if (maxSoFar.val < maxEndingHere.val) {
      maxSoFar.start = maxEndingHere.start;
      maxSoFar.len = maxEndingHere.len;
      maxSoFar.val = maxEndingHere.val;
    }
  }
  return maxSoFar;
}