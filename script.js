function calculateBMI() {

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value / 100;

  if (weight === "" || height === "") {
    document.getElementById("result").innerHTML =
      "Please enter valid values";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);

  let status = "";

  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    status = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  document.getElementById("result").innerHTML =
    `Your BMI is ${bmi} (${status})`;
}
