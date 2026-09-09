const displayTemperature = (city, temp) => {
  return `Сейчас в ${city} температура ${temp} грудусов по цельсию`
}

console.log(displayTemperature("Баймак", 23));

const SPEED_OF_LIGHT = 299792458;

const compareSpeed = (speed) => {
  if (speed > SPEED_OF_LIGHT) {
    return "Сверхсветовая скоррость";
  }
  else if (speed < SPEED_OF_LIGHT) {
    return "Субсветовая скоррость";
  } 
  else {"Скорость света"}
}

console.log(compareSpeed(299792459));

let product = "notebook";
let price = "22999";

const canPurchase = (current_budget) => {
  const result = current_budget >= price ? `$(product) - приобретен` : `вам не хватает $(price - current_budget) пополните баланс`;
  return result;
}

console.log(canPurchase(20000)); 