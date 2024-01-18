class Duck {
  constructor(name, color, age, weight, image) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.weight = weight;
    this.image = image;
  }

  show() {
    let imgString = `<img src='${this.image}'>`;
    let str = `Name: ${this.name}<br>Color: ${this.color}<br>Age: ${this.age}<br>Weight: ${this.weight}<br>Image:<br> ${imgString}`;
    return str;
  }

  quack() {
    const num = Math.round((this.age * this.weight) / 2);
    let audio = new Audio("quack_5.mp3");
    let str = "";
    for (let index = 0; index < num; index++) {
      str += "quack ";
    }
    audio.play();
    setTimeout(function () {
      audio.play();
    }, 1000);
    setTimeout(function () {
      audio.play();
    }, 1800);
    return str;
  }
}

const btnCreate = document.querySelector("#btnCreate");
const btnShow = document.querySelector("#btnShow");
const btnQuack = document.querySelector("#btnQuack");
const inpName = document.querySelector("#inpName");
const inpColor = document.querySelector("#inpColor");
const inpAge = document.querySelector("#inpAge");
const inpWeight = document.querySelector("#inpWeight");
const inpImage = document.querySelector("#inpImage");
let myDuck;

btnCreate.addEventListener("click", createDuck);

btnShow.addEventListener("click", () => {
  // document.querySelector("#display_params").innerHTML = "";
  document.querySelector("#display_params").innerHTML = myDuck.show();
});

btnQuack.addEventListener("click", () => {
  if (myDuck) {
    //   document.querySelector("#display_params").innerHTML = "";
    document.querySelector("#display_params").innerHTML = myDuck.quack();
  }
});

function createDuck() {
  myDuck = new Duck(
    inpName.value,
    inpColor.value,
    inpAge.value,
    inpWeight.value,
    inpImage.value
  );
  btnCreate.disabled = "true";
  btnShow.style.display = "block";
  btnQuack.style.display = "block";
}
