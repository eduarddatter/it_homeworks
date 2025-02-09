const messageDate = document.querySelector("#messageDate");
const resultInput = document.querySelector("#result");

function calculateDayPassed() {
  const messageDateStr = messageDate.value;
  const messageTimestamp = Date.parse(messageDateStr);
  const currentTimeStamp = Date.now();
  const timeDifference = messageTimestamp - currentTimeStamp;
  const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  console.log(`До дня рождения осталось ${daysPassed} дней`);

  resultInput.textContent = `До дня рождения осталось ${daysPassed} дней`;

  document.querySelector(".errorMessage").innerHTML = "";
  if (messageDate.value === "") {
    document.querySelector(".errorMessage").innerHTML +=
      "Пожалуйста, введите дату рождения";
  }

  if (daysPassed % 100 >= 5 && daysPassed % 100 <= 20) {
    resultInput.textContent = `До дня рождения осталось ${daysPassed} дней`;
  } else if (daysPassed >= 2 && daysPassed <= 4) {
    resultInput.textContent = `До дня рождения осталось ${daysPassed} дня`;
  } else if (daysPassed === 1) {
    resultInput.textContent = `До дня рождения осталось ${daysPassed} день`;
  } else {
    resultInput.textContent = `что-то не так...`;
  }
}
