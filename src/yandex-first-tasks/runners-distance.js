const EPSILON = 10 ** -9;

/**
 *
 * @param {number} 1 <= stadiumLength <= 10**9
 * @param {number} startPoint1
 * @param {number} speed1
 * @param {number} startPoint2
 * @param {number} speed2
 */
function ifDistanceEqual(
  stadiumLength,
  startPoint1,
  speed1,
  startPoint2,
  speed2
) {
 
  if (isDistanceToStartEqual(stadiumLength, startPoint1, startPoint2)) {
    return ['YES', 0];
  } else if (speed1 === 0 && speed2 === 0 && !isDistanceToStartEqual(stadiumLength, startPoint1, startPoint2)) {
    return ['NO'];
  }

  /* Same distance to start if points sum will be 0 (dist1 + dist2) / L = 0 */
  let t1 = (-startPoint1 - startPoint2)/(speed1 + speed2);
  let t2 =  (startPoint2 - startPoint1)/ (speed1 - speed2)

  console.log(t1);
  console.log(t2);
  
}

function calculateDistance(stadiumLength, startPoint, speed, time) {
  let distance = speed * time + startPoint;

  let circleDistance = distance % stadiumLength;
  return circleDistance;
}

function sameDirection(speed1, speed2) {
  return (speed1 > 0 && speed2 > 0) || (speed1 < 0 && speed2 < 0);
}

function sameSpeed (speed1, speed2) {
  return (Math.abs(speed1) - Math.abs(speed2) === 0);
}

function isDistanceToStartEqual(stadiumLength, firstPoint, secondPoint) {
  return  (Math.abs(stadiumLength - firstPoint - secondPoint) < EPSILON) || (Math.abs(firstPoint - secondPoint) < EPSILON);
}

module.exports = { ifDistanceEqual };
