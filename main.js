function calculate() {
  const inputHeight = document.getElementById("height");
  const inputWeight = document.getElementById("weight");
  const progressBar = document.getElementById("progressBar");

  const height = parseFloat(inputHeight.value);
  const weight = parseFloat(inputWeight.value);

  if (height && weight && height > 0 && weight > 0) {
    try {
      const bmi = weight / height ** 2;
      const bmiRounded = bmi.toFixed(2);
      let result = "";
      let per = 0;
      if (bmi < 18.5) {
        result = "Underweight, BMI= " + bmiRounded;
        per = 25;
      } else if (bmi >= 18.5 && bmi < 25) {
        result = "Normal Weight, BMI= " + bmiRounded;
        per = 50;
      } else if (bmi >= 25 && bmi < 30) {
        result = "Overweight, BMI= " + bmiRounded;
        per = 75;
      } else {
        result = "Obesity, BMI= " + bmiRounded;
        per = 100;
      }
      if (progressBar) {
        progressBar.style.width = per + "%";
      }
      document.getElementById("bmicalc").textContent = result;
    } catch (error) {
      document.getElementById("bmicalc").textContent = "Invalid Values";
      if (progressBar) {
        progressBar.style.width = "0%";
      }
    }
  } else {
    document.getElementById("bmicalc").textContent = "Invalid Values";
    if (progressBar) {
      progressBar.style.width = "0%";
    }
  }
}
