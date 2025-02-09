const birthdayDate = document.getElementById("birthdayDate");
const resultInput = document.getElementById("result");
const button = document.getElementById("button");

function calculateDayPassed() {
  const messageDate = birthdayDate.value;
  const currentDate = new Date();
  const birthday = new Date(messageDate);
  const timeDifference = birthday - currentDate;
  const daysPassed = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  resultInput.textContent = `До дня рождения осталось ${daysPassed} дней`;

  if (daysPassed % 100 >= 5 && daysPassed % 100 <= 20) {
    resultInput.textContent = `До дня рождения осталось ${daysPassed} дней`;
  } else if (daysPassed % 100 >= 2 && daysPassed % 100 <= 4) {
    resultInput.textContent = `До дня рождения осталось ${daysPassed} дня`;
  } else if (daysPassed % 100 >= 1) {
    resultInput.textContent = `До дня рождения осталось ${daysPassed} день`;
  } else if (daysPassed === 0) {
    resultInput.textContent = `Ваш день рождения сегодня. С днем рождения!`;
  } else if (daysPassed === 1) {
    resultInput.textContent = `Ваш день рождения уже завтра`;
  } else {
    resultInput.textContent = `Ваш день рождения уже прошел...`;
  }
}

button.addEventListener("click", () => {
  const messageDate = birthdayDate.value;
  if (!messageDate) {
    document.querySelector(".errorMessage").innerHTML =
      "Пожалуйста, введите дату рождения";
    //errorMessage.style.display = "block";
    resultInput.textContent = "";
  } else {
    document.querySelector(".errorMessage").innerHTML = "";
    //errorMessage.innerHTML = "";
    //errorMessage.innerHTML.style.display = "none";
    //errorMessage.style.display = "none";
  }
});
