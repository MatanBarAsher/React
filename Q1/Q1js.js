class Counter {
  constructor(counter) {
    this.counter = counter;
  }

  initialize(param) {
    this.counter = param;
  }

  increment() {
    this.counter++;
  }

  go() {
    let str = "";
    for (let index = 0; index < this.counter; index++) {
      console.log(this.counter);
      str += index + ", ";
    }
    str += this.counter;
    return str;
  }
}

const btnStart = document.querySelector("#btnStart");
const btnPlus = document.querySelector("#btnPlus");
const btnGo = document.querySelector("#btnGo");
const counter = new Counter();

btnStart.addEventListener("click", () => {
  let val = document.querySelector("input").value;
  counter.initialize(Number(val));
});

btnPlus.addEventListener("click", () => {
  counter.increment();
  document.querySelector("input").value = counter.counter;
});

btnGo.addEventListener("click", () => {
  document.querySelector("#input_container>p").append(counter.go());
});
