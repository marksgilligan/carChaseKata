//You have robbed a bank and are making a getaway.
//The police have intercepted your radio and know that you plan to make your getaway via an unguarded bridge
//If you can get over the bridge the police can't chase you and you make your getaway!
//If the police reach the bridge before you then you'll be caught
//Take care, if you puncture your tyre then your speed is halved!
//Work out if you can make it!

function chase(
  policeSpeed,
  yourSpeed,
  escapeDistance,
  catchDistance,
  puncturedTire
) {
  if (puncturedTire) {
    yourSpeed = yourSpeed / 2;
  }
  let timeToEscape = escapeDistance / yourSpeed;
  let policeTimeToCatch = catchDistance / policeSpeed;

  if (policeTimeToCatch <= timeToEscape) {
    return "You've been caught!";
  } else if (policeTimeToCatch > timeToEscape) {
    return "You got away!";
  }
}

module.exports = {
  chase
};
