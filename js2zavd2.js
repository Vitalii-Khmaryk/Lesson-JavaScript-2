let z2 = prompt("Введіть ім'я");
if (z2 == "Іван") {
  let z3 = prompt("Пароль");
  if (z3 == "ЛОГОС") {
    alert("Ласкаво просимо");
  } else if (z3 == null) {
    alert("Вхід скасовано");
  } else {
    alert("пароль невірний");
  }
} else if (z2 == null) {
  alert("Вхід скасовано");
} else {
  alert("Я вас незнаю");
}
