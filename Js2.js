let count = 0;
console.log("Count = ", count);
let ask = prompt("1.Столиця України");
if (ask.toLowerCase() === "київ" || ask.toLowerCase() === "Kyiv") {
  console.log("Вірно");
  count++;
}

console.log("Count = ", count);
let ask2 = prompt("2.Столиця Польщі");
if (ask2.toLowerCase() === "варшава" || ask2.toLowerCase() === "Warsaw") {
  console.log("Вірно");
  count++;
}

console.log("Count = ", count);
let ask3 = prompt("3.Столиця Франції");
if (ask3.toLowerCase() === "париж" || ask3.toLowerCase() === "paris") {
  console.log("Вірно");
  count++;
}
console.log("Count = ", count);
let ask4 = prompt("4.Столиця Німеччини");
if (ask4.toLowerCase() === "берлін" || ask4.toLowerCase() === "berlin") {
  console.log("Вірно");
  count++;
}
console.log("Count = ", count);
let ask5 = prompt("5.Столиця Молдови");
if (ask5.toLowerCase() === "кишинів" || ask5.toLowerCase() === "chisinau") {
  console.log("Вірно");
  count++;
}
console.log("Count = ", count);
let ask6 = prompt("6.Столиця Угорщини");
if (ask6.toLowerCase() === "будапешт" || ask6.toLowerCase() === "budapest") {
  console.log("Вірно");
  count++;
}

console.log("Count = ", count);
let ask7 = prompt("7.Столиця Іспанії");
if (ask7.toLowerCase() === "мадрид" || ask7.toLowerCase() === "Madrid") {
  console.log("Вірно");
  count++;
}
console.log("Count = ", count);
let ask8 = prompt("8.Столиця Португалії");
if (ask8.toLowerCase() === "лісабон" || ask8.toLowerCase() === "lisabon") {
  console.log("Вірно");
  count++;
}
console.log("Count = ", count);
let ask9 = prompt("9.Столиця Італії");
if (ask9.toLowerCase() === "рим" || ask9.toLowerCase() === "rome") {
  console.log("Вірно");
  count++;
}
console.log("Count = ", count);
let ask10 = prompt("10.Столиця Греції");
if (ask10.toLowerCase() === "афіни" || ask10.toLowerCase() === "athens") {
  console.log("Вірно");
  count++;
}

if (count >= 0 && count <= 3) {
  console.log(`Набрані бали = ${count} / 10`);
  console.log("Рівень:Низький");
} else if (count >= 4 && count <= 6) {
  console.log(`Набрані бали = ${count} / 10`);
  console.log("Рівень:Незадовільно");
}
if (count >= 7 && count <= 8) {
  console.log(`Набрані бали = ${count} / 10`);
  console.log("Рівень:Задовільно");
} else if (count >= 9 && count <= 10) {
  console.log(`Набрані бали = ${count} / 10`);
  console.log("Рівень:Відмінно");
}
