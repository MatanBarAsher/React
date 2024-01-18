class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {}

  equals(p) {
    if (this.x === p.x && this.y === p.y) return true;
    else return false;
  }
}

let points = [];

function doesContain(array, myX, myY) {
  // checks if an array contains a point with a given x and y
  array.forEach((element) => {
    if (element.x == myX && element.y == myY) return true;
  });
  return false;
}
// for example: if points = [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3}] and doesContain(points, 1, 2) is called -> the funcion will return false
// for example: if points = [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3}] and doesContain(points, 1, 1) is called -> the funcion will return true

function doesContainObj(array, point) {
  // checks if an array contains a given point
  array.forEach((element) => {
    if (element.equals(point)) return true;
  });
  return false;
}
// for example: if points = [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3}], p = {x: 1, y: 2} and doesContainObj(points, p) is called -> the funcion will return false
// for example: if points = [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3}], p = {x: 1, y: 1} and doesContainObj(points, p) is called -> the funcion will return true

function getDistance(array) {
  // gets an array and clculates the distance between all of the points by the location in the array
  let distance = 0;
  if (array.length > 1) {
    for (let index = 0; index < array.length - 1; index++) {
      console.log(array[index]);
      distance += Math.sqrt(
        Math.pow(array[index].x - array[index + 1].x, 2) +
          Math.pow(array[index].y - array[index + 1].y, 2)
      );
    }
  }
  return distance;
}
// for example: if points = [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3}] and getDistance(points) is called -> the funcion will return 3

const pointsArray = [];
const btnCreate = document.querySelector("#btnCreate");
const pointsDiv = document.querySelector("#points");
btnCreate.addEventListener("click", () => {
  const x = parseFloat(document.querySelector("#inpX").value);
  const y = parseFloat(document.querySelector("#inpY").value);
  let p = new Point(x, y);
  pointsArray.push(p);
  let str = "";
  pointsArray.forEach((element) => {
    str += `<p>${pointsArray.indexOf(element) + 1}) (${element.x}, ${
      element.y
    })</p>`;
  });
  str += `<p>Distance: ${getDistance(pointsArray)}</p>`;
  pointsDiv.innerHTML = str;
});
