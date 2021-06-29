function divideBy() {
     num1 = document.getElementById("firstNumber").value;
     num2 = document.getElementById("secondNumber").value;
     num2 = num2 / 100;
     let bmiScore = (num1 / (num2 * num2)).toPrecision(3);

     if (bmiScore < 18.5 && bmiScore >= 0) {
          document.getElementsByClassName("two")[0].innerHTML =
               'You\'re <u><span style="color: white;">underweight</span></u>.\u{1F610}';
          document.body.style.backgroundColor = "black";
     } else if (bmiScore >= 18.5 && bmiScore <= 24.9) {
          document.getElementsByClassName("two")[0].innerHTML =
               'You\'re <u><span style="color: green;">normal weight</span></u>.\u{1F600}';
          document.body.style.backgroundColor = "green";
     } else if (bmiScore >= 25 && bmiScore <= 29.9) {
          document.getElementsByClassName("two")[0].innerHTML =
               'You\'re <u><span style="color: orange;">overweight</span></u>.\u{1F61F}';
          document.body.style.backgroundColor = "orange";
     } else if (bmiScore >= 30) {
          document.getElementsByClassName("two")[0].innerHTML =
               'You\'re <u><span style="color: red;">obese</span></u>.\u{1F610}';
          document.body.style.backgroundColor = "red";
     }

     if (!isNaN(bmiScore)) {
          document.getElementsByClassName(
               "one"
          )[0].innerHTML = `Your BMI is ${bmiScore}`;
     } else {
          document.getElementsByClassName("one")[0].innerHTML =
               "Fill out related fields correctly.";
     }
}