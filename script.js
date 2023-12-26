function convert() {

    const temp = parseFloat(document.getElementById("temp").value);
    const unit1 = document.getElementById("unit1").value;
    const unit2 = document.getElementById("unit2").value;
  
    let result;
  
    if (unit1 === "celsius" && unit2 === "fahrenheit") {
      result = (temp * 9/5) + 32;
    } else if (unit1 === "fahrenheit" && unit2 === "celsius") {
      result = (temp - 32) * 5/9;
    } else if (unit1 === "celsius" && unit2 === "kelvin") {
      result = temp + 273.15;
    } else if (unit1 === "kelvin" && unit2 === "celsius") {
      result = temp - 273.15;
    } else if (unit1 === "fahrenheit" && unit2 === "kelvin") {
      result = (temp + 459.67) * 5/9;
    } else if (unit1 === "kelvin" && unit2 === "fahrenheit") {
      result = (temp * 9/5) - 459.67;
    } else {
      result = temp; // Same units, no conversion
    }
    document.getElementById("xyz").style.display = "block";
    document.getElementById("result").textContent = result.toFixed(3) + " " + unit2;
  }
  function resetForm() {
    document.getElementById("myForm").reset();
  }