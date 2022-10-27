function conversion(oz) {
  const lbs = oz / 16;
  return lbs;
}

function grams(oz) {
  const g = oz * 28.35;
  return g;
}


let ounce = parseInt(window.prompt("How many ounces do you have?"));


//28.35 g = 1 oz

window.alert("You have " + conversion(ounce) + " pounds, or " + grams(ounce) + " grams.");

