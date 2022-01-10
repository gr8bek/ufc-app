var elSurveyForm = document.querySelector(".survey__form");
var elSurveyInput = elSurveyForm.querySelector(".survey__input");
var elSurveySelect = elSurveyForm.querySelector(".survey__select");
var elSurveyResultBox = elSurveyForm.querySelector(".survey__result");

elSurveyForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var firstFighter = elSurveyInput.value.trim();

  var secondFighter = elSurveySelect.value.trim();

  // Assign Fullname
  if (secondFighter == "habib") {
    secondFighter = "Khabib Nurmagomedov";
  }

  if (secondFighter == "conor") {
    secondFighter = "Conor McGregor";
  }

  if (secondFighter == "jon") {
    secondFighter = "Jon Jones";
  }

  if (secondFighter == "daniel") {
    secondFighter = "Daniel Cormier";
  }

  var resultText = `${firstFighter} va ${secondFighter} 1 oydan so'ng jang olib borishadi.`;

  elSurveyResultBox.textContent = resultText;
});
