// A function to generate all permutations of an input array A
// Assumes all elements of A are distinct.
function allPerms(A) {
  // Base case: empty or one-value array - only one permutation
  if (A.length <= 1) {
    return [A];
  }
  var output = [];
  // Generate all permutations of array A[1:]
  nextPerms = allPerms(A.slice(1));
  // For each permutation p of A[1:], insert A[0] into every possible position
  // between elements of p
  for (var i in nextPerms) {
    thisPerm = nextPerms[i];
    for (var j = 0; j <= thisPerm.length; j++) {
      newPerm = thisPerm.slice()
      newPerm.splice(j, 0, A[0]);
      output.push(newPerm);
    }
  }
  // Log the length of the output to verify that we generated all permutations
  // An array of length n should have n! permutations.
  // console.log(output.length)
  return output;
}
var a = allPerms([1, 2, 3, 4, 5, 6, 7])