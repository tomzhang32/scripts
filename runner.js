/**
 * Runs a no-arg function many times and prints how long it took to run that many times.
 *
 * Ex:
 * var f = (a) => a+1;
 * runManyTimes(f.bind(this, 3), 100);
 */
var runManyTimes = (func, n) => {
  var start = Date.now();
  for (var i = 0; i < n; i++) func();
  var end = Date.now();
  console.log("Running %s times took %s ms", n, end-start);
}
