document.getElementById("submit").addEventListener("click", calculate);

function calculate(e) {
  var man = document.getElementById("selection-man").value;
  var woman = document.getElementById("selection-woman").value;
  var bb = document.getElementById("input-berat-badan").value;
  var age = document.getElementById("input-usia").value;
  var tb = document.getElementById("input-tinggi-badan").value;
  
  var bmi = bb / (((tb / 100) * tb) / 100);
  var result = bmi.toFixed(2);
  document.getElementById("result").innerHTML = result;

  if (bb >= 1 && tb >= 1) {
    e.preventDefault();
    if (bmi <= 18.5) {
      document.getElementById("comment").innerHTML =
        "Kamu kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      document.getElementById("comment").innerHTML = "Kamu normal (Ideal)";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      document.getElementById("comment").innerHTML =
        "Kamu kelebihan berat badan";
    } else {
      document.getElementById("comment").innerHTML =
        "Kamu kegemukan (Obesitas)";
    }
  } else {
    document.getElementById("result").innerHTML = "";
    document.getElementById("comment").innerHTML = "";
  }
}
