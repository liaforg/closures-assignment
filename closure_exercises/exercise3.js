
// Multiple arguments!

var sandwiches = 2,
    burgers = 3;

var theUsual = getUsualOrderFunction(2, 3);
// YOUR CODE HERE ------------------------

function theUsual() {
  return getUsualOrderFunction(2, 3);
}

function getUsualOrderFunction(sandwiches, burger) {
  console.log("We'll get " +sandwiches+ " sandwiches and " +burger+ " burgers.")
}


// ---------------------------------------

theUsual(); // We'll get 2 sandwiches and 3 burgers.
sandwiches = 0;
burgers = 1;
theUsual(); // We'll get 2 sandwiches and 3 burgers.
