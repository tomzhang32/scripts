// Radix sort implementation for a practice interview I did
// In hindsight, there are some improvements I could have made (bit masks
// instead of dividing by a power of 10, reduce cyclomatic complexity, eg), but
// I believe it works.
/*
Scratch work:
[123, 124, 1]

One's digit
bucket 0: {}
bucket 1: 1
bucket 2: {}
bucket 3: 123
bucket 4: 124
etc

ten's digit buckets
bucket 0: 1
bucket 1: {}
bucket 2: 123, 124
etc

100's digit buckets
bucket 0: 1
bucket 1: 123, 124
bucket 2: {}
etc

1000's digit buckets
bucket 0: 1, 123, 124
bucket 1: {}
bucket 2: {}
etc


[1114, 15]

4: 1114
5: 15

1: 1114, 15

0: 105
1: 1114
*/


function radixSort (arr) {
  var buckets = new Array(10);
  var radix = 0;
  // Construct the first set of buckets
  arr.forEach(function(num) {
    var targetBucketNum = getDigitAtRadix(num, radix);
    // console.log("target ")
    if (!buckets[targetBucketNum]) {
      buckets[targetBucketNum] = [num];
    } else {
      buckets[targetBucketNum].push(num);
    }
  });

  // loop over decimal places until everything is in the 0 bucket
  while (1) {
    radix++;
    // loop over the previous buckets, arranging their contents into buckets at this significance
    var prevBuckets = buckets;
    buckets = new Array(10);

    for (var i = 0; i < 10; i++) {
      // Iterate over the array in each bucket and arrange them into a new set of buckets
      var arrInBucket = prevBuckets[i];
      if (!arrInBucket) {
        continue;
      }
      arrInBucket.forEach(function(num) {
        var targetBucketNum = getDigitAtRadix(num, radix);
        targetBucketNum = 0;
        if (!buckets[targetBucketNum]) {
          buckets[targetBucketNum] = [num];
        } else {
          buckets[targetBucketNum].push(num);
        }
        console.log("num");
      });
      console.log("arrInBucket: ", arrInBucket);
    }

    // Check if all elements are in bucket 0 and break if so
    if (buckets[0] && buckets[0].length === arr.length) {
      break;
    }
  }

  return buckets[0];
}


function getDigitAtRadix(number, radix) {
  var powerOfTen = Math.pow(10, radix);

  // zero out past our target, eg (12345, 2) -> 12 -> 120
  var numberPastDigit = Math.floor(number / (powerOfTen*10)) * 10;
  // zero out to the target 12345 -> 123
  var numberUntilDigit = Math.floor(number / powerOfTen);

  return numberUntilDigit - numberPastDigit;
}