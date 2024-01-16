class Clock {
  constructor(country, hour, minute, second) {
    this.country = country;
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  converToSeconds() {
    return this.hour * 3600 + this.minute * 60 + this.second;
  }

  show() {
    let str = "";
    if (this.hour < 10) {
      if (this.hour == 0) {
        str += "00";
      } else str += "0" + this.hour;
    } else {
      str += this.hour;
    }
    if (this.minute < 10) {
      if (this.minute == 0) {
        str += ":00";
      } else str += ":0" + this.minute;
    } else {
      str += ":" + this.minute;
    }
    if (this.second < 10) {
      if (this.second == 0) {
        str += ":00";
      } else str += ":0" + this.second;
    } else {
      str += ":" + this.second;
    }

    return str;
  }
}

let clock;
const clocks = [];
const btnAdd = document.querySelector("#btnAdd");
console.log(clocks);

btnAdd.addEventListener("click", () => {
  let country = document.querySelector("#inpCountry").value;
  let hour = parseInt(document.querySelector("#inpHour").value);
  let minute = parseInt(document.querySelector("#inpMinute").value);
  let second = parseInt(document.querySelector("#inpSecond").value);
  clock = new Clock(country, hour, minute, second);
  clocks.push(clock);
  console.log(clocks);

  if (clocks.length >= 5) renderClocks();
  document.querySelector("#Clock_form").reset();
});
console.log(clocks);
function renderClocks() {
  let str = "";
  clocks.forEach((element) => {
    str += `<div class='clock_card'>The time in ${
      element.country
    }: ${element.show()}<p>${element.converToSeconds()} (seconds)</p></div>`;
  });
  document.querySelector("#clock_container").innerHTML = str;
}
